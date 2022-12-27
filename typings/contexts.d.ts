export interface IGame {
    mode: string
    options: any
}

export interface IGameContext {
    gameType: IGame
    setGameType: React.Dispatch<SetStateAction<IGame>>
}