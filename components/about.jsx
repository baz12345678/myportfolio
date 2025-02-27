import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
    return (
        <motion.div

        initial={{opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.5, delay: 1}}
         id='about' className='w-full px-[12%] py-10 scroll-mt-20 sm:t-[700px] '>
  
        
            <motion.h4
                                  initial={{y: -20, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  transition={{duration: 0.5, delay: 0.5}}
            
            className='text-center mb-2 text-lg font-sans' >INTRODUCTION
            </motion.h4>


            <motion.h2
                                  initial={{y: 30, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  transition={{duration: 0.5, delay: 0.5}}
            className='text-center text-5xl font-Ovo'>About 
            </motion.h2>

            <motion.div
                                  initial={{opacity: 0}}
                                  whileInView={{ opacity: 1}}
                                  transition={{duration: 0.5,}}
            className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                <motion.div
                                      initial={{scale: 1, opacity: 0}}
                                      whileInView={{scale: 1.1, opacity: 1}}
                                      transition={{duration: 0.5}}
                 className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                <motion.div 
                                      initial={{opacity: 0}}
                                      whileInView={{ opacity: 1}}
                                      transition={{duration: 0.5, delay: 1}}
                
                className='flex-1'>
                    <p className='mb-10 max-w-2xl font-serif text-base'>   I'm a passionate Frontend Web Designer with a focus on building clean, responsive, and
                        user-friendly websites. I working in HTML, CSS, JavaScript, and modern frontend framework
                        like React  With a keen eye for detail, I always aim to provide seamless and engaging
                        user experiences.I am always looking or ways to improve my skills and contribute to meaningful projects.</p>

                    <motion.ul
                                          initial={{ opacity: 0}}
                                          whileInView={{ opacity: 1}}
                                          transition={{duration: 0.8, delay: 1.2}}
                    
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>


                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                            whileHover={{scale: 1.05}}
                             className='border-[0.5px] border-gray-800 rounded-xl p-6 cursor-pointer hover:bg-blue-500 hover:text-white hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darKHover' key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />


                                <h3 className='my-4 font-semibold text-black dark:text-white'>{title} </h3>
                                <p className='text-black text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
          
                  <motion.h4
                      initial={{y: -20, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      transition={{duration: 0.5, delay: 1}}
                   className='my-4 text-gray-700 font-serif dark:text-white/80'>Tools I use
                   </motion.h4>

                  <motion.ul
                                        initial={{opacity: 0}}
                                        whileInView={{ opacity: 1}}
                                        transition={{duration: 0.6, delay: 1}}
                  className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <motion.li
                        whileHover={{scale: 1.1}}
                         className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>

                            <Image src={tool} alt='tool' className='w-5 sm:w-7'/>

                        </motion.li>
                    ))}
                  </motion.ul>

                </motion.div>
            </motion.div>
        </motion.div>

    )
}

export default About
