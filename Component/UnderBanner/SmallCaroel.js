import Image from "next/image";
import { useState } from "react";

const SmallCaroel = () => {
    const items = [
        {
            id: 1,
            imageUrl: '/images/camera-250x250.png',
            title: 'Camera',
        },
        {
            id: 2,
            imageUrl: '/images/headset-icon-250x250.jpg',
            title: 'Headset',
        },
        {
            id: 3,
            imageUrl: '/images/television.jpg',
            title: 'Television',
        },
        {
            id: 4,
            imageUrl: '/images/Watch-icon-250x250.jpg',
            title: 'Watch',
        },
        {
            id: 5,
            imageUrl: '/images/Iphone.jpg',
            title: 'Iphone',
        },
        {
            id: 6,
            imageUrl: '/images/mobile.jpg',
            title: 'mobile',
        },
        {
            id: 7,
            imageUrl: '/images/camera.jpg',
            title: 'camera',
        },
        {
            id: 8,
            imageUrl: '/images/tab.jpg',
            title: 'tab',
        },
        {
            id: 9,
            imageUrl: '/images/kitchen.jpg',
            title: 'kitchen',
        },
        {
            id: 10,
            imageUrl: '/images/camera.jpg',
            title: 'camera',
        },
        {
            id: 11,
            imageUrl: '/images/tab.jpg',
            title: 'tab',
        },
        {
            id: 12,
            imageUrl: '/images/kitchen.jpg',
            title: 'kitchen',
        },
        {
            id: 13,
            imageUrl: '/images/Watch-icon-250x250.jpg',
            title: 'Watch',
        },
        {
            id: 14,
            imageUrl: '/images/Iphone.jpg',
            title: 'Iphone',
        },
        {
            id: 15,
            imageUrl: '/images/mobile.jpg',
            title: 'mobile',
        },

    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex => 12 ? 2 : currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex => 12 ? currentIndex + 1 : 13);
    };

    return (

        <div className="relative my-12 mx-2">
            <div className="flex overflow-x-scroll scrolling-touch carousel mx-8">
                {items.map((item, index) => (
                    <div id={item.id} className="carousel-item lg:w-1/12 w-1/4">
                        <img src={item.imageUrl} className="w-full" />
                        <div className="flex justify-items-end">
                            <h1>{item.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <a href={`#${currentIndex}`}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full bg-gray-900 bg-opacity-50 text-white p-2"
                onClick={handlePrevClick}
            >
                &lt;
            </a>
            <a href={`#${currentIndex}`}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full bg-gray-900 bg-opacity-50 text-white p-2"
                onClick={handleNextClick}
            >
                &gt;
            </a>
        </div>
    );
};

export default SmallCaroel;