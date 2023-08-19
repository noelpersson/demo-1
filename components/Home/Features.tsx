import React from 'react'
import SeorocketIcon from './icons/SeorocketIcon';


export default function Features() {
    return (
    <section className="bg-white text-black">
        <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

            <p className="mt-4 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
                sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
            </p>
            </div>

            <div
            className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
            >
            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <SeorocketIcon />
                </span>

                <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <SeorocketIcon />
                </span>

                <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <SeorocketIcon />
                </span>

                <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                </p>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

