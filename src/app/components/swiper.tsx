'use client'

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { NavigationOptions } from 'swiper/types';

SwiperCore.use([Navigation, Autoplay, Pagination]);

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Link from 'next/link';
import Breakfast from './breakfast';
import Lunch from './lunch';
import Dinner from './dinner';


export default function Slider() {

  const nextSlide = useRef<HTMLButtonElement>(null);
  const prevSlide = useRef<HTMLButtonElement>(null);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      
      navigation={{
        nextEl: nextSlide.current,
        prevEl: prevSlide.current,
      } as NavigationOptions} 
      onInit={(swiper) => {
        if (swiper.params.navigation) {
          const navigation = swiper.params.navigation as NavigationOptions
          navigation.nextEl = nextSlide.current;
          navigation.prevEl = prevSlide.current;
          swiper.navigation.update();
        }
      }}
      className="bg-gray-500 w-full relative"
      pagination={{ clickable: true }}
    >
      <div className='absolute flex justify-between top-[45%] right-0 z-[5] w-full ps-[320px]'>
        <button ref={prevSlide} className='rotate-180'>
          <Image
            src='/arrow.svg'
            alt='arrow'
            width={48}
            height={48}
          />
        </button>
        <button ref={nextSlide} className='ms-10 '>
          <Image
            src='/arrow.svg'
            alt='arrow'
            width={48}
            height={48}
          />
        </button>
      </div>
      <SwiperSlide className="flex items-center justify-center swiper-slide-active">
        <div className='flex ps-[390px] items-center w-full h-full'>
          <div className='flex items-start w-full me-3'>
            <div className='flex-[2_2_100%]'>
              <h1 className='text-[96px] ms-[-5px] leading-none font-bold uppercase'>Breakfast</h1>
              <span className='text-xl font-semibold block mb-10'>Recipes: 0</span>
              <Link className='text-2xl transition-all hover:bg-[rgba(255,255,255,0.29)] px-[65px] py-[14px] border-2 border-white rounded-[30px] inline-block' href={'/'}>Enter</Link>
            </div>
          </div>
        </div>
        <Breakfast />
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className='flex ps-[390px] items-center w-full h-full'>
          <div className='flex items-start w-full me-3'>
            <div className='flex-[2_2_100%]'>
              <h1 className='text-[96px] ms-[-5px] leading-none font-bold uppercase'>Lunch</h1>
              <span className='text-xl font-semibold block mb-10'>Recipes: 0</span>
              <Link className='text-2xl transition-all hover:bg-[rgba(255,255,255,0.29)] px-[65px] py-[14px] border-2 border-white rounded-[30px] inline-block' href={'/'}>Enter</Link>
            </div>
          </div>
        </div>
        <Lunch />
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className='flex ps-[390px] items-center w-full h-full'>
          <div className='flex items-start w-full me-3'>
            <div className='flex-[2_2_100%]'>
              <h1 className='text-[96px] ms-[-5px] leading-none font-bold uppercase'>Dinner</h1>
              <span className='text-xl font-semibold block mb-10'>Recipes: 0</span>
              <Link className='text-2xl transition-all hover:bg-[rgba(255,255,255,0.29)] px-[65px] py-[14px] border-2 border-white rounded-[30px] inline-block' href={'/'}>Enter</Link>
            </div>
          </div>
        </div>
        <Dinner/>
      </SwiperSlide>
    </Swiper>
  );
}