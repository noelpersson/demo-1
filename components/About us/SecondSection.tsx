import { BookOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import image1 from "/public/images/1.png";
import image2 from "/public/images/10.png";
import image3 from "/public/images/12.png";
import curve from "/public/images/7.png";
import image4 from "/public/images/13.png";
import image5 from "/public/images/14.png";
import image6 from "/public/images/15.png";
import image7 from "/public/images/16.png";
import image8 from "/public/images/17.png";
import image9 from "/public/images/18.png";
import Curveline from "/public/llline2.svg";
import { DM_Sans } from "next/font/google";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function SecondSection({}: Props) {
  return (
    <section className="w-full max-w-[2500px] mx-auto min-h-[500px] bg-white flex flex-col lg:flex-row items-center jusitfy-center relative gap-x-2 my-12 md:my-32 px-[8vw] md:px-16 py-8">
      <Image
        src={Curveline}
        className="rounded-full opacity-30 rotate-6 w-[1520px] absolute -top-96 -left-8 z-20"
        alt={"heroBackground"}
        width={1920}
        height={600}
      />
      {/* image */}
      <div className="lg:w-1/2 relative lg:min-h-[500px] z-50 flex items-center justify-end overflow-visible rounded-full bg-transparent">
        <Image
          src={image2.src}
          className="animate-Hover aspect-square w-full object-contain max-w-[600px] max-h-[600px]"
          alt={"secondSection"}
          width={1800}
          height={1800}
        />
      </div>
      <div className="flex flex-col gap-y-4 lg:w-1/2 items-start jusitfy-center z-50 md:px-20">
        {/* Title */}
        <div className="w-full gap-y-4 text-slate-800 font-medium text-4xl md:text-5xl flex flex-col items-start text-start jusitfy-start">
          <div className="text-[#c65b6b] text-sm font-bold">Who we are</div>
          <div
            className={`tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Building software for world changers</h1>
          </div>
          <div className="text-gray-600/80 text-sm font-normal max-w-[420px]">
            Donec metus lorem, vulputate at sapien sit amet auctor iaculis
            lorem. ln vel hendrerit nisi. Vestibulum egot risus velit_ Aliquam
            tristique libero at dui sodales, et placerat orci lobortis.
            <br />
            <br />
            Maecenas ipsum neque, elemontum id dignissim et,vitae mauris.
          </div>
          <button className="px-6 py-4 rounded-2xl text-base focus:ring-indigo-300 focus:ring-2 outline-none ring-0 font-medium text-white bg-indigo-500 transition-all duration-150 hover:bg-indigo-400 active:bg-indigo-600 flex items-center gap-x-2 justify-start">
            <BookOpenIcon className="h-6" />
            Read more
          </button>
        </div>

        <div className="w-full flex items-center justify-start gap-x-10 my-4">
          {/* #1 */}
          <div className="flex flex-col items-start justify-center ">
            <div className="text-[#c65b6b] text-2xl font-bold">10+</div>
            <div className="text-sm font-medium text-gray-600/80">
              Years on the market
            </div>
          </div>
          {/* divider */}
          <div className="h-12 w-[1.5px] bg-gray-400/80" />
          {/* #2 */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[#c65b6b] text-2xl font-bold">1500+</div>
            <div className="text-sm font-medium text-gray-600/80">
              Projects delivered so far
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
