import React from "react";
import Card2 from "../Cards/card2";
import Image from "next/image";
import image4 from "/public/images/13.png";
import image5 from "/public/images/14.png";
import image7 from "/public/images/16.png";
import image8 from "/public/images/17.png";



export default function FifthSection() {
  return (
    <section className="relative w-full min-h-[500px] overflow-hidden bg-[#ecf2f7]">
      <div className="relative w-full h-full">
      </div>

      {/* Bakgrundscirkel */}
      <div className="relative z-10 max-w-[2200px] mx-auto flex flex-col items-center justify-start min-h-[500px] py-24 px-[8vw] xl:px-80">
        {/* Titel */}
        <div className="w-full gap-y-4 text-slate-800 font-medium text-5xl flex flex-col items-center text-center justify-center">
          <div className="text-primary text-sm font-bold">Process</div>
          <h1 className="tracking-tight flex flex-col items-start flex-wrap justify-start">
            Our logo design process
          </h1>
          <div className="text-gray-600/80 text-sm font-normal my-1">
            Our comprehensive logo design strategy ensures a perfectly crafted logo for your business.
          </div>
        </div>

        {/* Kort */}
        <Card2
          Left={true}
          title={"Discover"}
          description={
            "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel nisi.Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris."
          }
          image={image5.src}
          head={"Step One"}
        />
        <Card2
          Left={false}
          title={"Prototype"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis, inventore ad vero quidem cum velit, sit aut molestiae alias mollitia fuga ut impedit nisi quae? Adipisci eaque accusamus fugiat."
          }
          image={image4.src}
          head={"Step Two"}
        />
        <Card2
          Left={true}
          title={"Test"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis.."
          }
          image={image8.src}
          head={"Step Three"}
        />
        <Card2
          Left={false}
          title={"Build"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis.."
          }
          image={image7.src}
          head={"Step Four"}
        />
      </div>
    </section>
  );
}
