"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Projects from '@/Hero/Projects/page'
import medium from '@/Images/iconmonstr-medium-3-240.png'
import linkedin from '@/Images/iconmonstr-linkedin-3-240.png'
import github from '@/Images/iconmonstr-github-1-240.png'
import placeholder from '@/Images/IMG_1941_3.png'
import about1 from '@/Images/iconmonstr-education-1-240.png'
import about2 from '@/Images/iconmonstr-computer-10-240.png'
import about3 from '@/Images/iconmonstr-coffee-5-240.png'
import { useState, useEffect} from 'react'
import { useScroll, motion } from 'framer-motion'
import RotatingText from '../../TextAnimations/RotatingText/RotatingText'


interface Blog{
  _id:string,
  order:number,
  title:string,
  description:string,
  url:string,
  image_url:string
}

function Hero() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [blogs,setBlogs]=useState<Blog[]>([]);
  // const [status, setStatus] = useState("");

  useEffect(()=>{
      const fetchBlogs= async (page = 1, limit = 3)=>{
        try{
          const res=await fetch(`/api/blogs?page=${page}&limit=${limit}`);
          console.log(res);
          const data=await res.json();
          console.log(data);
          setBlogs(data.data);
        }catch(err){
          console.log("Error fetchiong:",err);
        }
      };
      fetchBlogs();
    },[]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };
  const { scrollYProgress } = useScroll()

  return (
    <div className='text-white bg-black'>
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      /> */}

    {/* Top bar */}
    <section className="fixed top-0 left-0 w-full z-50  lg:mt-6">
        <div className="max-w-7xl mx-auto flex items-center bg-black/80 backdrop-blur-sm px-4 py-3 md:border-1 rounded">
             <h1 className="text-xl font-bold">PORTFOLIO</h1>
            <div className='ml-auto flex md:gap-5'>
                <Link href='https://github.com/Chdh11' target='blank'><Image src={github} alt="Github" className='w-[30px] h-[30px]  hidden md:block '/></Link>
                <Link href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='blank'><Image src={linkedin} alt="Linkedin" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] '/></Link>
                <Link href='https://medium.com/@chhavidhankhar07' target='blank'><Image src={medium} alt="Medium" className='w-[30px] h-[30px]  hidden md:block'/></Link>
                {/* image */}
            </div>
        </div>
    </section>
    

    {/* Intro section */}
    <motion.div
      className="flex flex-col lg:flex-row justify-between items-center max-w-screen-lg mx-auto mt-20 md:mt-35 lg:mt-50 mb-20 md:mb-28 lg:mb-40 gap-10 lg:gap-25 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* <section className="flex flex-col lg:flex-row justify-between items-center max-w-screen-lg mx-auto mt-20 md:mt-35 lg:mt-50 mb-20 md:mb-28 lg:mb-40 gap-10 lg:gap-25 px-6"> */}
      {/* Left: Text Section */}
      
      <div className="flex-1 flex flex-col text-center lg:text-left px-10 lg:px-6 sm:w-[70%] md:w-[70%] ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          CHHAVI DHANKHAR
        </h1>
        <p className="mb-8 text-xs md:text-base">
Hi, I build projects, solve problems, and share what I learn working with  
  <span className="inline-block">
    <RotatingText
      texts={['Full-Stack', 'AI/ML', 'Data']}
      mainClassName="text-white px-2 md:px-3 font-bold  rounded-lg inline-block"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400}}
      rotationInterval={2000}
    />
  </span>
