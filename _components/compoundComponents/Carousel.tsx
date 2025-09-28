"use client";

import React, { useState } from 'react'
import DotIndicator from '../basicComponents/DotIndicator'
import CarouselButton from '../basicComponents/CarouselButton';
import Button from '../basicComponents/Button';

const LeftArrow = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#F29145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}

const Carousel = () => {
    const [categoryTitle, setCategoryTitle] = useState("Mouse")
    const [categoryDescription, setCategoryDescription] = useState("Explore our diverse selection of electronic mice for sale, featuring cutting-edge technology, ergonomic designs, and unbeatable prices. Shop now!")

    return (
        <section className="flex flex-col items-center w-full gap-[24px]">
            <div className="flex flex-row justify-between items-center bg-secondaryBg w-full h-[452px] border border-border">
                <CarouselButton direction='left' />
                <div className="flex flex-col gap-[40px] w-[433px]">
                    <h2 className="text-header text-[32px]">{categoryTitle}</h2>
                    <p className="text-paragraph text-base" >{categoryDescription}</p>
                    <Button size='xl' variant='stroke' className='w-[220px]'>Explore Category<LeftArrow /></Button>
                </div>
                <CarouselButton direction='right' />
            </div>
            <DotIndicator active={2} dots={5} />
        </section>
    )
}

export default Carousel