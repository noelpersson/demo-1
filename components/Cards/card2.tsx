import { DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {
  title: string;
  description: string;
  image: string;
  head: string;
  Left: boolean;
};
export default function Card2({
  Left,
  image,
  head,
  title,
  description,
}: Props) {
  return (
    <div
      className={`${
        Left ? "md:flex-row" : "md:flex-row-reverse"
      } w-full bg-transparent mx-auto max-w-[980px] flex flex-col items-center justify-start gap-y-4 gap-x-4 md:gap-x-10`}
    >
      <div className="shrink-0 relative group p-9 w-[35%] min-h-[190px] md:w-80 h-[35%] min-w-[190px] md:h-80 bg-white rounded-3xl flex items-center">
        <Image
          className="select-none pointer-events-none drop-shadow-xl transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 rotate-0 scale-100 w-full object-contain aspect-square h-full"
          src={image}
          width={500}
          height={500}
          alt={"Discover"}
        />
      </div>
      <div className="gap-y-5 text-slate-800 font-medium text-3xl flex flex-col items-start text-start jusitfy-center">
        <div className="text-secondary text-sm font-bold">{head}</div>
        <h1
          className={`tracking-tight flex flex-col items-start flex-wrap justify-start ${dm.className}`}
        >
          {title}
        </h1>
        <div className="text-gray-600/80 text-xs font-normal my-1 max-w-sm">
          {description}
        </div>
      </div>
    </div>
  );
}
