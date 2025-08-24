import React from 'react'
import { MonitorIcon, MouseIcon, HeadphonesIcon, KeyboardIcon, WebcamIcon } from '../icons/icons'

interface BrandCategoryButtonProps {
    text: string;
}

const BrandCategoryButton: React.FC<BrandCategoryButtonProps> = ({ text }) => {
    const renderIcon = () => {
        switch (text) {
            case 'Mouse':
                return <MouseIcon />;
            case 'Monitor':
                return <MonitorIcon />
            case 'Headphones':
                return <HeadphonesIcon />
            case 'Keyboard':
                return <KeyboardIcon />
            case 'Webcam':
                return <WebcamIcon />
            default:
                return null;
        }
    };

    return (
        <button className="text-primaryBtnTxt text-xl w-[220px] h-[190px] p-[28px] rounded-md border border-border flex flex-col items-center justify-between  bg-secondaryBg">
            {renderIcon()}
            {text}
        </button>
    );
}

export default BrandCategoryButton