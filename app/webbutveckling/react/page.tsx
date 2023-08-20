'use client';
import Hero15 from "@/components/Webbutveckling/React/Hero15";
import Metod15 from "@/components/Webbutveckling/React/Metod15";
import Contact15 from "@/components/Webbutveckling/React/Contact15";
import Content15 from "@/components/Webbutveckling/React/Content15"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className=" flex-col items-center justify-between z-0 p-0">
        <Hero15 />
        <Content15 />
        <Metod15 />
        <Contact15 />
        <Footer />
    </main>
  );
}

