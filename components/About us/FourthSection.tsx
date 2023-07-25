import { UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import image3 from "/public/images/12.png";
import { DM_Sans } from "next/font/google";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function FourthSection({}: Props) {
  return (
    <section className="w-full min-h-[500px] overflow-hidden bg-white">
      <div className="gap-y-12 md:gap-y-16 max-w-[2200px] mx-auto flex lg:flex-row flex-col relative items-center justify-center min-h-[500px] py-24 px-[8vw] lg:px-80">
        {/* image */}
        <div className="lg:w-1/2 relative lg:min-h-[500px] flex items-center justify-end overflow-visible rounded-full bg-transparent">
          <Image
            src={image3.src}
            className="animate-Hover aspect-square w-full object-contain max-w-[600px] max-h-[600px]"
            alt={"secondSection"}
            width={1800}
            height={1800}
          />
        </div>
        <div className="flex flex-col gap-y-4 lg:w-1/2 items-center jusitfy-center z-50 md:px-14">
          {/* Title */}
          <div className="w-full gap-y-4 text-slate-800 font-medium text-4xl md:text-5xl flex flex-col items-start text-start jusitfy-start">
            <div className="text-[#c65b6b] text-sm font-bold">Our team</div>
            <h1
              className={`tracking-tight flex flex-col items-start flex-wrap justify-start ${dm.className}`}
            >
              Alone, we can achieve so little; together, we can accomplish so
              much
            </h1>
            <div className="text-gray-600/80 text-sm font-normal max-w-[420px]">
              Donec metus lorem, vulputate at sapien sit amet auctor iaculis
              lorem. ln vel hendrerit nisi. Vestibulum egot risus velit_ Aliquam
              tristique libero at dui sodales, et placerat orci lobortis.
              <br />
              <br />
              Maecenas ipsum neque, elemontum id dignissim et,vitae mauris.
            </div>
            <button className="px-6 py-4 rounded-2xl text-base focus:ring-indigo-300 focus:ring-2 outline-none ring-0 font-medium text-white bg-indigo-500 transition-all duration-150 hover:bg-indigo-400 active:bg-indigo-600 flex items-center gap-x-2 justify-start">
              <UserGroupIcon className="w-6" />
              Our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
