import React from 'react'

const hero = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <div><p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    I am a short heading
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Use this paragraph to share information about your company or products. Make
                    it engaging and interesting, and showcase your brand's personality. Thanks for
                    visiting our website!
                  </p>
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto" alt="hero" src="../images/" />
            </div>
          </div>
        </div>
        <div>
          <div className="pt-12 mx-auto lg:max-w-7xl">
            <dl className="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left">
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Developer experience
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Designers go-to app
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Easy onboarding
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
</section>


  )
}

export default hero