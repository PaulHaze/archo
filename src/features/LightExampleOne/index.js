/* eslint-disable import/extensions */
import { LightLayout } from '@/layouts';
import { Footer } from '@/components';
import { Hero } from './Hero';
import { AboutUs } from './AboutUs';

export function LightExampleOne() {
  return (
    <LightLayout>
      <div className="min-h-screen bg-primary-dark">
        <Hero />
        <AboutUs />
      </div>
      <div className="mt-2 bg-primary-dark">
        <Footer />
      </div>
    </LightLayout>
  );
}
