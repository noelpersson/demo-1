import FifthSection from '@/components/About us/FifthSection';
import FirstSection from '@/components/About us/FirstSection';
import Team from '@/components/About us/Team';
import Footer from '@/components/Footer';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main className="w-full mx-auto flex flex-col items-stretch justify-start h-full relative overflow-hidden ">
      <div className="relative max-w-[2100px] w-full mx-auto"></div>
      {/* First Section */}
      <FirstSection />
      <Team />
      <FifthSection />
      <Footer />
    </main>
  );
}
