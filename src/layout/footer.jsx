export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">eFootball 2024 Hub</h3>
                        <p className="text-gray-400">Your ultimate source for eFootball 2024 news, guides, and community.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-yellow-400 transition duration-300">Home</a></li>
                            <li><a href="/features" className="text-gray-400 hover:text-yellow-400 transition duration-300">Features</a></li>
                            <li><a href="/guide" className="text-gray-400 hover:text-yellow-400 transition duration-300">Beginner's Guide</a></li>
                            <li><a href="/gallery" className="text-gray-400 hover:text-yellow-400 transition duration-300">Gallery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://web.facebook.com/playeFootball/?_rdc=1&_rdr" className="text-gray-400 hover:text-blue-400 transition duration-300"><i className="fab fa-facebook-f text-xl"></i></a>
                            <a href="https://x.com/play_eFootball" className="text-gray-400 hover:text-blue-400 transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
                            <a href="https://www.instagram.com/efootball/" className="text-gray-400 hover:text-pink-500 transition duration-300"><i className="fab fa-instagram text-xl"></i></a>
                            <a href="https://www.youtube.com/channel/UCQdSC4folRoUuPC3iiRkfFQ" className="text-gray-400 hover:text-red-500 transition duration-300"><i className="fab fa-youtube text-xl"></i></a>
                        </div>
                        <p className="text-gray-400 mt-4">konami.com</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>&copy; 2024 eFootball 2024 Hub. This is an unofficial fan site. eFootball™ & © Konami Digital Entertainment</p>
                </div>
            </div>
        </footer>
    )
}