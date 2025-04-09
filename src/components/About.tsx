//import Projects from "./Projects";

export function About() {
    const name: string = "Christian A. Perez";
    const bio: string = "I do web, game development, and sometimes a combination of those two. I'm currently looking for software-focused roles where I can keep growing, take on interesting challenges, and meet amazing people.";
    const location: string = "Southern California";
    const role: string = "Software Developer";

    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-10 px-4 md:px-8 shadow-md rounded-lg lg:h-screen flex items-center justify-center">
                <div className="font-serif text-left">
                    <h1 className=" mb-2 text-3xl font-extrabold tracking-tight leading-none text-gray-400 md:text-4xl lg:text-5xl dark:text-gray-400">{name}</h1>

                    <div className="flex items-center gap-2 mb-5">
                        <h2 className="text-l font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl"><strong
                            className="text-blue-700">{role}</strong></h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300 dark:stroke-gray-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                        <span className="text-gray-700 dark:text-gray-300">
                            {location}
                        </span>
                    </div>

                    <p className="mb-8 text-lg font-serif text-gray-500 lg:text-xl sm:px-0 xl:px-0 dark:text-gray-300">{bio}</p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#Projects" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
                            Projects
                        </a>
                    </div>

                    <div className="mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg">
                        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500">
                            <a target="_blank" rel="noopener noreferrer" href="mailto:caperezl@ucsc.edu" className="mr-5 mb-5 lg:mb-0">
                                <svg height="50" width="60" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="8-Email" id="_8-Email"><path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z" fill="#6a7282" /></g></svg>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/net-watch.dev" className="mr-5 mb-5 lg:mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.565 -1.565 50 50" fill="none" stroke="#6a7282" stroke-linecap="round" stroke-linejoin="round" id="Brand-Bluesky--Streamline-Tabler" height="50" width="50"><desc>Brand Bluesky Streamline Icon: https://streamlinehq.com</desc><path d="M12.371727083333335 10.045803333333335C9.141602916666667 7.70425625 3.9058333333333337 5.891949583333334 3.9058333333333337 11.658912500000001c0 1.1522208333333335 0.6835208333333334 9.672796250000001 1.085821666666667 11.05546125C6.384084583333334 27.524407500000002 11.104284166666668 28.084894583333337 15.623333333333335 27.340833333333336c-7.899547916666667 1.2986895833333336 -9.547809583333335 6.264956666666667 -5.20842875 10.565279166666668C12.426408750000002 39.894181666666675 14.15083416666667 41.011250000000004 15.623333333333335 41.011250000000004c3.9058333333333337 0 6.120440833333333 -5.407626250000001 6.835208333333334 -6.835208333333334 0.6503212500000001 -1.302595416666667 0.9764583333333334 -2.27905375 0.9764583333333334 -2.9293750000000003 0 0.6503212500000001 0.3261370833333334 1.6267795833333334 0.9764583333333334 2.9293750000000003 0.7147675 1.4275820833333335 2.9293750000000003 6.835208333333334 6.835208333333334 6.835208333333334 1.472499166666667 0 3.1969245833333337 -1.1151154166666666 5.20842875 -3.1051375000000005C40.79447625 33.60383708333334 39.14621458333334 28.637570000000004 31.24666666666667 27.340833333333336c4.519049166666667 0.7421083333333334 9.237295833333334 0.18357416666666668 10.631678333333335 -4.626459583333334 0.40230083333333333 -1.382665 1.085821666666667 -9.905193333333335 1.085821666666667 -11.05546125 0 -5.7669629166666665 -5.233816666666668 -3.95465625 -8.465893750000001 -1.6131091666666668C30.020235000000003 13.291550833333334 25.202389583333336 19.90412666666667 23.435000000000002 23.435000000000002c-1.7673895833333335 -3.530873333333334 -6.585235000000001 -10.143449166666668 -11.063272916666667 -13.389196666666667z" stroke-width="2"></path></svg>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/0x008080" className="mr-5 mb-5 lg:mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.565 -1.565 50 50" fill="none" stroke="#6a7282" stroke-linecap="round" stroke-linejoin="round" id="Github--Streamline-Feather" height="50" width="50"><desc>Github Streamline Icon: https://streamlinehq.com</desc><path d="M17.57625 37.10541666666667c-9.764583333333334 2.9293750000000003 -9.764583333333334 -4.882291666666667 -13.670416666666668 -5.858750000000001m27.340833333333336 11.717500000000001v-7.557787500000001a6.581329166666667 6.581329166666667 0 0 0 -1.8357416666666668 -5.097112500000001c6.132158333333334 -0.6835208333333334 12.576783333333335 -3.007491666666667 12.576783333333335 -13.670416666666668A10.623866666666668 10.623866666666668 0 0 0 39.05833333333334 9.3154125 9.901287500000002 9.901287500000002 0 0 0 38.88257083333334 1.9529166666666669S36.57812916666667 1.2693958333333335 31.24666666666667 4.843233333333334a26.130025000000003 26.130025000000003 0 0 0 -13.670416666666668 0C12.244787500000001 1.2693958333333335 9.940345833333334 1.9529166666666669 9.940345833333334 1.9529166666666669A9.901287500000002 9.901287500000002 0 0 0 9.764583333333334 9.3154125a10.623866666666668 10.623866666666668 0 0 0 -2.9293750000000003 7.3820250000000005c0 10.584808333333335 6.444625 12.908779166666669 12.576783333333335 13.670416666666668A6.581329166666667 6.581329166666667 0 0 0 17.57625 35.40637916666667V42.96416666666667" stroke-width="2"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About;