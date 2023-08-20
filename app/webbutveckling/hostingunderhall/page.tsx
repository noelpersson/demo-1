'use client';
import Hero14 from "@/components/Webbutveckling/Hostingunderhall/Hero14";
import Metod14 from "@/components/Webbutveckling/Hostingunderhall/Metod14";
import Contact14 from "@/components/Webbutveckling/Hostingunderhall/Contact14";
import Content14 from "@/components/Webbutveckling/Hostingunderhall/Content14"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
        <Hero14 />
        <Content14 />
        <Metod14 />
        <Contact14 />
        <Footer />
    </main>
  );
}

