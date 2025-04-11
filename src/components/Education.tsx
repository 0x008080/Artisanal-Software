export function Education() {
    return (
        <>
            <section id="Education" className="max-w-screen-xl mx-auto p-5 font-serif">
                <div className=" ">
                    <div className="flex justify-center mb-10">
                        <img src="ucsc-logo.png" className="w-60 h-60 object-cover bg-white rounded-full hover:scale-105" />
                    </div>
                    <div className="flex justify-center mb-3">
                        <h3 className="text-2xl font-bold text-gray-300 text-center logo-2">
                            University of California, Santa Cruz
                        </h3>
                    </div>

                    <div className="flex justify-center mb-20">
                        <p className="text-xl text-gray-500 dark:text-neutral-300 text-center logo-2">
                                    <em>Computer Science, B.S.</em>
                                </p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Education;