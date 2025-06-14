import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-blue-800 dark:bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <i className="fas fa-futbol text-2xl"></i>
                    <span className="text-xl font-bold">eFootball 2024 Hub</span>
                </a>
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-yellow-300 font-medium">Home</a>
                    <a href="/features" className="hover:text-yellow-300 font-medium">Features</a>
                    <a href="/guide" className="hover:text-yellow-300 font-medium">Guide</a>
                    <a href="/gallery" className="hover:text-yellow-300 font-medium">Gallery</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-blue-700 dark:bg-gray-700 px-4 pb-4`}>
                <a href="/" className="block py-2 hover:text-yellow-300">Home</a>
                <a href="/features" className="block py-2 hover:text-yellow-300">Features</a>
                <a href="/guide" className="block py-2 hover:text-yellow-300">Guide</a>
                <a href="/gallery" className="block py-2 hover:text-yellow-300">Gallery</a>
            </div>
        </nav>
    )
}