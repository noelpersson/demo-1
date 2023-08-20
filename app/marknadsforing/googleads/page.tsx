'use client';
import Footer from '@/components/Footer';
import Hero12 from '@/components/Marknadsforing/Googleads/Hero12'
import Metod12 from '@/components/Marknadsforing/Googleads/Metod12';
import Contact12 from '@/components/Marknadsforing/Googleads/Contact12';
import Content12 from '@/components/Marknadsforing/Googleads/Content12';

export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
      <Hero12 />
      <Content12 />
      <Metod12 />
      <Contact12 />
      <Footer />
    </main>
  );
}
