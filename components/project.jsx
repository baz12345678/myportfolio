import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Project = ({ isDarkMode }) => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='project' className='w-full px-1 py-10 scroll-mt-20'>


      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='text-center mb-2 text-lg font-sans' > 
      </motion.h4>


      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='text-center text-5xl font-Ovo'>My Projects
      </motion.h2>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            key={index} className='aspect-square bg-no-repeat bg-cover bg-centre
             rounded-lg relative cursor-pointer group:' style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            
              <div>

                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
                <a target='_blank'>{project.link}</a>
                
            
              
              </div>

              {/* <div  className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>

                <Image  src={assets.send_icon} alt='send icon' className='w-5' a
                />
                
              </div> */}

            </div>

          </motion.div>
        ))}
      </motion.div>
      {/* <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-1 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darKHover' href="">Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </motion.a> */}
    </motion.div>
  )
}

export default Project
