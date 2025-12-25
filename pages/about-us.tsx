import { Meta } from 'src/layout/Meta';
import { Footer } from 'src/templates/Footer';
import { Hero } from 'src/templates/Hero';
import { AppConfig } from 'src/utils/AppConfig';

const AboutUs = () => {
  return (
    <div className="text-gray-600 antialiased">
      {/* 1. SEO & Metadata */}
      <Meta
        title={`About Us | ${AppConfig.title}`}
        description="Learn more about our mission and the team behind the project."
      />

      {/* 2. Header / Navigation Section */}
      <Hero />

      {/* 3. Main Content Section */}
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

      {/* 4. Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
