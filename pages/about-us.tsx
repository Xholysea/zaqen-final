import Link from 'next/link';
import { Background } from 'src/background/Background';
import { Meta } from 'src/layout/Meta';
import { Section } from 'src/layout/Section';
import { NavbarTwoColumns } from 'src/navigation/NavbarTwoColumns';
import { Footer } from 'src/templates/Footer';
import { AppConfig } from 'src/utils/AppConfig';

import { Logo } from '@/templates/Logo';

const AboutUs = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`About Us | ${AppConfig.title}`}
        description="Learn more about our mission."
      />

      {/* --- HEADER SECTION --- */}
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link href="/about-us/">About Us</Link>
            </li>
            <li>
              <Link href="https://calendly.com/antoine-zaqen/30min">
                Book A Meeting
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </Background>

      {/* --- MAIN CONTENT --- */}
      <main className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">About Us</h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Welcome to our website! We are a passionate team committed to
              delivering the best experience for our users.
            </p>

            <p>
              Our mission is to combine creativity, technology, and innovation
              to build solutions that make a difference.
            </p>

            <p>
              Thank you for visiting, and we look forward to connecting with
              you!
            </p>
          </div>
        </div>
      </main>

      {/* --- FOOTER SECTION --- */}
      <Footer />
    </div>
  );
};

export default AboutUs;
