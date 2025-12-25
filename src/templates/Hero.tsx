import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://zaqen.dev/about-us/">About Us</Link>
        </li>
        <li>
          <Link href="https://calendly.com/antoine-zaqen/30min">
            Book A Meeting
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The best development firm in\n'}
            <span className="text-primary-500">The Middle East</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://wa.me/96176480122">
            <Button xl>Reach out to us here</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
