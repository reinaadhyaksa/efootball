import ModalImage from 'react-modal-image';

export const WhatsNew = ({ text }) => {
    return (
        <li className="flex items-start">
            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span>{text}</span>
        </li>
    )
}

export const TestimonialCard = ({ name, text, img }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <img src={img} alt={name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                    <h4 className="font-bold dark:text-white">{name}</h4>
                    <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">"{text}"</p>
        </div>
    )
}

export const FeatureCard = ({ icon, title, text }) => {
    return (
        <div className="text-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-300">
            <div className="bg-blue-100 dark:bg-gray-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${icon} text-2xl text-blue-700 dark:text-yellow-400`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{text}</p>
        </div>
    )
}

export const GameplayCard = ({ icons, title, text }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex justify-center">
                <div
                    className="bg-blue-100 dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center">
                    <i className={`fas ${icons} text-3xl text-blue-700 dark:text-yellow-400`}></i>
                </div>
            </div>
            <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{text}</p>
            </div>
        </div>
    )
}

export const GameModesCard = ({ color, icons, title, text, genres }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className={`h-48 ${color} flex items-center justify-center`}>
                <i className={`fas ${icons} text-6xl text-white opacity-80`}></i>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{text}</p>
                <div className="flex flex-wrap gap-2">
                    {genres.map((genre, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-yellow-400 text-xs px-3 py-1 rounded-full"
                        >
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const GameModesCardGenre = ({ genre }) => {
    return (
        <div className="flex flex-wrap gap-2">
            <span
                className="bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-yellow-400 text-xs px-3 py-1 rounded-full">{genre}</span>
        </div>
    )
}

export const GettingStartedCard = ({ num, title, text, genre }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div
                className="bg-blue-100 dark:bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-800 dark:text-yellow-400 font-bold text-xl">{num}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{text}.</p>
            <div className="flex flex-wrap gap-2">
                {genre.map((genre, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-yellow-400 text-xs px-3 py-1 rounded-full"
                    >
                        {genre}
                    </span>
                ))}
            </div>
        </div>
    )
}

export const BasicControlsCard = ({ icons, title, tutors }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center">
                <i className={`fas ${icons} mr-2 text-blue-700 dark:text-yellow-400`}></i> {title}
            </h3>
            <div className="space-y-4">
                {
                    tutors.map((item, index) => {
                        return (
                            <div key={index}>
                                <h4 className="font-semibold dark:text-gray-200">{item.name}</h4>
                                <p className="text-gray-700 dark:text-gray-400">
                                    {item.text}
                                </p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const ControlTips = ({ text }) => {
    return (
        <li className="flex items-start">
            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span className="text-gray-700 dark:text-gray-300">{text}</span>
        </li>
    )
}

export const BuildingTeamTips = ({ title, text }) => {
    return (
        <div>
            <h4 className="text-lg font-medium dark:text-gray-200 mb-2">{title}</h4>
            <p className="text-gray-700 dark:text-gray-400">{text}</p>
        </div>
    )
}

export const GallerySectionsCard = ({ imageUrl, index }) => {
    return (
        <ModalImage
            small={imageUrl}
            large={imageUrl}
            alt={`Gallery image ${index + 1}`}
            hideDownload={true}
            hideZoom={true}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            imageBackgroundColor="transparent"
        >
            <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fas fa-search-plus text-white text-3xl"></i>
            </div>
        </ModalImage>
    );
};

export const VideoSectionCard = ({ src, title, text }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative aspect-video bg-black">
                <iframe className="w-full h-full" src={src} frameBorder="0"
                allowFullScreen></iframe>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{text}</p>
            </div>
        </div>
    )
}