</p>

        <Link
        href="/resume.pdf"
        download="Chhavi_Dhankhar_Resume.pdf"
        className="border px-5 py-3 text-xs md:text-base text-center rounded-xl cursor-target hover:shadow-md transition hover:bg-white/10 hover:scale-105 "
        >
          Download Resume
        </Link>
      </div>

      {/* Right: Image Section */}
      <div className="flex-1 flex justify-center ">
        <Image 
          src={placeholder} 
          alt="Profile picture" 
          width={360} 
          height={360} 
          className="rounded-xl object-cover shadow-lg "
          
        />
      </div>
    {/* </section> */}
    </motion.div>

    {/* About Section */}
  {/* About Section */}
  <section className='flex flex-col justify-center items-center mb-20 md:mb-30 lg:mb-40 px-6'>
    <motion.h1 
      className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-5 lg:mb-10 text-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      A Little About Me
    </motion.h1>

    <motion.p 
      className='mb-10 md:mb-15 lg:mb-20 text-xs md:text-base text-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      When I&apos;m not coding, you&apos;ll find me crocheting or reading.
    </motion.p>

    <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 justify-center items-center w-full max-w-screen-lg">
      {[
        { img: about1, title: "Education", text: "I hold a Computer Engineering degree, with a solid foundation in software development and exposure to hardware." },
        { img: about2, title: "What I Build", text: "I majorly work with full-stack development and AI/ML to build real-world, innovative, and impactful projects." },
        { img: about3, title: "My Drive", text: "Driven by curiosity and a passion for learning, I constantly refine my skills and take on projects that push me forward." },
      ].map((item, i) => (
        <motion.div 
          key={i} 
          className="flex flex-col  items-center text-center w-[80%] md:w-[380px] lg:w-[30%] p-6 rounded-xl border border-gray-300 bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 * i }}
        >
          <motion.img 
            src={item.img.src} 
            alt={item.title} 
            className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] mb-5 md:mb-7 mt-3'
            whileHover={{ scale: 1.1 }}
          />
          <h2 className='text-xl md:text-2xl font-bold mb-3 md:mb-4'>{item.title}</h2>
          <p className='text-xs md:text-base mb-3 '>{item.text}</p>
        </motion.div>
      ))}
    </div>
  </section>

    {/* About section */}
    {/* <section className='flex flex-col justify-center items-center mb-20 md:mb-30 lg:mb-40'>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-5 lg:mb-7'>A Little About Me</h1>
        <p className='mb-7 md:mb-15 lg:mb-20 text-xs md:text-base text-center mb-10 md:mb-15 lg:mb-20'>Fun fact: I love to crochet and read.</p>
       <div className="flex flex-col justify-center items-center lg:flex-row gap-10 md:gap-15 lg:gap-15 ml-10 mr-10 md:ml-15 md:mr-15 ">
        
            <div className="flex flex-col flex-1 justify-center items-center text-center w-[80%] md:w-[400px] md:h-[320px] lg:w-[30%] lg:h-[30%] ">
                <Image src={about1} alt='Education' className=' w-[55px] h-[55px] md:w-[80px] md:h-[80px] mb-5 md:mb-10'/>
                <div className='flex flex-col '>
                    <h1 className='text-xl md:text-2xl font-bold mb-3 md:mb-5'>Education</h1>
                    <p className='text-xs md:text-base'>I hold a Computer Engineering degree, with a solid foundation in software development and exposure to hardware.</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center text-center w-[80%] md:w-[400px] md:h-[320px] lg:w-[30%] lg:h-[30%]">
                <Image src={about2} alt='Computer' className=' w-[55px] h-[55px] md:w-[80px] md:h-[80px] mb-5 md:mb-10'/>
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-2xl font-bold mb-5'>What I Build</h1>
                    <p className='text-xs md:text-base'>I majorly work with full-stack development and AI/ML aaa to build real-world, innovative, and impactful projects.</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center text-center w-[80%] md:w-[400px] md:h-[320px] lg:w-[30%] lg:h-[30%]">
                <Image src={about3} alt='Coffee' className='w-[55px] h-[55px] md:w-[80px] md:h-[80px] mb-5 md:mb-10'/>
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-2xl font-bold mb-5'>My Drive</h1>
                    <p className='text-xs md:text-base'>Driven by curiosity and a passion for learning, I constantly refine my skills and take on projects that push me forward.</p>
                </div>
            </div>
        </div>
    </section> */}
    
    {/* Projects section */}
    <Projects />

    {/* Blog section */}
     
    <section className="w-full px-6 md:px-12 py-12">
      <motion.h1 
      className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-5 lg:mb-10 text-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
        Blogs and Articles
      </motion.h1>
      <motion.p 
      className='mb-10 md:mb-15 lg:mb-20 text-xs md:text-base text-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    > Bits of code, life, and everything else.</motion.p>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.2 }}>

      <div className="flex flex-col justify-center items-center lg:flex-row gap-8 md:gap-6 md:mb-15 lg:mb-20 lg:ml-10 lg:mr-10">

        {blogs.slice(0,3).map((blog)=>(
          <Link key={blog._id}
          href={blog.url}
          target="_blank"
          className="flex-1 relative group rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300 w-[80%] h-[250px] md:h-[300px] lg:h-[400px]"
        >
          <Image
            src={blog.image_url}
            alt="article image"
            width={500} 
            height={300}
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
            <h1 className="text-base md:text-xl lg:text-2xl font-bold mb-3">
              {blog.title}
            </h1>
            <p className="text-xs md:text-base">
              {blog.description}
            </p>
          </div>
        </Link>

        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="https://medium.com/@chhavidhankhar07"
          target="_blank"
          className="inline-block px-6 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-xl border border-white text-white  hover:scale-105 hover:bg-white/10 transition cursor-target"
        >
          Explore More
        </Link>
      </div>
      </motion.div>
    </section>

    {/* Outside tech world */}
    {/* <section className='text-center'>
      <div>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-5 lg:mb-7'>Outside the Tech realm</h1>
        <p className='mb-10 md:mb-15 lg:mb-20 text-xs md:text-base text-center'>Things I do when I'm not coding.</p>
      </div>
      <div>
        Photos
      </div>

    </section> */}

    {/* Contact Section */}
    <motion.section
  
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
    <section className='flex flex-col lg:flex-row md:gap-20 lg:gap-30 justify-center items-center mt-20 lg:mt-35 mb-20 md:mb-30 lg:mb-35 lg:px-20'>
    <div className='flex flex-col lg:w-[450px] ml-12 mr-12 md:ml-20 md:mr-20 lg:ml-0 lg:mr-0 text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5 md:mb-7 font-bold'>LET&apos;S TALK</h1>
        <p className='text-xs md:text-sm mb-5 md:mb-7 '>A project, a job opportunity, or just to chat, Send me a message.</p>
        <Link
        href="/resume.pdf"
        download="Chhavi_Dhankhar_Resume.pdf"
        className="border px-5 py-3 text-xs md:text-base text-center rounded-xl cursor-target hover:shadow-md transition mb-10  hover:scale-105 hover:bg-white/10 "
        >
          Download Resume
        </Link>

        <div className='flex gap-5 md:gap-10 justify-center mb-10 md:mb-0'>
            <Link href='https://github.com/Chdh11' target='blank'><Image src={github} alt="Github" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]  hover:scale-125 transition'/></Link>
            <Link href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='blank'><Image src={linkedin} alt="Linkedin" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] hover:scale-125 transition '/></Link>
            <Link href='https://medium.com/@chhavidhankhar07' target='blank'><Image src={medium} alt="Medium" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] hover:scale-125 transition '/></Link>
        </div>
    </div>
    <div className='px-6 py-4 rounded-xl lg:px-8 lg:py-6 md:px-6 md:py-4 border-1 border-white w-[80%] md:w-[70%] lg:w-[35%]'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label className='mb-2 md:mb-2 lg:mb-4 text-base lg:text-xl md:text-base'>Email</label>
            <input 
            type='email' 
            placeholder='Enter your email address' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mb-2 md:mb-2 rounded lg:mb-4 border-1 border-white border-opacity-100 px-2 py-2 lg:px-3 lg:py-3 md:px-2 md:py-2 text-xs md:text-xs lg:text-base'/>

            <label className='mb-2 md:mb-2 lg:mb-4  text-base lg:text-xl md:text-base'>Message</label>
            <textarea placeholder='What do you want to talk about?' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='mb-2 md:mb-2 rounded lg:mb-4 border-1 border-white border-opacity-10 px-2 py-2 lg:px-3 lg:py-3 md:px-2 md:py-2 h-[150px] text-xs md:text-xs lg:text-base mb-3 md:mb-5 lg:mb-7'/>

            <button type='submit'  className='cursor-target inline-block px-6 py-2 md:px-6 md:py-3 text-xs md:text-base bg-white text-black rounded border border-white transition cursor-pointer'>Submit</button>
        </form>
    </div>
    </section>
    

    {/* <div>
      <p className='text-center mb-10'>Chhavi Dhankhar Portfolio</p>
    </div> */}
</motion.section>
    </div>
  )

}

export default Hero