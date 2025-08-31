import React from 'react'

interface SectionWithHeaderProps {
    children: React.ReactNode,
    header?: string,
    className?: string,
}

const SectionWithHeader = ({ children, className, header }: SectionWithHeaderProps) => {
    return (
        <section className={`{className}`}>
            <h2>{header}</h2>
            {children}
        </section>
    )
}


export default SectionWithHeader