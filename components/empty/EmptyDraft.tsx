import React from 'react'
import RoyalButton from '../buttons/RoyalButton'

const EmptyDraft = () => {
    return (
        <div className="mt-32 text-center flex flex-col items-center gap-4 w-5/6">
            <h4 className="text-2xl">No Teams</h4>
            <p className="text-sm text-gray-200">
                To start the set series you need to
                include at least <span className="text-red-300 font-bold">3</span> teams
            </p>
            <RoyalButton text="Add Team" />
        </div>
    )
}

export default EmptyDraft