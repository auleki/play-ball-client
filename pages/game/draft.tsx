import React from 'react'
import EmptyDraft from '../../components/empty/EmptyDraft'
import FullScreen from '../../components/layout/FullScreen'

const Draft = () => {
    return (
        <FullScreen>
            <div className="flex items-center justify-center">
                <EmptyDraft />
            </div>
        </FullScreen>
    )
}

export default Draft