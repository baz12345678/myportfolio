'use client'


import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Service from "@/components/service";
import { useEffect, useState } from "react";



export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
setIsDarkMode(true)
}else{
  setIsDarkMode(false)
}
  },[])

  useEffect(()=>{

    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme= 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme= '';
    }

  },[isDarkMode])
  return (

<>
<Navbar isDarkMode={isDarkMode} setIsDarkMode = {setIsDarkMode}/>
<Header isDarkMode={isDarkMode} setIsDarkMode />
<About isDarkMode={isDarkMode} setIsDarkMode />
<Service isDarkMode={isDarkMode} setIsDarkMode />
<Project isDarkMode={isDarkMode} setIsDarkMode />
<Contact isDarkMode={isDarkMode} setIsDarkMode />
<Footer isDarkMode={isDarkMode} />
</>
      
  );
}
