import Link from 'next/link';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome

const Header = () => {
    return (
        <header className="container w-full mx-auto max-w-[1240px]">
            {/* Top bar with contact information */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto flex justify-between items-center py-3 text-sm text-gray-600">
                    {/* Contact Information */}
                    <div className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-phone-alt text-lg text-[#C29B6C]"></i>
                            <Link href="tel:+380442391262" className="text-[#C29B6C] text-base hover:underline">
                                (044) 239 1262
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-envelope text-lg text-gray-500"></i>
                            <Link href="mailto:info@abrasive.center" className="hover:underline">
                                info@abrasive.center
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-clock text-lg text-gray-500"></i>
                            <span>Mon. - Fri. 8:30 - 17:30</span>
                        </div>
                    </div>

                    {/* Language Dropdown and Request Button */}
                    <div className="flex items-center space-x-6">
                        {/* Language Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                                <Image
                                    src="/image/blank.gif"
                                    alt="English"
                                    width={16}
                                    height={11}
                                    className="flag-icon flag-icon-gb"
                                />
                                <span>English</span>
                                <i className="fas fa-angle-down"></i>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white border border-gray-300 shadow-md rounded mt-2 z-10">
                                <Link href="/shlifuvalni-strichki" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                    <Image
                                        src="/image/blank.gif"
                                        alt="Українська"
                                        width={16}
                                        height={11}
                                        className="flag-icon flag-icon-ua"
                                    />
                                    <span className="ml-2">Українська</span>
                                </Link>
                                <Link href="/ru/shlifovalnye-lenty" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                    <Image
                                        src="/image/blank.gif"
                                        alt="Русский"
                                        width={16}
                                        height={11}
                                        className="flag-icon flag-icon-ru"
                                    />
                                    <span className="ml-2">Русский</span>
                                </Link>
                            </div>
                        </div>

                        {/* Request Button */}
                        <Link
                            href="#"
                            className="px-4 py-2 bg-[#C29B6C] text-white rounded-md hover:bg-[#A88458] transition"
                        >
                            Request
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header Section */}
            <div className="container mx-auto py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/image/abrasive-logo-246x96.png"
                        alt="Abrasive Logo"
                        width={123}
                        height={48}
                        className="w-[123px] h-[48px]"
                    />
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-8 text-gray-800">
                        <li>
                            <Link href="/" className="hover:underline">
                                Homepage
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:underline">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-production" className="hover:underline">
                                Our Production
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
