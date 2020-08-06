import { usePlayer, savePlayer } from "../providers/PlayerProvider.js"

const contentTarget = document.querySelector(".playerFormContainer")
const eventHub = document.querySelector(".container")





export const PlayerFormComponent = () => {

  const addPlayerListener = () => {
    eventHub.addEventListener("click", (evt) => {
      if (evt.target.id === "addPlayerBtn") {

        const name = document.getElementById("playerName").value
        const teamId = parseInt(document.getElementById("playerTeam").value)
        const newPlayer = {
          name: name,
          teamId: teamId
        }
        const message = new CustomEvent("addPlayerButtonClicked", {
          detail: {
            newPlayer: newPlayer
          }
        })
        savePlayer(newPlayer).then(() => {
          const message = new CustomEvent("playerCreated")
          eventHub.dispatchEvent(message)
        }
        )
      }
    })
  }

  const render = () => {
    contentTarget.innerHTML = `
    <div class="form">
    <input type="hidden" id="player-id"/>
    <form action="">
      <fieldset>
        <label>Player Name</label>
        <input type="text" id="playerName"/>
      <fieldset>`
  }

  render()

}
