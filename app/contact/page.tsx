import Contactinfo from '@/components/Contactus/Contactinfo';
import FormSection from '@/components/Contactus/FormSection';
import Headerdaisy from '@/components/Contactus/Headercontact';
import Footer from '@/components/Footer';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main className="w-full mx-auto flex flex-col items-stretch justify-center min-h-screen h-full  overflow-visible ">
      <div className="relative max-w-[2100px] w-full mx-auto">
      </div>
      <Headerdaisy />
      <FormSection />
      <Contactinfo />
      <Footer />
    </main>
  );
}
