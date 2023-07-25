import React from "react";
import image1 from "@/public/images/Icons/1.png";
import image2 from "@/public/images/Icons/26.png";
import image3 from "@/public/images/Icons/27.png";
import { DM_Sans } from "next/font/google";
import Card3 from "../Cards/Card3";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function SixthSection({}: Props) {
  return (
    <section className="w-full max-w-[2500px] mx-auto min-h-[500px] bg-white flex items-center jusitfy-center relative gap-x-2 my-8 md:my-12 px-[3%] md:px-16 md:py-8">
      <div className="z-50 gap-y-16 max-w-[2200px] mx-auto flex relative flex-col items-center justify-center min-h-[500px] py-6 px-[8vw] 2xl:px-60">
        {/* Title */}
        <div className="w-full gap-y-4 text-slate-800 font-medium text-5xl flex flex-col items-start text-start jusitfy-start">
          <div className="text-[#c65b6b] text-sm font-bold">Service</div>
          <div
            className={`tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Technology</h1>
          </div>
        </div>

        {/* List */}
        <div className="flex items-stretch justify-center flex-wrap gap-6">
          <Card3
            title={"Hosting"}
            description={
              "We design proessional lookvng yet simple Logo. Our designs are search..."
            }
            image={image1.src}
          />
          <Card3
            title={"Big data analysis"}
            description={
              "We design professional looking yet simple Logo. Our designs are search..."
            }
            image={image2.src}
          />
        </div>
      </div>
    </section>
  );
}
