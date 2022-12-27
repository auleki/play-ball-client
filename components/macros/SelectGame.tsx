import RoyalButton from "../buttons/RoyalButton"
import { useContext, useState } from 'react'
import { GAME_TYPE } from "../../utilities/enums"
import { GameContext } from "../../contexts/GameContext"
import { IGame } from "../../typings/contexts"
import Router from "next/router"

const SelectGame = () => {
    const { gameType, setGameType } = useContext(GameContext)
    const router = Router

    function pickGameType(type: IGame) {
        setGameType((game: IGame) =>
        ({
            ...game,
            mode: type.mode,
            options: type.options
        }))
    }

    function selectGameOption(type: string) {
        pickGameType({
            ...gameType,
            options: {
                type
            }
        })

        if (type === "sets") {
            router.push("/game/draft")
        } else {
            alert('We don\'t know where to send you')
        }
    }

    const selectGameTexts = {
        [GAME_TYPE.PRO]: {
            header: "Pro Game",
            description: "Which level of pro we taking it to?"
        },
        [GAME_TYPE.CASUAL]: {
            header: "Casual Game",
            description: "How kinda fun are we looking to have? 😎"
        },
        [GAME_TYPE.NONE]: {
            header: "Game Selection",
            description: "What kind of game are you officiating?"
        }
    }

    return (
        <div className="flex gap-4 flex-col">
            <section className="flex gap-2 flex-col mb-4">
                <h3 className="text-2xl">{selectGameTexts[gameType?.mode]?.header}</h3>
                <p className="text-gray-200">{selectGameTexts[gameType?.mode]?.description}</p>
            </section>
            {gameType?.mode === GAME_TYPE.NONE ? (
                <section className="flex flex-col gap-2">
                    <RoyalButton text="Pro" />
                    <RoyalButton
                        text="Casual"
                        onClick={() => pickGameType({ mode: GAME_TYPE.CASUAL, options: {} })} />
                </section>
            ) : gameType?.mode === GAME_TYPE.PRO ? (
                <section className="flex flex-col gap-4">
                    <h2>Is</h2>
                    <RoyalButton text="5 vs 5" />
                    <RoyalButton text="3 vs 3" />
                </section>
            ) : (
                <section className="flex flex-col gap-4">
                    <RoyalButton text="Quick Game" />
                    <RoyalButton text="Game of Sets" onClick={() => selectGameOption("sets")} />
                </section>
            )
            }
        </div >
    )
}

export default SelectGame