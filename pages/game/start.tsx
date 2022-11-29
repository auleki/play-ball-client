import LinkButton from "../../components/buttons/LinkButton"

const Start = () => {
  return (
    <div>
      <h1>Start Game</h1>
      <LinkButton path="/playing" pathname="Finish Game" />
    </div>
  )
}

export default Start