export function Projects() {
    return (
        <section id="Projects" className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-5 font-serif mb-50">
            <div className="">
                <h1 className="text-lg text-right font-extrabold tracking-tight leading-none text-gray-400 md:text-1xl lg:text-xl dark:text-gray-400 mb-10"></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">

                    {/* Proj 1*/}
                    <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                        <div>
                            <h3 className="text-lg font-bold text-gray-300 text-center">
                                TCG Search
                            </h3>
                            <img src="tcg-search-l.png" className="mt-5 mb-5 w-25 h-25 object-cover hover:scale-105 transition-transform"></img>
                            <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                <b>Technologies:</b><em> React, TypeScript, Vite, PokémonTCG API, Tailwind CSS</em>
                            </p>

                            <p className="mt-2 text-gray-500 dark:text-neutral-300">
                                TCG Search helps you find all cards available for any particular Pokémon. Try it out down below!
                            </p>
                            <a className="mt-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://www.github.com/0x008080/TCG-Search">
                                Github Repository
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Proj 2*/}
                    <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                        <div>
                            <h3 className="text-lg font-bold text-gray-300 text-center">
                                SlugFind
                            </h3>
                            <img src="slug2.jpg" className="mt-5 mb-5 w-25 h-25 object-cover hover:scale-105 transition-transform"></img>
                            <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                <b>Technologies:</b><em> Flutter, Dart, Firebase, Android Studio, Google Maps API</em>
                            </p>

                            <p className="mt-2 text-gray-500 dark:text-neutral-300">
                                Community based classroom locator that allows students to help other students find their classes, discussion sessions, and lab sessions by pinpointing exact classroom locations at UC Santa Cruz
                            </p>
                            <a className="mt-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://github.com/daskrys/Slug-Find">
                                Github Repository
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Proj 3*/}
                    <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                        <div>
                            <h3 className="text-lg font-bold text-gray-300 text-center">
                                Bite Sized Dungeons
                            </h3>
                            <img src="bite-sized-d.jpg" className="mt-5 mb-5 w-25 h-25 object-cover rounded-3xl hover:scale-105 transition-transform"></img>
                            <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                <b>Technologies:</b><em> TypeScript, JavaScript, Phaser 3, Vite, Node.js, Socket.IO</em>
                            </p>

                            <p className="mt-2 text-gray-500 dark:text-neutral-300">
                                Multiplayer prototype with full client-server functionality. Once connected, players are able to move around in a shared room made possible by syncronizing the server state to connected clients using web sockets.
                            </p>
                            <a className="mt-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://github.com/daskrys/Socket-Prototype">
                                Github Repository
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Proj 4*/}
                    <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                        <div>
                            <h3 className="text-lg font-bold text-gray-300 text-center">
                                TCG V-Search
                            </h3>
                            <img src="tcg.png" className="mt-5 mb-5 w-25 h-25 object-cover hover:scale-105 transition-transform"></img>
                            <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                <b>Technologies:</b><em> React Native, TypeScript, Android Studio</em>
                            </p>

                            <p className="mt-2 text-gray-500 dark:text-neutral-300">
                                <em>In Progress</em>
                            </p>

                        </div>
                    </div>

                    {/* Proj 5*/}
                    <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                        <div>
                            <h3 className="text-lg font-bold text-gray-300 text-center">
                                Poké Location
                            </h3>
                            <img src="poke-ball.png" className="mt-5 mb-5 w-25 h-25 object-cover hover:scale-105 transition-transform"></img>
                            <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                <b>Technologies:</b><em> React, TypeScript, Vite, PokémonTCG API, Tailwind CSS</em>
                            </p>

                            <p className="mt-2 text-gray-500 dark:text-neutral-300">
                                Desktop application that takes user input and returns the in-game location of any Pokémon.
                            </p>
                            <a className="mt-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://github.com/daskrys/Poke-Location">
                                Github Repository
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Proj 6*/}
                    <div className="flex lg:flex-col rounded-xl  dark:border-gray-100 mr-10 ml-10 ">
                        <div>
                            <h3 className="text-lg font-bold text-gray-300 text-center">
                                Archived Projects
                            </h3>
                            <img src="gh.png" className="mt-5 mb-5 w-25 h-25 bg-gray-800 rounded-full object-cover hover:scale-105 transition-transform"></img>
                            <p className="mb-5 text-gray-500 dark:text-neutral-300">
                                <b></b><em></em>
                            </p>

                            <p className="mt-2 text-gray-500 dark:text-neutral-300">
                            </p>

                            <a className="mt-5 mr-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://github.com/0x008080">
                                GitHub Account
                            </a>
                            <a className="mt-1 mr-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://github.com/daskrys">
                                GitHub Archive I
                            </a>
                            <a className="mt-1 mr-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://github.com/">
                                GitHub Archive II
                            </a>

                            <a className="mt-5 mr-10 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:scale-105 logo-2" target="_blank" href="https://youtube.com/">
                                Unreal Engine 5 Cinematics
                            </a>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects;