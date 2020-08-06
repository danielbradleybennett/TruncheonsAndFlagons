import { usePlayer, savePlayer } from "../providers/PlayerProvider.js"

const contentTarget = document.querySelector(".playerFormContainer")
const eventHub = document.querySelector(".container")





export const PlayerFormComponent = () => {


  eventHub.addEventListener("click", (evt) => {
    debugger
    if (evt.target.id === "addPlayerBtn") {


      // const teamId = parseInt(document.getElementById("playerTeam").value)
      const newPlayer = {
        name: document.getElementById("playerName").value
        // teamId: teamId
      }

      savePlayer(newPlayer).then(() => {
        const message = new CustomEvent("playerCreated")
        eventHub.dispatchEvent(message)
      }
      )
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
      <button id="addPlayerBtn">Add Player</button>`
  }

  render()

}
