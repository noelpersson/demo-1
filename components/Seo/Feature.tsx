/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const Feature = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="w-full mx-auto text-left">
          <div className="relative flex-col items-center m-auto align-middle">
            <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
              <div className="flex flex-col mt-6 lg:mt-0">
                <div className="max-w-xl">
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    I am a short heading
                  </p>
                </div>
                <div className="mx-auto mt-6 lg:max-w-7xl">
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3"
                  >
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Developer experience
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll
                        always be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Designers go-to app
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll
                        always be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Easy onboarding
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll
                        always be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Customer support
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll
                        always be ahead.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
