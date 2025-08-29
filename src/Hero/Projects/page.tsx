"use client"
import React from 'react'
import Image from 'next/image'
import github from '@/Images/iconmonstr-github-1-240.png'
import photobooth from '@/Images/project_images/photobooth.png'
import medium from '@/Images/iconmonstr-medium-3-240.png'
import live_app from '@/Images/iconmonstr-app-filled-240.png'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import ScrollStack from '../../../Components/ScrollStack/ScrollStack'

interface Project{
  _id:string,
  domain:string,
  title:string,
  description:string,
  stack:string[],
  video_url:string,
  url:string,
  github_repo:string,
  article:string
}

function Projects() {
  const [projects,setProjects]=useState<Project[]>([]);
  const filters=['All','Full-Stack Development','AI/ML','Data Science'];
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(()=>{
    const fetchProjects= async ()=>{
      try{
        const res=await fetch('api/projects');
        console.log(res);
        const data=await res.json();
        console.log(data);
        setProjects(data.data);
      }catch(err){
        console.log("Error fetchiong:",err);
      }
    };
    fetchProjects();
  },[]);

  const filteredProjects = projects.filter((project) =>
  selectedFilter === "All" ? true : project.domain === selectedFilter
);


   
    
  return (
    <div>
        <section>
            <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center'>My Projects</h1>
            <p className='mb-7 md:mb-15 lg:mb-15 text-xs md:text-base text-center'>A collection of what I’ve been building lately.</p>
        </section>
        {/* Filter Buttons */}
        <section className='flex flex-wrap justify-center items-center ml-10 mr-10 mb-10'>
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 ml-2 mr-2 mb-4 rounded-xl text-xs md:text-base cursor-target ${
                selectedFilter === filter 
                  ? "bg-white text-black border-1"
                  : "bg-black text-white border-1"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </section>

{/* Projects */}
<section className='mb-10 lg:mb-20'>
  <AnimatePresence>
    {filteredProjects.slice(0, 3).map((project, i) => (
      <motion.div
        key={project._id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
        className="flex flex-col gap-4"
      >
        <div className='flex flex-col lg:flex-col mr-10 ml-10 justify-center items-center mb-3 md:mb-20 lg:mb-20 lg:px-10'>
          <div className='flex flex-col gap-2 w-[95%] md:w-xl lg:w-3xl px-6 py-4 md:px-10 md:py-7 border-1 mb-3 md:mb-5 md:mb-15 lg:mb-15 md:h-auto rounded hover:shadow-lg transition-shadow duration-300'>
            <h1 className='text-base md:text-2xl font-bold'>{project.title}</h1>
            <p className='text-xs md:text-base mb-2'>{project.description}</p>
            <div>
              {project.stack.map((stack) => (
                <button
                  key={stack}
                  className="text-xs px-2 py-1 md:px-2 md:py-2 mr-2 mb-2 rounded md:rounded-xl bg-white text-black border-1"
                >
                  {stack}
                </button>
              ))}
            </div>
            <div className='flex flex-row gap-3'>
              {project.url && <Link href={project.url} target='_blank'><Image src={live_app} alt="live app" className='w-[25px] h-[25px]' /> </Link>}
              <Link href={project.github_repo} target='_blank'><Image src={github} alt="github repo" className='w-[25px] h-[25px]' /></Link>
              {project.article && <Link href={project.article} target='_blank'><Image src={medium} alt="medium article" className='w-[25px] h-[25px]' /> </Link>}
            </div>
          </div>
          {project.video_url ? (
            <motion.div
              className='hidden md:block'
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <iframe
                src={project.video_url}
                width="800"
                height="500"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                className="w-xl h-[310px] lg:w-3xl lg:h-[400px] rounded scale-120 transition duration-300"
              />
            </motion.div>
          ) : (
            <motion.div
              className='hidden md:block'
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Image
                src={photobooth}
                alt='placeholder image'
                width={550}
                height={350}
                className='w-xl h-[310px] lg:w-3xl lg:h-[400px] rounded scale-120 transition duration-300'
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</section>
{/* 
      <section className='flex justify-center items-center ml-10 mr-10 mb-15'>
        {
          filters.map((filter)=>(

            <button key={filter} 
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 ml-2 mr-2 rounded-xl text-xs md:text-base cursor-pointer ${
              selectedFilter === filter 
                ? "bg-white text-black border-1"
                : "bg-black text-white border-1"
            }`}>

              {filter}

            </button>
          ))
        }
      </section>
      <section className='mb-10 lg:mb-20'>
  {filteredProjects.slice(0, 3)
    .map((project) => (
      <motion.div
        key={project._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4"
      >
      <div key={project._id} className='flex flex-col lg:flex-col mr-10 ml-10 justify-center items-center mb-3 md:mb-20 lg:mb-20 lg:px-10'>
        <div className='flex flex-col gap-2 w-[95%] md:w-xl lg:w-3xl px-6 py-4 md:px-10 md:py-7 border-1 mb-3 md:mb-5 md:mb-15 lg:mb-15 md:h-auto rounded'>
          <h1 className='text-base md:text-2xl font-bold'>{project.title}</h1>
          <p className='text-xs md:text-base mb-2'>{project.description}</p>
          <div>
            {project.stack.map((stack) => (
              <button
                key={stack}
                className="text-xs px-2 py-1 md:px-2 md:py-2 mr-2 mb-2 rounded md:rounded-xl bg-white text-black border-1"
              >
                {stack}
              </button>
            ))}
          </div>
          <div className='flex flex-row gap-3'>
            {project.url && <Link href={project.url} target='_blank'><Image src={live_app} alt="live app" className='w-[25px] h-[25px]' /> </Link>}
            <Link href={project.github_repo} target='_blank'><Image src={github} alt="github repo" className='w-[25px] h-[25px]' /></Link>
            {project.article && <Link href={project.article} target='_blank'><Image src={medium} alt="medium article" className='w-[25px] h-[25px]' /> </Link>}
          </div>
        </div>
        {project.video_url ? (
          <div className='hidden md:block'>
            <iframe
              src={project.video_url}
              width="800"
              height="500"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              className="w-xl h-[310px] lg:w-3xl lg:h-[400px] rounded scale-120 transition duration-300"
            />
          </div>
        ) : (
          <div className='hidden md:block'>
            <Image
              src={photobooth}
              alt='placeholder image'
              width={550}
              height={350}
              className='w-xl h-[310px] lg:w-3xl lg:h-[400px] rounded scale-120 transition duration-300'
            />
          </div>
        )}
      </div>
      </motion.div>
    ))}
</section> */}

      <div className="mt-10 mb-10 md:mb-20 lg:mb-20 text-center">
        <Link
          href="https://github.com/Chdh11"
          target="_blank"
          className="cursor-target inline-block px-6 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-xl border border-white text-white hover:bg-black hover:text-white transition"
        >
          Explore More
        </Link>
      </div>
    </div>
  )
}

export default Projects
