"use client";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  return (
    <Disclosure
      as="nav"
      className={"w-full fixed bg-white/10 backdrop-blur-sm top-0 z-[100]"}
    >
      {({ open, close }) => (
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 30,
            stiffness: 100,
          }}
          className={`w-full ${
            open
              ? "bg-white-400/20 backdrop-blur-sm transition-all duration-300"
              : "transition-all duration-300"
          }`}
        >
          <div className="mx-auto max-w-[2500px]">
            <div className="mx-5 py-6 flex min-h-[48px] items-center md:mx-10 lg:mx-16 xl:mx-24">
              {/* logo */}
              <Link
                href={"/"}
                onClick={() => close()}
                className="flex flex-none items-center justify-center text-3xl font-bold text-slate-800 "
              >
                brand
                <div className="text-3xl text-white-500">.</div>
              </Link>
              {/* Desktop */}
              <div className="hidden grow select-none items-center justify-end gap-x-5 font-medium text-slate-800 md:flex lg:gap-x-12">
                {/* links */}
                <div className="flex items-center gap-x-3 lg:gap-x-6">
                  <Link
                    className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/about"
                  >
                    About us
                  </Link>
                  <Link
                    className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/ourservices"
                  >
                    Our Services
                  </Link>
                  <Link
                    className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/contact"
                  >
                    Contact us
                  </Link>
                </div>
                {/* getStarted */}
                <div className="cursor-pointer select-none rounded-2xl bg-slate-800 px-4 py-3 text-sm text-stone-50 transition-all duration-300 hover:bg-slate-700 active:scale-95">
                  Get started
                </div>
              </div>

              {/* Mobile menu button*/}
              <div className="flex grow items-center justify-end text-center md:hidden">
                <Disclosure.Button className="flex items-center justify-center rounded-md p-2 text-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-white-400 hover:text-white">
                  {/* <span className="sr-only">Open main menu</span> */}
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Mobile menu */}
            </div>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform -translate-x-24 opacity-0"
              enterTo="transform translate-x-0 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform translate-x-0 opacity-100"
              leaveTo="transform -translate-x-24 opacity-0"
            >
              <Disclosure.Panel className="px-10 md:hidden">
                <div className="flex flex-col space-y-1 pt-2 pb-3">
                  <Link
                    className="flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/about"
                  >
                    About us
                  </Link>
                  <Link
                    className="flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/ourservices"
                  >
                    Our Services
                  </Link>
                  <Link
                    className="flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:bg-white-100 sm:flex"
                    onClick={() => close()}
                    href="/contact"
                  >
                    Contact us
                  </Link>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </motion.div>
      )}
    </Disclosure>
  );
}
