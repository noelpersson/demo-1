import React from "react";

export default () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Build the future with us!
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Läs mer
              </span>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <a href="/contact" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-secondary active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Kom igång
                    </a>
                </div>
            </div>
        </section>
    )
}