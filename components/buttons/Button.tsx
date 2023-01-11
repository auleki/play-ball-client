import React from 'react'

const Button = ({ text, onClick }: { text: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} className='px-4 min-w-max py-2 rounded-md bg-green-600 text-white'>{text}</button>
    )
}

export default Button
