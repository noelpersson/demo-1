'use client';
import Hero13 from '@/components/Marknadsforing/Meta/Hero13';
import Metod13 from '@/components/Marknadsforing/Meta/Metod13';
import Contact13 from '@/components/Marknadsforing/Meta/Contact13';
import Content13 from '@/components/Marknadsforing/Meta/Content13';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
      <Hero13 />
      <Content13 />
      <Metod13 />
      <Contact13 />
      <Footer />
    </main>
  );
}
