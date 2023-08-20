import { ArrowRightIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    status:string
}

const Submit: React.FunctionComponent<ButtonProps> = ({status,...props}) => {
  return (

      <button
       {...props}
        type="submit"
        tabIndex={0}
        className="group my-1 flex cursor-pointer text-xs md:text-sm flex-row ocus:ring-indigo-300 focus:ring-2 outline-none ring-0 font-medium text-white bg-black hover:bg-primary active:bg-secondary items-center justify-center gap-x-3 md:gap-x-5 overflow-hidden rounded-2xl border-[2px] border-[#f1f1f1] sm:px-8 py-3 px-3 sm:py-4 transition-all duration-300 focus:bg-indigo-500 focus:shadow-sm active:scale-95 active:shadow-sm w-full"
      >
        <div className="transition-transform duration-300 group-focus:translate-x-4">
          {status==="Pending"?"Pending...":"Få offert"}
        </div>
        <CurrencyDollarIcon className="sm:h-5 h-4 sm:w-5 w-4 transition-transform duration-200 ease-out group-focus:translate-x-32 group-focus:ease-in-out xs:group-focus:translate-x-96 md:group-focus:translate-x-[500px] lg:group-focus:translate-x-24"></CurrencyDollarIcon>
      </button>
  );
};

export default Submit;
