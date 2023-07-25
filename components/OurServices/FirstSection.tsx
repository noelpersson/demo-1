import Image from "next/image";
import React from "react";
import image1 from "/public/images/18.png";
import { DM_Sans } from "next/font/google";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function FirstSection({}: Props) {
  return (
    <section className="w-full pt-12 min-h-[500px] bg-slate-100 mx-auto flex flex-col items-center jusitfy-start relative px-16 py-8">
      <div className="relative w-full flex items-center max-w-[2500px] mx-auto justify-center gap-x-2">
        {/* Title */}
        <div className="mt-24 z-50 md:w-3/4 max-w-[1200px] gap-y-4 text-slate-800 font-medium text-5xl flex flex-col items-start text-start jusitfy-start">
          <div
            className={`tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Best solutions for your</h1>
            <h1>business</h1>
          </div>
          <div className="text-gray-600/80 text-sm font-normal max-w-[420px]">
            Give your business a unique logo to stand out from crowd. We&apos;ll
            create logo specifically for your company.
          </div>
        </div>

        {/* image */}
        <Image
          src={image1.src}
          className="drop-shadow-2xl !z-40 w-[80%] max-w-[600px] max-h-[600px] absolute right-[15%] top-[5%] "
          alt={"heroBackground"}
          width={1500}
          height={1500}
        />
      </div>
    </section>
  );
}
