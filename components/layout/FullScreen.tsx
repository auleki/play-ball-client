import React from 'react'

const FullScreen = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen">{children}</div>
    )
}

export default FullScreen