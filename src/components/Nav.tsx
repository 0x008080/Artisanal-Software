import { useRef, useEffect, useState } from 'react';

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <nav className="sticky top-0 z-50 mb-15">
            <div className="mx-auto p-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Left Side */}
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center">
                            <img src="AS.png" className="h-20 w-20" />
                        </a>
                        <div className="ml-4 md:block">
                            <p className="text-lg" ref={bannerText}>Beautiful, Hand Crafted</p>
                            <div className="h-8">
                                <h2 className="text-xl font-serif font-semibold">{Artisanal_Software}</h2>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="md:hidden p-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className="text-l flex flex-col font-serif font-semibold md:flex-row md:space-x-8">
                            <li>
                                <a href="#About" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-slate-600 dark:text-gray-400 logo-2">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#Projects" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-slate-600 dark:text-gray-400 logo-2">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#Education" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-slate-600 dark:text-gray-400 logo-2">
                                    Education
                                </a>
                            </li>
                            <li>
                                <a href="mailto:caperezl@ucsc.edu" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-slate-600 dark:text-gray-400 logo-2">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;