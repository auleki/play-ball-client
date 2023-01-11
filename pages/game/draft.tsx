import Link from 'next/link'
import React from 'react'
import Button from '../../components/buttons/Button'
import RoyalButton from '../../components/buttons/RoyalButton'
import DraftList from '../../components/containers/DraftList'
import FullScreen from '../../components/layout/FullScreen'
import { teams } from '../../utilities/mock.data'

const Draft = () => {
    const LIMIT = 3;
    return (
        <FullScreen>
            <div className="flex flex-col">
                <h2 className='text-lg mb-6 text-gray-200'>Include the teams to play this series</h2>
                <DraftList />
                <section className='mt-12 flex gap-8'>
                    <RoyalButton text='Add Team' />
                    {teams.length > LIMIT ? (
                        <>
                            <Link href={"/game/playing"}>
                                <Button text='Start Game' />
                            </Link>
                        </>
                    ) : null}
                </section>
            </div>
        </FullScreen>
    )
}

export default Draft
