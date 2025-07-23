import { useState, useRef, useEffect } from 'react';
import CarasouelCard from './CarasouelCard';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const CarouselAnimation = ({ items = [] }) => {
    const itemsPerView = 1;      
    const CARD_W = 58;            
    const GAP_W = 2;          

    const [slides, setSlides] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(itemsPerView);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        if (!items.length) return;
        setSlides([
            ...items.slice(-itemsPerView),
            ...items,
            ...items.slice(0, itemsPerView),
        ]);
    }, [items]);

    useEffect(() => {
        if (!slides.length) return;
        const id = setInterval(() => setCurrentIndex(i => i + 1), 3000);
        return () => clearInterval(id);
    }, [slides]);

    const onTransitionEnd = () => {
        if (currentIndex >= slides.length - itemsPerView) {
            setTransitionEnabled(false);
            setCurrentIndex(itemsPerView);
        }
        if (currentIndex < itemsPerView) {
            setTransitionEnabled(false);
            setCurrentIndex(slides.length - 2 * itemsPerView);
        }
    };

    useEffect(() => {
        if (!transitionEnabled) {
            const t = setTimeout(() => setTransitionEnabled(true), 0);
            return () => clearTimeout(t);
        }
    }, [transitionEnabled]);

    const prev = () => setCurrentIndex(i => i - 1);
    const next = () => setCurrentIndex(i => i + 1);

    const raw = currentIndex * (CARD_W + GAP_W);
    const offset = (100 - CARD_W) / 2;
    const translateX = raw - offset;   

    return (
        <div className="w-full overflow-hidden">
            <div
                className="flex gap-x-[2vw]"
                style={{
                    transform: `translateX(-${translateX}vw)`,
                    transition: transitionEnabled ? 'transform .5s ease-in-out' : 'none',
                }}
                onTransitionEnd={onTransitionEnd}
            >
                {slides.map((item, idx) => {
                    const isCenter = idx === currentIndex;
                    return (
                        <div key={idx} className="flex-shrink-0 w-[58vw] px-[1vw]">
                            <CarasouelCard {...item} highlighted={isCenter} />
                        </div>
                    );
                })}
            </div>

            <div className="mt-10 items-center px-[15vw] py-[3vw] justify-start flex space-x-4">
                <button onClick={prev} className="w-[3vw] flex items-center justify-center h-[3vw] bg-[#f2ece2] rounded-full hover:bg-[#f2ece2]/60"><IoMdArrowBack/></button>
                <button onClick={next} className="w-[3vw] h-[3vw] flex items-center justify-center bg-[#f2ece2] rounded-full hover:bg-[#f2ece2]/60"><IoMdArrowForward/></button>
            </div>
        </div>
    );
};

export default CarouselAnimation;
