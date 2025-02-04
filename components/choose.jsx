import React from 'react';

const Choose = () => {
  return (
     <div>
         <div className='text-2xl py-4 mx-auto text-center'>
        <h2>WHY CHOOSE ME</h2>
      </div>
  
    
    <div className="flex flex-col h-[300px] md:flex-row text-sm mb-20 mt-10">
        
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  hover:bg-blue-500 hover:text-black dark:hover:text-white dark:bg-darKtheme transition-all duration-500">
        <b>CLEAN CODING</b>
        <p>
           My aim is to write clean codes because is important to understand the design of website and useful for you to apply the changes 
        </p>
      </div>
      <div className="border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5  hover:blue-500 hover:text-black dark:bg-darkTheme  dark:hover:text-white hover:bg-darKHover transition-all duration-500">
        <b>FAST SERVICE :</b>
        <p>
        I dedicated and passionate about my work and doing work on time or ealier then time.My first priority is to give fast service
        </p>
      </div>
    </div>
    </div>
  );
};

export default Choose;