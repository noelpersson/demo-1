import React from 'react';
import Image from 'next/image';

const cardforoffpageseo = () => {
  return (
    <div className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="image"
              loading="lazy"
              width={500}
              height={500}
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl ">
              Offpage SEO
            </h2>
            <p className="my-8 text-gray-600 ">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
            <a
              href="onpage"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-black before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 hover:before:bg-primary active:duration-75 active:before:scale-95 dark:before:border-gray-700  sm:w-max"
            >
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Läs mer
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardforoffpageseo;
