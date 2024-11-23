import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselDaa } from "./HomeCarouselDaa";

const HomeCarousel = () => {
    const items = HomeCarouselDaa.map((item) => (
        <img 
            className="w-full h-[550px] object-cover rounded-lg cursor-pointer z-10" 
            role="presentation" 
            src={item.image} 
            alt="" 
        />
    ));
    return (
        <div className="relative z-40 pt-[110px]">
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
        </div>
    );
};
export default HomeCarousel;

