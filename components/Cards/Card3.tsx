import { DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import Button from "../Button";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {
  title: string;
  description: string;
  image: string;
};
export default function Card3({ image, title, description }: Props) {
  return (
    <div
      className={`relative h-full max-w-[380px] border-[1.5px] border-[#f2f2f2] rounded-3xl flex items-start justify-start py-8 md:py-12 px-6 gap-y-4 md:gap-x-6 gap-x-3`}
      style={{ background: "linear-gradient(180deg, #f7f7f7, #ffffff)" }}
    >
      <Image
        src={image}
        className={"max-w-[128px] w-1/3 aspect-auto"}
        width={600}
        height={600}
        alt={"Icon"}
      />
      <div className="h-full gap-y-3 text-slate-800 font-medium text-xl flex flex-col items-start text-start jusitfy-center">
        <h1
          className={`tracking-tight flex flex-col items-start flex-wrap justify-start ${dm.className}`}
        >
          {title}
        </h1>
        <div className="text-gray-600/80 text-xs font-normal my-1 max-w-sm">
          {description}
        </div>
        <Button className="mt-4 text-sm" />
      </div>
    </div>
  );
}
