import React from 'react';
//import images

import HeroImg from '../img/hero.png.webp'
import WomanImg from '../img/woman_hero.png'
//import Link
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='h-[500px] bg-hero
  bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/**text */}
      <div className='flex flex-col justify-center'>
        {/**pretittle */}
        <div className='font-semibold flex items-center uppercase mb-10'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'>New Trend</div>
        </div>
        {/**title */}
        <h1 className='text-[50px] leading-[1.1] 
        font-light mb-4'>AUTUMN SALE STYLISH <br />
        <span className='font-semibold'>MENS</span>
        </h1>
        <Link to="/" className='self-start uppercase font-semibold border-b-2
        border-primary' >
        Discover More</Link>
      </div>
      {/**image */}
      <div className='hidden lg:block'>
        <img className='h-[400px]' src={HeroImg} alt="" />
      </div>
    </div>
  </section>
};

export default Hero;
