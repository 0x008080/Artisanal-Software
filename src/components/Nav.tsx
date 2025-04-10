import { useRef, useEffect } from 'react';

export function Nav() {
    const bannerText: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
    const Artisanal_Software: string = "ARTISANAL SOFTWARE";

    const descriptions: string[] = ['GMO Free', 'Gluten Free', 'MSG Free', 'Vegan Approved', 'Ethically Sourced',
        'Dairy Free', 'Cholesterol Free', 'Antioxidant Packed', 'Preservative Free', 'Nut Free', 'Soy Free', 'Zero Waste', 'Nitrate Free',
        'Peanut Free', 'BPA Free', 'Homebrewed', 'Toxin Free', 'Pesticide Free', 'Unleaded', 'Sulfite Free', 'Water Resistant',
        'Vitamin Infused', 'Omega-3 Loaded', 'Bee Friendly', 'Allergen Free', 'Carcinogen Free', 'Boldly Spiced', 'Glyphosate Free',
        'Fire-Roasted', 'Hand Carved', 'Cold Brewed', 'Forged In Fire', 'Fully Distilled', 'Oven-Baked', 'Sun Dried', 'Beautiful, Hand Crafted'];

    const len: number = descriptions.length;
    let currentIndex: number = Math.floor(Math.random() * len);

    useEffect(() => {
        setTimeout(() => {
            const banner = bannerText.current;
            banner!.textContent = descriptions[currentIndex];
            setInterval(() => {
                currentIndex = Math.floor(Math.random() * len);
                banner!.textContent = descriptions[currentIndex];

            }, 2750);
        }, 2750);
    });

    return (
        <nav className="sticky top-0 z-50 mb-20 w-full">
            <div className="w-full mx-auto max-w-screen-xl p-4">
                <div className="flex items-center justify-between w-full lg:mx-0">
                    <a href="#About" className="space-x-3 rtl:space-x-reverse">
                        <img src="AS.png" width="50" height="50" className=""></img>
                    </a>

                    <div className="flex-1">
                        <p ref={bannerText}>Beautiful, Hand Crafted</p>
                        <div className="h-8">
                            <div className="flex-1 md:flex md:items-right md:gap-12">
                                <h2 className="text-xl font-serif font-semibold whitespace-nowrap">{Artisanal_Software}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse space-x-4 space-x-reverse" id="navbar-solid-bg">
                    <ul className="flex flex-col font-serif font-semibold rounded-lg bg-gray-50 md:space-x-15 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#About" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">About</a>
                        </li>
                        {/* <li>
                            <a href="#Skills" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                        </li> */}
                        <li>
                            <a href="#Projects" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                        </li>
                        <li>
                            <a href="#Education" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Education</a>
                        </li>
                        <li>
                            <a href="mailto:caperezl@ucsc.edu" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 dark:text-gray-400 md:dark:hover:text-slate-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav;