import React, { useState } from 'react'
import TeamScore from './TeamScore.Scoreboard'

const Scoreboard = ({ teamA, teamB }: { teamA: any, teamB: any }) => {

    return (
        <section className='text-white bg-gray-500 p-4 pb-6 rounded-lg border-2 border-gray-400'>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-xs text-gray-200'>Thur 12 Nov 2022</span>
                <span className='text-xs text-purple-200'>2:34pm</span>
            </div>
            <div className='flex justify-between items-center'>
                <TeamScore team={teamA} />

                {/* SEPARATOR */}
                <div>
                    <div className="w-12 h-2 rounded-full bg-gray-400"></div>
                </div>

                <TeamScore team={teamB} />
            </div>
            <div className='bg-gray-500 border-2 flex max-w-max px-10 py-1 m-auto -mb-10 rounded-full border-gray-400 items-center justify-center'>
                <span>3:24</span>
            </div>
        </section>
    )
}

export default Scoreboard
