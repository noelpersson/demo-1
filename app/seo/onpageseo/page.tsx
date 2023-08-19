'use client';
import Hero4 from "@/components/Seo/Onpage/Hero4";
import Metod from "@/components/Seo/Onpage/Metod";
import Contact from "@/components/Seo/Onpage/contact";


export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
        <Hero4 />
        <Metod />
        <Contact />
    </main>
  );
}

