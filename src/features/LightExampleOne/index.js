import { LightLayout } from '@/layouts';
import { Footer } from '@/components';

export function LightExampleOne() {
  return (
    <LightLayout>
      <div className="min-h-screen bg-primary-dark">
        <p>LightExampleOne w/ LightLayout</p>
      </div>
      <div className="mt-2 bg-primary-dark">
        <Footer />
      </div>
    </LightLayout>
  );
}
