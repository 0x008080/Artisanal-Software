export function Nav() {
    return (
        <nav className="dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl font-serif font-semibold whitespace-nowrap">ARTISANAL SOFTWARE</span>
                </a>

                <div className="hidden w-full md:block md:w-auto text-l" id="navbar-solid-bg">
                    <ul className="flex flex-col mt-4 font-serif font-semibold rounded-lg bg-gray-50 md:space-x-15 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#About" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-slate-600 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#Skills" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                        </li>
                        <li>
                            <a href="#Projects" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                        </li>
                        <li>
                            <a href="#Education" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Education</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;