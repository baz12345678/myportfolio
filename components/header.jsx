import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (


    <div  className='w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 pt-[150px] lg:pt-36  mb-36'>

      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
       >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>

      <motion.h3 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.3}}
            
      className='flex items-end  gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Bazil Junaidi <Image src={assets.hand_icon} alt='' className='w-6'/> 
      </motion.h3>

      <motion.h1
            initial={{y: -30, opacity:0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
             className='text-3xl w-[60%] sm:text-4xl sm:w-[60%] lg:text-[50px] font-Ovo uppercase'>Frontend Web developer Designer  
             </motion.h1>

      <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.7}}
            
      className='max-w-2xl mx-auto font-Ovo'>"As a Frontend Web Developer Designer, I am responsible for creating and implementing the visual and interactive elements of a website or web application that users directly engage with. Using HTML, CSS, and JavaScript, I structure and style the layout. I also employ modern frameworks such as <span className='text-orange-600 text-xl underline' >React</span> to build dynamic and responsive interfaces, making sure the user experience is seamless across different browsers and devices. Performance optimization is key, and I focus on writing clean.
      </motion.p>

     <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>  

        <motion.a
              initial={{y: 30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.8}}
              
         href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white items-center flex gap-2 dark:bg-transparent '>contact  <Image src={assets.right_arrow_white} alt='' className='w-4'/>
         </motion.a>


        <motion.a
                      initial={{y: 30, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      transition={{duration: 0.5, delay: 0.8}}
         href="/bazil.cv.pdf" download className='px-8 py-2.5 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black '>my resume  <Image src={assets.download_icon} alt='' className='w-4'/>
         </motion.a>

     </div>
    </div>
  )
}

export default Header
