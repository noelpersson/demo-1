import React from "react";
import { DM_Sans } from "next/font/google";
import Card from "../Cards/card";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function ThirdSection({}: Props) {
  return (
    <section className="w-full min-h-[500px] overflow-hidden bg-[#24232e]">
      <div className="gap-y-16 max-w-[2200px] mx-auto flex relative flex-col items-start justify-center min-h-[500px] py-24 px-[8vw] lg:px-80">
        {/* background */}
        <div className="w-[35vw] min-w-[300px] max-w-[700px] absolute top-0 md:top-1/3 -translate-y-1/3 right-0 aspect-square rounded-full bg-transparent border-dashed border-[#757494ab] opacity-80 border-[2px]" />
        <div className="w-[100vw] absolute top-1/2 rotate-45 -translate-x-1/4 -left-0 h-[1px] bg-slate-400/30" />
        <div className="w-28 max-w-[200px] absolute top-2/4 left-72 h-28 rounded-full bg-slate-400/20 " />

        <div className="gap-y-4 text-slate-800 font-medium text-4xl md:text-5xl flex flex-col z-10 items-start text-start jusitfy-start">
          <div className="text-[#c65b6b] text-sm font-bold">Our Values</div>
          <div
            className={`tracking-tight text-slate-50 flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Why should you work</h1>
            <h1>with us?</h1>
          </div>
          <div className="text-gray-200/60 text-sm font-normal max-w-[420px]">
            Nuua facilisi, Nullam in id dolor blandit rutrum eget vulputate
            augue sed eu leo eget risus.
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-8 ">
          {/* #1 */}
          <Card
            number={1}
            title={"Exceed clients and colleagues expectations"}
            description={
              "Ut id orci ultricies, gravida arcu ac. elementumeros.Curabitur tortor ipsum, egetac. faucibus ultricies nisL Maecenas scelerisque dignissim elit-"
            }
          />
          <Card
            number={2}
            title={"Exceed clients and colleagues expectations"}
            description={
              "Ut id orci ultricies, gravida arcu ac. elementumeros.Curabitur tortor ipsum, egetac. faucibus ultricies nisL Maecenas scelerisque dignissim elit-"
            }
          />
          <Card
            number={3}
            title={"Exceed clients and colleagues expectations"}
            description={
              "Ut id orci ultricies, gravida arcu ac. elementumeros.Curabitur tortor ipsum, egetac. faucibus ultricies nisL Maecenas scelerisque dignissim elit-"
            }
          />
          <Card
            number={4}
            title={"Exceed clients and colleagues expectations"}
            description={
              "Ut id orci ultricies, gravida arcu ac. elementumeros.Curabitur tortor ipsum, egetac. faucibus ultricies nisL Maecenas scelerisque dignissim elit-"
            }
          />
          <Card
            number={5}
            title={"Exceed clients and colleagues expectations"}
            description={
              "Ut id orci ultricies, gravida arcu ac. elementumeros.Curabitur tortor ipsum, egetac. faucibus ultricies nisL Maecenas scelerisque dignissim elit-"
            }
          />
        </div>
      </div>
    </section>
  );
}
