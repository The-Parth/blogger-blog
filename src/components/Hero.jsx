import React, { useState, useEffect } from "react";
import a from "../images/a.png";
import b from "../images/b.png";
import c from "../images/c.png";


const Slideshow = () => {
    const images = [
        {
            id: 1,
            src: require("../images/a.png"),
            text: "Image 1 description",
        },
        {
            id: 2,
            src: require("../images/b.png"),
            text: "Image 2 description",
        },
        {
            id: 3,
            src: require("../images/c.png"),
            text: "Image 3 description",
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    const handleNext = () => {
        setCurrentImage((prevImage) =>
            prevImage === images.length - 1 ? 0 : prevImage + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // Automatically change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-64 md:h-96 lg:h-120">
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className={`${
                        index === currentImage ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-1000 absolute top-0 left-0 w-full h-full`}
                >
                    <img
                        src={image.src}
                        alt={image.text}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-between">
                <button
                    onClick={handlePrev}
                    className="z-10 text-white bg-gray-800 rounded-full p-2 mr-2 focus:outline-none"
                >
                    &#8249;
                </button>
                <button
                    onClick={handleNext}
                    className="z-10 text-white bg-gray-800 rounded-full p-2 ml-2 focus:outline-none"
                >
                    &#8250;
                </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white">
                <p>{images[currentImage].text}</p>
            </div>
        </div>
    );
};

export default Slideshow;
