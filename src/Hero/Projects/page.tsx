"use client"
import React from 'react'
import Image from 'next/image'
import github from '@/Images/iconmonstr-github-1-240.png'
import photobooth from '@/Images/project_images/photobooth.png'
import medium from '@/Images/iconmonstr-medium-3-240.png'
import { useState } from 'react'
import Link from 'next/link'

function Projects() {
  const projects=[
    {
      id:1,
      domain:['All','AI/ML'],
      title:"AI Interview Coach",
      description:"Voice-based interview coach that generates, records, and evaluates job interview responses using Faster-Whisper, gTTS, and Gemini AI.",
      stack:['Python','Streamlit','Gemini AI','Faster-Whisper','gTTS'],
      url:'https://ai-interview-coach-11.streamlit.app/',
      github_repo:'',
      article:'https://medium.com/@chhavidhankhar07/how-i-built-a-voice-driven-interview-prep-app-using-whisper-gemini-and-streamlit-fcfdfc8ebfe8',
      placeholder_image:'',
    },
    {
      id:2,
      domain:['All','Full-Stack Development'],
      title:"Photobooth Web App",
      description:"A personalized photo booth web app built with Next.js and Supabase",
      stack:['Web Development','Next.js','Supabase','TailwindCSS','Vercel'],
      url:null,
      github_repo:'https://github.com/Chdh11/Photobooth-App',
      article:'https://medium.com/@chhavidhankhar07/building-a-photobooth-web-app-with-next-js-and-supabase-5a1c580bb26f',
      placeholder_image:'photobooth',
    },
    {
      id:3,
      domain:['All','AI/ML'],
      title:"Sentiment Analysis Dashboard",
      description:"'Sentiment Analysis of tweets about US Airlines' Dashboard made using Streamlit",
      stack:['Streamlit','Python'],
      url:'https://senti-dash.streamlit.app/',
      github_repo:'https://github.com/Chdh11/Sentiment_Analysis_Dashboard',
      article:null,
      placeholder_image:'',
    },
    {
      id:4,
      domain:['All','AI/ML'],
      title:"Topsis-Chhavi-102103605",
      description:"A python package on TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution)",
      stack:['Python','CLI'],
      url:null,
      github_repo:'https://github.com/Chdh11/Topsis-Chhavi-102103605',
      article:null,
      placeholder_image:'',
    },
    {
      id:5,
      domain:['All','Full-Stack Development'],
      title:"Simple Calculator",
      description:"A simple calculator application built using ReactJS",
      stack:['Web Development','ReactJS'],
      url:'https://chdh11.github.io/Calculator-ReactJS/',
      github_repo:'https://github.com/Chdh11/Calculator-ReactJS',
      article:null,
      placeholder_image:'',
    },
    
  ]
  const filters=['All','Full-Stack Development','AI/ML'];
  // for(let i=0;i<projects.length;i++)
  // {
  //   for(let j=0;j<projects[i].stack.length;j++)
  //   {
  //     if(!filters.includes(projects[i].stack[j]))
  //     {
  //       filters.push(projects[i].stack[j]);
  //     }
      
  //   }
  // }
  // console.log(filters);

  const [selectedFilter, setSelectedFilter] = useState("All");

   
    
  return (
    <div>
        <section>
            <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center'>My Projects</h1>
            <p className='mb-7 md:mb-15 lg:mb-10 text-xs md:text-base text-center'>A collection of what I’ve been building lately.</p>
        </section>

      <section className='flex justify-center items-center mb-15'>
        {
          filters.map((filter)=>(

            <button key={filter} 
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 ml-2 mr-2 rounded-xl cursor-pointer ${
              selectedFilter === filter
                ? "bg-white text-black border-1"
                : "bg-black text-white border-1"
            }`}>

              {filter}

            </button>
          ))
        }
      </section>
      
      <section className='mb-15'>
        {projects.map((project)=>
          project.domain.includes(selectedFilter) ?
          <div key={project.id} className='flex flex-row  justify-center items-center mb-15 '>
            <div className='flex flex-col gap-2 w-xl px-10 py-7 border-1 mb-10 h-[250px] rounded'>
              <h1 className='text-2xl font-bold '>{project.title}</h1>
              <p className='mb-2'>{project.description}</p>
              <div className='flex flex-row gap-3'>
                <Link href={project.github_repo} target='_blank'> <Image src={github} alt="github repo" className='w-[25px] h-[25px]'/></Link>
                {project.article ? <Link href={project.article} target='_blank'> <Image src={medium} alt="medium article" className='w-[25px] h-[25px]'/> </Link> : null}
              </div>
            </div>
            {project.url ?
              <div className=''>
                <iframe src={project.url} className="w-[580px] h-[380px] rounded hover:scale-110 transition duration-300" />
              </div> :
              <div> 
                <Image src={photobooth} alt='placeholder image' width={550} height={350} className='w-[580px] h-[380px] rounded hover:scale-110 transition duration-300' />
              </div>
            }
          </div>
          : null
        )}
      </section>
      <div className="mt-20 mb-30 text-center">
        <Link
          href="https://github.com/Chdh11"
          target="_blank"
          className="inline-block px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-black hover:text-white transition"
        >
          Explore More
        </Link>
      </div>
    </div>
  )
}

export default Projects
