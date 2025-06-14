import { basicControlsConsoleData, basicControlsMobileData, buildingTeamTipsData, faqItems, featureData, galleryPhotoData, galleryVideoData, gameplayData, gameplayModeData, gettingstartedData, testiData, tipscontrolsData, whatsnewdata } from "../data/data";
import { BasicControlsCard, BuildingTeamTips, ControlTips, FeatureCard, GallerySectionsCard, GameModesCard, GameplayCard, GettingStartedCard, TestimonialCard, VideoSectionCard, WhatsNew } from "./template";
import { useState } from 'react';

export function HeroBanner() {
    return (
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 z-10 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">eFootball 2024</h1>
                <p className="text-xl md:text-2xl mb-8">The Ultimate Digital Football Experience</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://www.konami.com/efootball/en/page/download_edition_list" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                        Play Now <i className="fas fa-play ml-2"></i>
                    </a>
                    <a href="/features" className="bg-transparent hover:bg-white hover:text-blue-800 text-white font-bold py-3 px-6 border-2 border-white rounded-lg text-lg transition duration-300">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export function LatestUpdate() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-800 dark:text-yellow-400">Latest Update: v2.7.0</h2>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video bg-black">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/7edTYTSRcaM?si=-apgVRuTP2hvKord"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4 dark:text-white">What's New</h3>
                        <ul className="space-y-3 dark:text-gray-300">
                            {
                                whatsnewdata.map((item, index) => {
                                    return (
                                        <WhatsNew key={index} text={item.text} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Testimonial() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-yellow-400">What Players Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        testiData.map((item, index) => {
                            return (
                                <TestimonialCard key={index} name={item.name} text={item.text} img={item.img} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export function QuickFeatures() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-yellow-400">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        featureData.map((item, index) => {
                            return (
                                <FeatureCard icon={item.icons} title={item.title} text={item.text} key={index} />
                            )
                        })
                    }
                </div>
                <div className="text-center mt-10">
                    <a href="/features" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Explore All Features <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export function Banner({ title, text }) {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl max-w-3xl mx-auto">{text}</p>
            </div>
        </section>
    )
}

export function Gameplay() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Core Gameplay Features</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">eFootball 2024 introduces revolutionary
                        gameplay mechanics that bring football to life like never before.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {
                        gameplayData.map((item, index) => {
                            return (
                                <GameplayCard icons={item.icons} title={item.title} text={item.text} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export function GameModes() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Game Modes</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Choose your way to play with various modes tailored for different football experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gameplayModeData.map((item, index) => (
                        <GameModesCard
                            key={index}
                            color={item.color}
                            title={item.title}
                            icons={item.icons}
                            text={item.text}
                            genres={item.genre}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export function NewFeature() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">What's New in 2024</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">See how eFootball 2024 improves upon
                        previous versions with these key upgrades.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                        <thead className="bg-blue-800 dark:bg-gray-600 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Feature</th>
                                <th className="py-3 px-4 text-center">eFootball 2023</th>
                                <th className="py-3 px-4 text-center">eFootball 2024</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
                                <td className="py-4 px-4 font-medium dark:text-white">Graphics</td>
                                <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Enhanced visuals</td>
                                <td className="py-4 px-4 text-center font-medium text-green-600 dark:text-yellow-400">Ray
                                    tracing support, 4K textures</td>
                            </tr>
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
                                <td className="py-4 px-4 font-medium dark:text-white">Animation</td>
                                <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">1,500 animations</td>
                                <td className="py-4 px-4 text-center font-medium text-green-600 dark:text-yellow-400">2,200+
                                    animations</td>
                            </tr>
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
                                <td className="py-4 px-4 font-medium dark:text-white">Stadiums</td>
                                <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">20 licensed stadiums</td>
                                <td className="py-4 px-4 text-center font-medium text-green-600 dark:text-yellow-400">30+
                                    licensed stadiums</td>
                            </tr>
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
                                <td className="py-4 px-4 font-medium dark:text-white">Online Modes</td>
                                <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">1v1 matches</td>
                                <td className="py-4 px-4 text-center font-medium text-green-600 dark:text-yellow-400">1v1, 2v2,
                                    3v3 co-op</td>
                            </tr>
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
                                <td className="py-4 px-4 font-medium dark:text-white">Controls</td>
                                <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Basic skill moves</td>
                                <td className="py-4 px-4 text-center font-medium text-green-600 dark:text-yellow-400">Advanced
                                    skill stick</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 dark:text-white">Gameplay Demonstration</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Watch our featured gameplay video to see these
                        improvements in action:</p>
                    <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe 
                            className="w-full h-96" 
                            src="https://www.youtube.com/embed/7edTYTSRcaM?si=-apgVRuTP2hvKord"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function GettingStarted() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Getting Started</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Follow these steps to begin your eFootball
                        2024 experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        gettingstartedData.map((item, index) => {
                            return (
                                <GettingStartedCard 
                                    num={index + 1}
                                    title={item.title}
                                    text={item.text}
                                    genre={item.genre}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};


export function BasicControls() {
   return (
       <section className="py-12 bg-gray-100 dark:bg-gray-700">
           <div className="container mx-auto px-4">
               <div className="mb-12 text-center">
                   <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Basic Controls</h2>
                   <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Master these essential controls to play
                       effectively.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <BasicControlsCard
                       icons={basicControlsConsoleData.icons}
                       title={basicControlsConsoleData.title}
                       tutors={basicControlsConsoleData.tutors}
                       key="console-controls" 
                   />
                   <BasicControlsCard
                       icons={basicControlsMobileData.icons}
                       title={basicControlsMobileData.title}
                       tutors={basicControlsMobileData.tutors}
                       key="mobile-controls"
                   />
               </div>

               <div className="mt-12 bg-blue-50 dark:bg-gray-600 p-6 rounded-lg">
                   <h3 className="text-xl font-bold mb-4 dark:text-white">Control Tips</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {
                        tipscontrolsData.map((item) => {
                            return (
                                <ControlTips text={item.text} key={"tips-controls"} />
                            )
                        })
                      }
                   </ul>
               </div>
           </div>
       </section>
   )
};

export function DreamTeamGuide() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Dream Team Guide</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Build your ultimate squad with these Dream
                        Team strategies.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-white">Building Your Team</h3>
                        <div className="space-y-6">
                            {
                                buildingTeamTipsData.map((item) => {
                                    return (
                                        <BuildingTeamTips title={item.title} text={item.text} key={"building-tipd"} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4 dark:text-white">Recommended Formations</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium dark:text-gray-200">4-3-3 (Balanced)</h4>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">Great for beginners with good width and
                                    defensive stability.</p>
                            </div>
                            <div>
                                <h4 className="font-medium dark:text-gray-200">4-2-2-2 (Counter Attack)</h4>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">Two strikers with AMs supporting, quick
                                    transitions.</p>
                            </div>
                            <div>
                                <h4 className="font-medium dark:text-gray-200">3-5-2 (Possession)</h4>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">Control midfield with wingbacks
                                    providing width.</p>
                            </div>
                            <div>
                                <h4 className="font-medium dark:text-gray-200">4-1-2-3 (Wide Play)</h4>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">Single pivot with wingers stretching
                                    defense.</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h4 className="font-medium dark:text-gray-200 mb-2">Formation Tips</h4>
                            <ul className="text-gray-700 dark:text-gray-400 text-sm space-y-2">
                                <li className="flex items-start">
                                    <i className="fas fa-circle text-xs mt-1 mr-2 text-blue-600 dark:text-yellow-400"></i>
                                    <span>Choose formation based on your playstyle, not just meta</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-circle text-xs mt-1 mr-2 text-blue-600 dark:text-yellow-400"></i>
                                    <span>Adjust player positions and instructions for better performance</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-circle text-xs mt-1 mr-2 text-blue-600 dark:text-yellow-400"></i>
                                    <span>Have alternative formations for different match situations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Frequently Asked Questions</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Common questions from new eFootball 2024 players.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-4 text-left font-medium dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <span>{item.question}</span>
                                    <i className={`fas fa-chevron-down transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}></i>
                                </button>
                                <div className={`px-4 pb-4 text-gray-700 dark:text-gray-300 ${activeIndex === index ? 'block' : 'hidden'}`}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Still have questions? Contact our community for help!</p>
                        <a href="/contact"
                            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                            Contact Us <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function GallerySections() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Screenshots</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Captured in-game at 4K resolution on next-gen platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryPhotoData.images.map((imageUrl, index) => (
                        <GallerySectionsCard
                            key={index}
                            imageUrl={imageUrl}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export function VideoSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-yellow-400">Videos</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Watch eFootball 2024 in action with these
                        gameplay videos and trailers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {
                        galleryVideoData.map((item, index) => {
                            return (
                                <VideoSectionCard src={item.src} title={item.title} text={item.text} key={index} />
                            )
                        })
                   }
                </div>
            </div>
        </section>
    )
}