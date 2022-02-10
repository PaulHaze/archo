import { useRef, useEffect } from 'react';

import Head from 'next/head';

import { NavBar } from '@Components';

import appData from '@/data/app.json';

export function LightLayout({ children }) {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;

    // Add a certain class when window scrolls below a threshold
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
        logo.setAttribute('src', appData.darkLogo);
      } else {
        navbar.classList.remove('nav-scroll');
        logo.setAttribute('src', appData.lightLogo);
      }
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <NavBar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
    </>
  );
}
