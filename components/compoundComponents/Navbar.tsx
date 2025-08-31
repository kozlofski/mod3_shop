import React from 'react'

const tempLinks = {
    home: "/",
    product: "/",
    contact: "/"
}


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                {Object.entries(tempLinks).map(([destination, url]) => (
                    <li key={destination}>
                        <a href={url}>{destination}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar