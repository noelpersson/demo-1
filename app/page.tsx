'use client';
import Cta from '@/components/Home/Cta';
import Features from '@/components/Home/Features';
import Hero from '@/components/Home/Hero';
import Stats from '@/components/Home/Stats';
import Testimonial from '@/components/Home/Testimonial';
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-0">
      <Hero />
      <Features />
      <Stats />
      <Testimonial />
      <Cta />
      <Footer />
    </main>
  );
}
