import LinkButton from "../../components/buttons/LinkButton"
import PageLayout from "../../components/layout/PageLayout"

const Start = () => {
  return (
    <PageLayout>
      <h1>Start Game</h1>
      <LinkButton path="/game/playing" pathname="Finish Game" />
    </PageLayout>
  )
}

export default Start