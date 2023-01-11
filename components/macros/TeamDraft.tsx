import React from 'react'
import { ITeamDraft } from '../../typings/components'

const TeamDraft = ({ team }: { team: ITeamDraft }) => {
    return (
        <section className='bg-purple-700 px-4 py-2 rounded-md flex flex-col gap-3'>
            <div>
                <h2 className='text-lg text-white'>{team?.name}</h2>
                {/* show remove icon if hovered or selected */}
            </div>
            <div className='flex text-gray-200 gap-4'>
                <div className='flex flex-col text-center'>
                    <span className='text-xs'>Starters</span>
                    <span className='text-xs'>{team?.starters}</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='text-xs'>Bench</span>
                    <span className='text-xs'>{team?.bench}</span>
                </div>
            </div>
        </section>
    )
}

export default TeamDraft
