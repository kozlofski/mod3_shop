import Link from 'next/link'
import React from 'react'

const tempLinks = {
    home: "/",
    product: "/product",
    contact: "/"
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                {Object.entries(tempLinks).map(([destination, url]) => (
                    <li key={destination}>
                        <Link href={url}>{destination}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar