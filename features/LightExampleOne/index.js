/* eslint-disable import/extensions */
import { LightLayout } from '@/layouts';
import { Footer } from '@/components';
import { LightHeroOne } from '@/features/Hero/LightHeroOne';
import { AboutUs } from '@/features/AboutUs/AboutUs_1';
import { ServicesOne } from '@/features/Services/ServicesOne';
import { PortfolioOne } from '../Portfolio/PortfolioOne';

export function LightExampleOne() {
  return (
    <LightLayout>
      <div className="min-h-screen bg-primary-light">
        <LightHeroOne />
        <AboutUs />
        <ServicesOne />
        <PortfolioOne />
      </div>
      <div className="mt-2 bg-primary-dark">
        <Footer />
      </div>
    </LightLayout>
  );
}
