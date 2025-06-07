import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-red-300 text-white shadow-md">
            <div className="container mx-auto px-1 py-1 flex justify-between items-center">
                {/* Logo */}
                <a href="index.html" className="flex items-center">
                    <img src="/images/logo/logo2.png" alt="Logo" className="h-14" />
                </a>

                {/* Toggle button for mobile */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent z-10 px-4 md:px-0 py-4 md:py-0`}
                >
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-white text-base font-medium">
                        <li><a href="index.html" className="hover:text-red-300">Home</a></li>
                        <li><a href="shop.html" className="hover:text-gray-300">Shop</a></li>
                        <li><a href="about.html" className="hover:text-gray-300">About us</a></li>
                        <li><a href="services.html" className="hover:text-gray-300">Services</a></li>
                        <li><a href="blog.html" className="hover:text-gray-300">Blog</a></li>
                        <li><a href="contact.html" className="hover:text-gray-300">Contact us</a></li>

                        <a href="#">
                            <img src="/images/user.svg" alt="User" className="h-6" />
                        </a>
                        <a href="cart.html">
                            <img src="/images/cart.svg" alt="Cart" className="h-6" />
                        </a>

                    </ul>


                    {/* Icons */}

                </nav>
            </div>
        </header>
    );
};

export default Header;
