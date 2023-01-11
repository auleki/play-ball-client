import React, { useState } from 'react'
import Button from '../../components/buttons/Button'
import LinkButton from '../../components/buttons/LinkButton'
import PageLayout from '../../components/layout/PageLayout'
import Scoreboard from '../../components/macros/Scoreboard'

const Playing = () => {
    const [teamA, setTeamA] = useState({
        name: "UNEC Ballers",
        points: 42
    })
    const [teamB, setTeamB] = useState({
        name: "Stadium Boys",
        points: 6
    })

    function scoreBasket(team: string, points: number) {
        switch (team) {
            case "A":
                setTeamA(team => ({ ...team, points: Number(team.points) + points }))
                break
            case "B":
                setTeamB(team => ({ ...team, points: Number(team.points) + points }))
            default:
                "No valid team selected"
        }
    }

    return (
        <PageLayout>
            <div className='flex flex-col gap-8'>
                <h1 className="text-white">Play State</h1>
                <Scoreboard teamA={teamA} teamB={teamB} />
                <Button onClick={() => scoreBasket("A", 3)} text="Team A Score" />
                <Button onClick={() => scoreBasket("B", 3)} text="Team B Score" />
                <LinkButton path='/game/over' pathname='Finish game' />
            </div>
        </PageLayout>
    )
}

export default Playing
