import React, { MouseEventHandler } from 'react'
import { CaretIcon } from '../../helpers/icons'

export type RoyalButtonProps = {
    text: string
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon?: any
    spacing?: string
}

const RoyalButton = ({
    text,
    onClick,
    icon: Icon,
    spacing = "cent"
}: RoyalButtonProps) => {
    return (
        <button
            className="bg-purple-800 border border-gray-300 rounded-md flex items-center justify-between px-6 py-4 w-full"
            onClick={onClick}
        >
            <span>{text}</span>
            <span><CaretIcon /></span>
        </button>
    )
}

export default RoyalButton