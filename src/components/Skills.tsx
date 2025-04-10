import '../Skills.css';

export function Skills() {
    const section: string = "Tech Stack";

    return (
        <>
            <section id="Skills" className="font-serif flex w-full justify-end">
                <div className="md:max-w-screen-md lg:max-w-screen-lg justify-end">
                    <span className="hidden lg:block p-10 rounded-lg shadow-xl/20 shadow-cyan-700/80 dark:border-gray-100">
                        
                        <div className="flex flex-col lg:flex-row lg:gap-7 mb-5 place-content-end">
                            <img src="postgres.png" className="logo-2 mt-1 mb-1"></img>
                            <img src="firebase.png" height="50" width="50" className="logo-2 mt-1 mb-1"></img>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:gap-7 mb-5 place-content-end">
                            <img src="python.png" className="logo mt-1 mb-1"></img>
                            <img src="typescript.png" className="logo-2 mt-1 mb-1"></img>
                            <img src="cpp.png" className="logo-2 mt-1 mb-1"></img>
                            <img src="javascript.png" className="logo-2 mt-1 mb-1"></img>
                            <img src="html.png" className="logo-2 mt-1 mb-1"></img>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:gap-7 mb-5 place-content-end">
                            <img src="tailwind.svg" className="logo-2 mt-1 mb-1"></img>
                            <img src="node.png" className="logo-2 mt-1 mb-1"></img>
                            <img src="android-logo.png" className="logo-2 mt-1 mb-1"></img>
                            <img src="git-logo.png" className="logo-2 mt-1 mb-1"></img>
                            <img src="react.png" className="logo mt-1 mb-1"></img>
                            <img src="vite.svg" className="logo-2 mt-1 mb-1" height="50" width="50"></img>
                            <img src="unreal.png" className="logo-2 mt-1 mb-1"></img>
                        </div>
                        <h1 className="text-right text-lg font-extrabold tracking-tight leading-none text-gray-400 md:text-xl lg:text-xl dark:text-gray-400">{section}</h1>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Skills;