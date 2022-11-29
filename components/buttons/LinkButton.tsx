import React from 'react'
import Link from 'next/link'

const LinkButton = ({ path, pathname }: { path: string, pathname: string }) => {
    return (
        <Link href={path}>{pathname}</Link>
    )
}

export default LinkButton