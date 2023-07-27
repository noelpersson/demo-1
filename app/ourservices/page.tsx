import Footer from "@/components/Footer";
import FifthSection from "@/components/OurServices/FifthSection";
import FirstSection from "@/components/OurServices/FirstSection";
import FourthSection from "@/components/OurServices/FourthSection";
import SecondSection from "@/components/OurServices/SecondSection";
import SeventhSection from "@/components/OurServices/SeventhSection";
import SixthSection from "@/components/OurServices/SixthSection";
import ThirdSection from "@/components/OurServices/ThirdSection";
export default function page() {
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
      {/* Sixth Section */}
      <SixthSection />
      {/* seventh Section */}
      <SeventhSection />

      <Footer/>

    </main>
  );
}
