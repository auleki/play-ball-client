import Button from "../../components/buttons/Button"
import LinkButton from "../../components/buttons/LinkButton"
import PageLayout from "../../components/layout/PageLayout"

const Select = () => {
  return (
    <PageLayout>
      <h1>Select A Game</h1>
      <LinkButton path="/game/playing" pathname={"Select a game"} />
    </PageLayout>
  )
}

export default Select