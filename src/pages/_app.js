import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

import { ScrollToTop } from '@Components';

import '@/styles/main.scss';
import '@/styles/globals.css';
import '@/styles/custom.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Archo</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      {/* <LoadingScreen /> */}
      <Component {...pageProps} />
      <ScrollToTop />

      {/* SCRIPTS */}
      <Script id="wow" src="/assets/js/wow.min.js" />
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      />

      <Script id="simpleParallax" src="/assets/js/simpleParallax.min.js" />
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js" />

      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload" />
    </>
  );
}

export default MyApp;
