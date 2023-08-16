import Image from "next/image";
import React from "react";
import image1 from "/public/images/1.png";
import image2 from "/public/images/11.png";
import image3 from "/public/images/19.png";
import image4 from "/public/images/20.png";
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
        <div className="mt-24 z-50 md:w-3/4 max-w-[1200px] gap-y-4 text-slate-800 md:font-medium font-bold text-5xl flex flex-col items-start text-start jusitfy-start">
          <div
            className={`tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>One of the fastest</h1>
            <h1>growing agencies</h1>
          </div>
          <div className="text-gray-600/80 text-sm font-normal max-w-[420px]">
            We design and develop web and mobile applications for our clients
            worldwide.
          </div>
        </div>

        {/* image */}
        <Image
          src={image4.src}
          className="-scale-x-100 drop-shadow-2xl !z-40 w-full sm:w-[88%] max-w-[500px] max-h-[500px] absolute left-1/2 sm:translate-x-0 -translate-x-1/2 top-[15%] mx-auto sm:left-auto sm:right-[15%] sm:top-[5%]"
          alt={"heroBackground"}
          width={410}
          height={410}
        />
      </div>
    </section>
  );
}
