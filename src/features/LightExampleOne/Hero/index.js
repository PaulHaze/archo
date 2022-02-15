import { useEffect } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Parallax } from 'swiper';

import { Split } from '@Components';

import { removeSlashFromPagination } from '@/scripts';
import heroData from '@/data/hero.json';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Hero() {
  return (
    <div>
      <p>Hero Placeholder</p>
    </div>
  );
}
