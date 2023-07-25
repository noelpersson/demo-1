import { ArrowRightIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex h-2/5 w-full items-center select-none",
        props.className
      )}
    >
      <div
        tabIndex={0}
        className="group flex text-[#aaaaaa] cursor-pointer text-xs flex-row items-center justify-center gap-x-3 md:gap-x-5 overflow-hidden rounded-3xl border-[2px] border-[#f1f1f1] sm:px-8 py-3 px-3 sm:py-4 font-medium transition-all duration-300 focus:bg-[#f7f7f7] focus:shadow-sm hover:bg-[#f7f7f7] active:scale-95 active:shadow-sm lg:rounded-2xl"
      >
        <div className="transition-transform duration-300 group-focus:translate-x-4">
          Find out more
        </div>
        <ArrowRightIcon className="sm:h-5 h-4 sm:w-5 w-4 transition-transform duration-200 ease-out group-focus:translate-x-32 group-focus:ease-in-out xs:group-focus:translate-x-96 md:group-focus:translate-x-[500px]  lg:group-focus:translate-x-24"></ArrowRightIcon>
      </div>
    </button>
  );
};

export default Button;
