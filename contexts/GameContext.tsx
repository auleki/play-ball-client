import React, { createContext, SetStateAction, useState } from 'react'
import { IGame, IGameContext } from '../typings/contexts'
import { GAME_TYPE } from '../utilities/enums'

export const GameContext = createContext({} as IGameContext)

const defaultOptions = {
    mode: GAME_TYPE.NONE,
    options: {}
}

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [gameType, setGameType] = useState<IGame>(defaultOptions)

    const values = {
        gameType,
        setGameType
    }

    return (
        <GameContext.Provider value={values}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider