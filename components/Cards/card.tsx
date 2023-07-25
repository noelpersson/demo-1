import React from "react";

type Props = {
  number: number;
  title: string;
  description: string;
};

export default function Card({ number, title, description }: Props) {
  return (
    <div className="max-w-[380px] min-w-[300px] gap-y-6 flex-1 py-2 flex flex-col items-start justify-start">
      {/* number */}
      <div className="w-14 h-14 font-bold bg-gradient-to-r from-[#525171] via-[#525171]/20 text-slate-50 to-black/0 rounded-full text-2xl flex items-center justify-center select-none cursor-pointer">
        {number}
      </div>

      <div className="text-xl font-medium text-slate-50">{title}</div>
      <div className="text-gray-200/60 text-sm font-normal max-w-[420px]">
        {description}
      </div>
    </div>
  );
}
