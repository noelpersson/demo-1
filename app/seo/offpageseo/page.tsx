'use client';
import Hero2 from '@/components/Seo/offpageseo/Hero2';
import Metod2 from '@/components/Seo/offpageseo/Metod2';
import Contact2 from '@/components/Seo/offpageseo/Contact2';
import Content2 from '@/components/Seo/offpageseo/Content2';

export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
      <Hero2 />
      <Content2 />
      <Metod2 />
      <Contact2 />
    </main>
  );
}
