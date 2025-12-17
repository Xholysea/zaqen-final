import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Zaqen, your road to the web."
      subtitle="Start your Free Trial, now along with the most renown websites ever."
      button={
        <Link href="zaqen.dev">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
