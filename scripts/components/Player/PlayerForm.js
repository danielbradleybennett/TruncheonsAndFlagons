import { usePlayer, savePlayer, editPlayer } from "./PlayerProvider.js"

const contentTarget = document.querySelector(".playerFormContainer")
const eventHub = document.querySelector(".container")





export const PlayerFormComponent = () => {

  eventHub.addEventListener("editButtonClicked", event => {

    const playerToBeEdited = event.detail.playerId

    const allPlayersArray = usePlayer()

    const theFoundPlayer = allPlayersArray.find(
      (currentPlayerObject) => {
        return currentPlayerObject.id === parseInt(playerToBeEdited, 10)
      }

    )
    document.querySelector("#playerName").value = theFoundPlayer.playerName



  })



  eventHub.addEventListener("click", evt => {

    if (evt.target.id === "savePlayerBtn") {
      const hiddenInputValue = document.querySelector("#player-id").value

      if (hiddenInputValue !== "") {
        const editedPlayer = {
          id: parseInt(document.querySelector("#note-id").value, 10),
          playerName: document.querySelector("#playerName").value


        }

        editPlayer(editedPlayer).then(() => {
          eventHub.dispatchEvent(new CustomEvent("playerHasBeenEdited"))
        })

      } else {
        const name = document.querySelector("#playerName").value;
        const newPlayer = {
          playerName: name


        }


        savePlayer(newPlayer).then(() => {
          const message = new CustomEvent("playerCreated")
          eventHub.dispatchEvent(message)
        })
      }
    }
  })



  const render = () => {
    contentTarget.innerHTML = `
    <div class="form">
    <input type="hidden" id="player-id"/>
    <form action="">
      <fieldset>
        <label>Player Name</label>
        <input type="text" id="playerName"/>
        
      <fieldset>
      <button id="savePlayerBtn">Add Player</button>
    </form>`
  }

  render()

}
