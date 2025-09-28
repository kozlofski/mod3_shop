import React from 'react'

interface BrandCategoryButtonProps {
    icon: React.ReactNode,
    text: string,
    onClick?: () => void
}

const BrandCategoryButton = ({ icon, text }: BrandCategoryButtonProps) => {
    return (
        <button className="brand-category-btn">
            {icon}
            <h4>{text}</h4>
        </button>
    );
}

export default BrandCategoryButton