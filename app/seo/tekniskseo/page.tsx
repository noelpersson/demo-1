'use client';
import Hero3 from '@/components/Seo/tekniskseo/Hero3';
import Metod3 from '@/components/Seo/tekniskseo/Metod3';
import Contact3 from '@/components/Seo/tekniskseo/contact3';
import Content3 from '@/components/Seo/tekniskseo/Content3';

export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
      <Hero3 />
      <Content3 />
      <Metod3 />
      <Contact3 />
    </main>
  );
}
