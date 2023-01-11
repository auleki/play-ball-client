import React from 'react'
import Link from 'next/link'

const LinkButton = ({ path, pathname }: { path: string, pathname: string }) => {
    return (
        <Link href={path}>
            <span className="text-white" >
                {pathname}
            </span>
        </Link>
    )
}

export default LinkButton
