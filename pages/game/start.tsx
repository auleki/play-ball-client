import { useContext, useEffect } from "react"
import LinkButton from "../../components/buttons/LinkButton"
import PageLayout from "../../components/layout/PageLayout"
import { GameContext } from "../../contexts/GameContext"

const Start = () => {
  const { gameType } = useContext(GameContext)

  useEffect(() => {
    console.log(gameType)

    return () => {
      console.log('Left Start Page')
    }
  }, [])


  return (
    <PageLayout>
      <h1>Start Game</h1>
      <LinkButton path="/game/playing" pathname="Finish Game" />
    </PageLayout>
  )
}

export default Start