import React from 'react'
import LinkButton from '../../components/buttons/LinkButton'
import PageLayout from '../../components/layout/PageLayout'

const Playing = () => {
    return (
        <PageLayout>
            <h1>Play State</h1>
            <LinkButton path='/game/over' pathname='Finish game' />
        </PageLayout>
    )
}

export default Playing