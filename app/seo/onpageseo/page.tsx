'use client';
import Hero4 from "@/components/Seo/Onpage/Hero4";
import Metod4 from "@/components/Seo/Onpage/Metod4";
import Contact4 from "@/components/Seo/Onpage/contact4";
import Content4 from "@/components/Seo/Onpage/content4"


export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
        <Hero4 />
        <Content4 />
        <Metod4 />
        <Contact4 />
    </main>
  );
}

