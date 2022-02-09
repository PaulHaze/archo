import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

import { LoadingScreen } from '@Components';

import '@/styles/main.scss';
import '@/styles/custom.scss';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
