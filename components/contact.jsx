import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { motion } from "motion/react"


const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "61b191c9-1ab3-40fc-b618-dd61322dca6e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center ng-[length:90%_auto] font-serif dark:bg-none '>
            <motion.h4
                                      initial={{y: -20, opacity: 0}}
                                      whileInView={{y: 0, opacity: 1}}
                                      transition={{duration: 0.5, delay: 1}}
             className='text-center mb-2 text-lg font-sans' > Get in touch
             </motion.h4>
            <motion.h2 
                                      initial={{y: -20, opacity: 0}}
                                      whileInView={{y: 0, opacity: 1}}
                                      transition={{duration: 0.5, delay: 1}}
            className='text-center text-5xl font-Ovo'>Contact
            </motion.h2>

            <motion.form
                                      initial={{y: -20, opacity: 0}}
                                      whileInView={{y: 0, opacity: 1}}
                                      transition={{duration: 0.5, delay: 1}}
             onSubmit={onSubmit} className='max-w-2xl mx-auto' >

             <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input
                                          initial={{x: -50, opacity: 0}}
                                          whileInView={{x: 0, opacity: 1}}
                                          transition={{duration: 0.5, delay: 1}}
                 type="text" placeholder='Enter your name' required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darKHover-white text-black  dark:border-white' name='name'/>
                <motion.input
                                          initial={{x: 50, opacity: 0}}
                                          whileInView={{x: 0, opacity: 1}}
                                          transition={{duration: 0.5, delay: 1}}
                type="email" placeholder='Enter your email' required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darKHover-white text-black dark:border-white/90' name='email'/>
             </div>

             <motion.textarea 
                                       initial={{y: 100, opacity: 0}}
                                       whileInView={{y: 0, opacity: 1}}
                                       transition={{duration: 0.6, delay: 1}}
             rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darKHover-white text-black dark:border-white' name='message'></motion.textarea>

             <motion.button
                                       whileHover={{scale : 1.05}}
                                       transition={{duration : 0.3}}
             className='py-3 px-8 w-max mt-6 flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/50 duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darKHover' type='submit'> SUBMIT NOW  <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

             <p className='mt-4'>{result}</p>

            </motion.form>
        </motion.div>
    )
}

export default Contact
