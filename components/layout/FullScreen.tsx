import React from 'react'

const FullScreen = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen px-4">{children}</div>
    )
}

export default FullScreen