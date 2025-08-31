import React from 'react'
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, WebcamIcon } from '../icons/icons'
import BrandCategoryButton from './BrandCategoryButton'

const categories = {
    Mouse: <MouseIcon />,
    Monitor: <MonitorIcon />,
    Headphones: <HeadphonesIcon />,
    Keyboard: <KeyboardIcon />,
    Webcam: <WebcamIcon />
}

const CategoryBar = () => {
    return (
        <ul className="category-bar">
            {Object.entries(categories).map(([name, svg]) => (
                <li key={name}>
                    <BrandCategoryButton icon={svg} text={name} />
                </li>
            ))}
        </ul>
    )
}

export default CategoryBar