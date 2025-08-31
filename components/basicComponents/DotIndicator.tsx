import React from 'react'

interface DotIndicatorProps {
    dots: number;
    active: number;
}

function getDotClass(idx: number, active: DotIndicatorProps["active"]) {
    return `w-[12px] h-[12px] rounded-[50%] ${idx === active ? "bg-secondaryBtn" : "bg-inactiveDot"}`
}

const DotIndicator: React.FC<DotIndicatorProps> = ({ dots, active }) => {
    return (
        <ul className="flex flex-row gap-[16px]">
            {Array.from({ length: dots }).map((_, idx) => (
                <li key={idx}>
                    <div className={getDotClass(idx, active)}></div>
                </li>
            ))}
        </ul>
    )
}

export default DotIndicator