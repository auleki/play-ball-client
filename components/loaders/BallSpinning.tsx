import Image from 'next/image'
import React from 'react'
import spinningBall from "../../assets/images/ball-spinning.gif"

const BallSpinning = () => {
    return (
        <div className="rounded-full h-12 w-12">
            <Image
                src={spinningBall}
                height="100px"
                width="100px"
                alt=""
            />
        </div>
    )
}

export default BallSpinning