import LinkButton from "../../components/buttons/LinkButton"
import PageLayout from "../../components/layout/PageLayout"

const Over = () => {
  return (
    <PageLayout>
      <h1>Game Over</h1>
      <LinkButton pathname="Restart" path="/game/select" />
    </PageLayout>
  )
}

export default Over