import { usePlayer, deletePlayer } from "../providers/PlayerProvider.js"

const contentTarget = document.querySelector(".playerDetail")
const eventHub = document.querySelector(".container")


export const PlayerListComponent = () => {

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

  })

  const renderPlayersAgain = () => {
    const AllPlayers = usePlayer()
    render(AllPlayers)
  }

  const redner = (playerCollection) => {
    contentTarget.innerHTML = playerCollection.map(
      (playerObject) => {
        return `
        <div class="player_card">
          <div>Name: ${playerObject.playerName}<div>

          <button id="deletePlayer--${playerObject.id}">Delete</button>
          <button id="editPlayer--${playerObject.id}">Edit</button>
        
        </div>
        <br>
        `
      }

    ).join("")
  }


}