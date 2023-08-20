import FormSection from '@/components/Contactus/FormSection';
import React from 'react';

const Contact15 = () => {
  return (
    <>
      <section className="max-h-full bg-white dark:bg-white lg:flex">
        <div className="flex flex-col justify-center w-full p-8 lg:bg-gray-100 lg:dark:bg-primary bg-primary lg:px-12 xl:px-32 lg:w-1/2">
          <h1 className="text-4xl font-semibold text-gray-800 capitalize dark:text-white lg:text-5xl">
            Låt oss ta det till nästa nivå.
          </h1>
          <p className="mt-4 text-xl text-white ">
            Ask us everything and we would love to hear from you
          </p>
        </div>
        <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
          <FormSection />
        </div>
      </section>
    </>
  );
};

export default Contact15;
