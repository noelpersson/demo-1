import FifthSection from "@/components/About us/FifthSection";
import FirstSection from "@/components/About us/FirstSection";
import FourthSection from "@/components/About us/FourthSection";
import SecondSection from "@/components/About us/SecondSection";
import ThirdSection from "@/components/About us/ThirdSection";
import Footer from "@/components/Footer";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="w-full mx-auto flex flex-col items-stretch justify-start h-full relative overflow-visible ">
      <div className="relative max-w-[2100px] w-full mx-auto">
        <div className="rounded-full w-[49vw] h-[49vw] max-w-[800px] max-h-[800px] z-10 bg-[#d9ddfc] absolute -top-36 -right-40" />
        <div className="rounded-full w-[59vw] max-w-[900px] max-h-[900px] h-[59vw] z-[5] bg-slate-50 blur-2xl absolute -top-20 -right-16" />
        <div className="rounded-full max-w-[384px] max-h-[384px] w-[25vw] h-[25vw] z-[3] bg-white absolute top-60 -left-8" />
      </div>
      {/* First Section */}
      <FirstSection />
      {/* Second Section */}
      <SecondSection />
      {/* Third Section */}
      <ThirdSection />
      {/* Fourth Section */}
      <FourthSection />
      {/* Fifth Section */}
      <FifthSection />
      <Footer/>
    </main>
  );
}
