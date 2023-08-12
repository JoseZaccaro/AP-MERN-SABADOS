import React from 'react'
import { Link as Anchor} from 'react-router-dom'

const Nav = ({ className, links }) => {
    return (
        <nav className={className}>
            {
                links?.map(link => (
                    <Anchor to={link.href} key={link.id}>{link.title}</Anchor>
                ))
            }

        </nav>
    )
}

export default Nav