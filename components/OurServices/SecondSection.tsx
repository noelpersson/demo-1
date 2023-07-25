import { BookOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import image1 from "@/public/images/Icons/1.png";
import image2 from "@/public/images/Icons/21.png";
import image3 from "@/public/images/Icons/23.png";
import image4 from "@/public/images/Icons/24.png";
import image5 from "@/public/images/Icons/25.png";

import Curveline from "/public/llline2.svg";
import { DM_Sans } from "next/font/google";
import Card3 from "../Cards/Card3";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function SecondSection({}: Props) {
  return (
    <section className="w-full max-w-[2500px] mx-auto min-h-[500px] bg-white flex items-center jusitfy-center relative gap-x-2 my-8 md:my-32 px-[3%] md:px-16 md:py-8">
      <Image
        src={Curveline}
        className="rounded-full opacity-30 rotate-6 w-[1520px] absolute -top-96 -left-8 z-20"
        alt={"heroBackground"}
        width={1920}
        height={600}
      />
      <div className="z-50 gap-y-16 max-w-[2200px] mx-auto flex relative flex-col items-center justify-center min-h-[500px] py-24 px-[8vw] 2xl:px-60">
        {/* Title */}
        <div className="w-full gap-y-4 text-slate-800 font-medium text-5xl flex flex-col items-start text-start jusitfy-start">
          <div className="text-[#c65b6b] text-sm font-bold">Service</div>
          <div
            className={`tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Design</h1>
          </div>
        </div>

        {/* List */}
        <div className="flex items-start justify-center flex-wrap gap-6">
          <Card3
            title={"Logo & Branding"}
            description={
              "We design proessional lookvng yet simple Logo. Our designs are search..."
            }
            image={image3.src}
          />
          <Card3
            title={"Website Design"}
            description={
              "We design professional looking yet simple Logo. Our designs are search..."
            }
            image={image2.src}
          />
          <Card3
            title={"Mobile app design"}
            description={
              "e design professional looking yet simple Logo. Our designs are search..."
            }
            image={image1.src}
          />
          <Card3
            title={"Graphic/print design"}
            description={
              "e design professional looking yet simple Logo. Our designs are search..."
            }
            image={image5.src}
          />
          <Card3
            title={"Video production"}
            description={
              "e design professional looking yet simple Logo. Our designs are search..."
            }
            image={image4.src}
          />
        </div>
      </div>
    </section>
  );
}
