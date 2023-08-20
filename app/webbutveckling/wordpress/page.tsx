'use client';
import Hero16 from "@/components/Webbutveckling/Wordpress/Hero16";
import Metod16 from "@/components/Webbutveckling/Wordpress/Metod16";
import Contact16 from "@/components/Webbutveckling/Wordpress/Contact16";
import Content16 from "@/components/Webbutveckling/Wordpress/Content16"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
        <Hero16 />
        <Content16 />
        <Metod16 />
        <Contact16 />
        <Footer />
    </main>
  );
}

