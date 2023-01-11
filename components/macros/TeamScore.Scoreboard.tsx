import React from 'react'

export type TeamScoreProps = {
    name: string
    points: number
}

const TeamScore = ({ team }: { team: TeamScoreProps }) => {
    return (
        <div className='text-center flex flex-col items-center gap-3'>
            {/* Add animation as the points change */}
            <div className='h-14 w-16 bg-purple-600 border-2 text-2xl font-bold border-emerald-200 rounded-full items-center justify-center flex'>
                {team.points}
            </div>
            <p className='text-gray-200'>{team.name}</p>
        </div>
    )
}

export default TeamScore
