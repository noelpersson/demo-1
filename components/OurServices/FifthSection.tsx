import { BookOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import image1 from "@/public/images/Icons/1.png";
import image2 from "@/public/images/Icons/26.png";
import image3 from "@/public/images/Icons/27.png";

import Curveline from "/public/llline2.svg";
import { DM_Sans } from "next/font/google";
import Card3 from "../Cards/Card3";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function FifthSection({}: Props) {
  return (
    <section className="w-full mx-auto min-h-[500px] bg-[#ecf2f7] flex items-center jusitfy-center relative gap-x-2 md:my-12 md:px-16 py-8">
      <div className="z-50 gap-y-16 max-w-[2200px] mx-auto flex relative flex-col items-center justify-center min-h-[500px] py-24 px-[8vw] 2xl:px-60">
        {/* Title */}
        <div className="w-full gap-y-4 text-slate-800 font-medium text-5xl flex flex-col items-start text-start jusitfy-start">
          <div className="text-[#c65b6b] text-sm font-bold">Service</div>
          <div
            className={`tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Business</h1>
          </div>
        </div>

        {/* List */}
        <div className="flex items-stretch justify-center flex-wrap gap-6">
          <Card3
            title={"Digital strategy"}
            description={
              "We design proessional lookvng yet simple Logo. Our designs are search..."
            }
            image={image1.src}
          />
          <Card3
            title={"Business consulting"}
            description={
              "We design professional looking yet simple Logo. Our designs are search..."
            }
            image={image2.src}
          />
          <Card3
            title={"Content writing"}
            description={
              "We design professional looking yet simple Logo. Our designs are search..."
            }
            image={image3.src}
          />
          <Card3
            title={"Reporting"}
            description={
              "We design professional looking yet simple Logo. Our designs are search..."
            }
            image={image3.src}
          />
        </div>
      </div>
    </section>
  );
}
