import React from 'react'

function HighlightText({ text }) {
    return (
        <span className='font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#5BEBE2] to-[#1BB6FD]'>{" "}{text}</span>
    )
}

export default HighlightText;