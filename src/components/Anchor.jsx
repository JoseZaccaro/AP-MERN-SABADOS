import React from 'react'

const Anchor = ({ text, href = '#', className }) => {
    return (
        <a href={href} className={className}>{text}</a>
    )
}

export default Anchor