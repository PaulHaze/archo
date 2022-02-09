import { useRef } from 'react';

import Head from 'next/head';

import appData from '@/data/app.json';

export function LightLayout({ children }) {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  console.log(appData);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      {children}
    </>
  );
}
