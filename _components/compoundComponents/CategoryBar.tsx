import React from 'react'
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, WebcamIcon } from '../icons/icons'
import BrandCategoryButton from './BrandCategoryButton'
import { prisma } from '@/prisma/clientSingleton'

const categoryIcons: Record<string, React.ReactNode> = {
    mouse: <MouseIcon />,
    monitor: <MonitorIcon />,
    headphones: <HeadphonesIcon />,
    keyboard: <KeyboardIcon />,
    webcam: <WebcamIcon />
}

const CategoryBar = async () => {
    const categories = await prisma.category.findMany()

    return (
        <ul className="category-bar">
            {categories.map((category) => (
                <li key={category.id}>
                    <BrandCategoryButton icon={categoryIcons[category.name]} text={category.name} />
                </li>
            ))}
        </ul>
    )
}

export default CategoryBar