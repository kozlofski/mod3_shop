import React from 'react'
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, WebcamIcon } from '../icons/icons'
import BrandCategoryButton from './BrandCategoryButton'
import { prisma } from '@/prisma/clientSingleton'

// const categories = {
//     Mouse: <MouseIcon />,
//     Monitor: <MonitorIcon />,
//     Headphones: <HeadphonesIcon />,
//     Keyboard: <KeyboardIcon />,
//     Webcam: <WebcamIcon />
// }

const CategoryBar = async () => {
    const categories = await prisma.category.findMany()

    return (
        <ul className="category-bar">
            {categories.map((category) => (
                <li key={category.id}>
                    <BrandCategoryButton icon={<MouseIcon />} text={category.name} />
                </li>
            ))}
        </ul>
    )
}

export default CategoryBar