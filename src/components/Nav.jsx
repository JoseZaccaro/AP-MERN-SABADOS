import React from 'react'

const Nav = ({ className, links }) => {
    return (
        <nav className={className}>
            {
                links?.map(link => (
                    <a href={link.href} key={link.id}>{link.title}</a>
                ))
            }

        </nav>
    )
}

export default Nav