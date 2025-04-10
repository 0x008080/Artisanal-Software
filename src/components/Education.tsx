export function Education() {
    return (
        <>
            <section id="Education" className="max-w-screen-xl mx-auto p-5 font-serif">
                <div className=" ">
                    <div className="flex justify-center mb-10">
                        <img src="ucsc-logo.png" className="w-60 h-60 object-cover bg-white rounded-full hover:scale-105 logo-2" />
                    </div>
                    <div className="flex justify-center mb-3">
                        <h3 className="text-2xl font-bold text-gray-300 text-center">
                            University of California, Santa Cruz
                        </h3>
                    </div>

                    <div className="flex justify-center mb-20">
                        <p className="text-xl text-gray-500 dark:text-neutral-300 text-center">
                                    <em>Computer Science, B.S.</em>
                                </p>
                    </div>

                    <div className="flex justify-center mb-10">
                        <p className="text-xl text-gray-500 dark:text-neutral-300 text-center logo-2 hover:scale-110">
                                   Relevant Coursework
                                </p>
                    </div>

                    <div className="hidden grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">

                        {/* Proj 1*/}
                        <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                            <div>

                                <h3 className="text-2xl font-bold text-gray-300 text-center">

                                </h3>
                                <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                    <b>Technologies:</b><em> React, TypeScript, Vite, PokémonTCG API, Tailwind CSS</em>
                                </p>

                                <p className="mt-2 text-gray-500 dark:text-neutral-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio nobis iusto aut soluta laboriosam. Consequuntur deleniti officia, quaerat corrupti eius adipisci aperiam voluptatum id repellat ex, dicta magni impedit.
                                </p>

                            </div>
                        </div>

                        {/* Proj 1*/}
                        <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                            <div>

                                <h3 className="text-2xl font-bold text-gray-300 text-center">

                                </h3>
                                <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                    <b>Technologies:</b><em> React, TypeScript, Vite, PokémonTCG API, Tailwind CSS</em>
                                </p>

                                <p className="mt-2 text-gray-500 dark:text-neutral-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio nobis iusto aut soluta laboriosam. Consequuntur deleniti officia, quaerat corrupti eius adipisci aperiam voluptatum id repellat ex, dicta magni impedit.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Education;