'use client';
import Herostartsida from '@/components/Seo/Seostartsida/Herostartsida';
import Cardforoffpageseo from '@/components/Seo/Seostartsida/Cardforoffpageseo';
import Cardforonpageseo from '@/components/Seo/Seostartsida/Cardforonpageseo';
import Cardfortekniskseo from '@/components/Seo/Seostartsida/Cardfortekniskseo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-0">
      <Herostartsida />
      <Cardforoffpageseo />
      <Cardforonpageseo />
      <Cardfortekniskseo />
      <Footer />
    </main>
  );
}
