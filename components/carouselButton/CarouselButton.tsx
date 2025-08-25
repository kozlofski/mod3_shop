import React from 'react'

interface CarouselButtonProps {
    direction: "left" | "right",
    onClick?: () => void
}

const typeClassMap: Record<CarouselButtonProps["direction"], string> = {
    left: "rounded-r-md",
    right: "rounded-l-md",
};

function getButtonClass(direction: CarouselButtonProps["direction"]) {
    return `${typeClassMap[direction]} bg-secondaryBtn w-[44px] h-[74px] flex justify-center items-center`;
}

const renderArrow = (direction: CarouselButtonProps["direction"]) => {
    return (direction === "left" ?
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 9L9 17" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg> :
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9L1 17" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>)
}


const CarouselButton = ({ direction }: CarouselButtonProps) => {
    return (
        <button className={getButtonClass(direction)}>{renderArrow(direction)}</button>
    )
}

export default CarouselButton