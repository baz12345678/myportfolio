import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {

    
    return (
        <div>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.bazil1 : assets.bazil} alt='' className='w-40 mx-auto mb-2' />

                <div className='flex w-max items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6 ' />
                    baziljunaidi262@gmail.com
                </div>
            </div>


            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mb-1'>
                <p>
                    ALL COPYRIGHTS RESERVED 2025.
                </p>


                {/* <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="www.facebook.com">facebook</a></li>
                    <li><a target='_blank' href="www.instagram.com">instagram</a></li>
                    <li><a target='_blank' href="www.linkedin.com">linkedin</a></li>
                </ul> */}



            </div>
        </div>
    )
}

export default Footer
