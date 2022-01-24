import React from 'react'
import { HashLink as Link} from "react-router-hash-link"

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "Contact",
            href: "#contact"
        },
        {
            name: "About",
            href: "#about"
        }
    ]

    return (
        <div className='Nav'>
            <h3>Nav</h3>
            <ul className="navlinks">
                {navList.map((link) => {
                    return(
                        <li>
                            <Link to={link.href}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Nav;