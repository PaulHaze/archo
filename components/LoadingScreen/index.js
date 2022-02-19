/* eslint-disable import/extensions */
import { useEffect } from 'react';
import Script from 'next/script';
import { loadingPace } from '@/scripts/loadingPace';
import appData from '@/data/app.json';

export function LoadingScreen() {
  useEffect(() => {
    const bodyEl = document.querySelector('body');
    if (appData.showLoading) {
      loadingPace();
      if (bodyEl.classList.contains('hideX')) {
        bodyEl.classList.remove('hideX');
      } else {
        bodyEl.classList.add('hideX');
      }
    }
  }, []);

  return (
    <>
      <div className={`${appData.showLoading ? 'showX' : 'hideX'}`}>
        <div id="preloader">
          <div className="loading-text">Loading</div>
        </div>
      </div>
      {appData.showLoading && (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/assets/js/pace.min.js"
        />
      )}
    </>
  );
}
