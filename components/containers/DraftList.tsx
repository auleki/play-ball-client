import React from 'react'
import TeamDraft from '../macros/TeamDraft'
import { teams } from '../../utilities/mock.data'
import EmptyDraft from '../empty/EmptyDraft'

const DraftList = () => {
    return (
        <div className='flex flex-col gap-4'>
            {!teams.length ? (
                <EmptyDraft />
            ) : (teams.map(team => (
                <TeamDraft
                    key={team?.id}
                    team={team}
                />
            )))}
        </div>
    )
}


export default DraftList
