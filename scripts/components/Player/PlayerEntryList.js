import { usePlayer, deletePlayer } from "./PlayerProvider.js"
import PlayerComponent from "../Player/Player.js"

const contentTarget = document.querySelector(".playerDetail")
const eventHub = document.querySelector(".container")


export const PlayerListComponent = () => {
  const playerCollection = usePlayer();


  eventHub.addEventListener("playerHasBeenEdited", event => {
    const updatedPlayer = usePlayer()
    render(updatedPlayer)

  })

  eventHub.addEventListener("click", evt => {
    if (evt.target.id.startsWith("editPlayer--")) {
      console.log("do you hear me")
      const [deletePrefix, playerId] = evt.target.id.split("--")

      const editPlayer = new CustomEvent("editButtonClicked", {
        detail: {
          playerId: playerId
        }

      })
      eventHub.dispatchEvent(editPlayer)
    }
    if (evt.target.id.startsWith("deletePlayer--")) {
      console.log("do you hear me")
      const [prefix, id] = evt.target.id.split("--")

      deletePlayer(id).then(
        () => {
          const NewPlayer = usePlayer()
          render(NewPlayer)
        }
      )
    }
    const renderNotesAgain = () => {
      const allPlayers = usePlayer()
      render(allPlayers)
    }

    eventHub.addEventListener("playerCreated", event => {
      if (document.querySelector(".playerDetail").innerHTML !== "") { renderNotesAgain() }

    })

  })




  let render = (playerCollection) => {

    contentTarget.innerHTML = `${playerCollection.map(
      (currentPlayer) => { return PlayerComponent(currentPlayer) }).join("")}`



  }


  render(playerCollection)
}


