import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="We build digital products people actually enjoy"
    description="From lightning-fast websites to scalable mobile apps, we design and develop experiences that look great, feel smooth, and work flawlessly."
  >
    <VerticalFeatureRow
      title="Websites that convert, not just exist"
      description="Clean design, solid performance, and real-world UX. We build websites that load fast, rank well, and turn visitors into customers."
      image="/assets/images/feature.svg"
      imageAlt="High-performance websites illustration"
    />

    <VerticalFeatureRow
      title="Apps built for real users"
      description="iOS, Android, or cross-platform — we focus on usability, speed, and scalability so your app grows with your business."
      image="/assets/images/feature2.svg"
      imageAlt="Mobile app development illustration"
      reverse
    />

    <VerticalFeatureRow
      title="Modern tech, done right"
      description="Next.js, React, Tailwind, cloud-native setups, and clean code, we even do Shopify & WooCommerce Builds. No overengineering — just the right tools for long-term success."
      image="/assets/images/feature3.svg"
      imageAlt="Modern tech stack illustration"
    />
  </Section>
);

export { VerticalFeatures };
