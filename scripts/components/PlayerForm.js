import { usePlayer, savePlayer } from "../providers/PlayerProvider.js"

const contentTarget = document.querySelector(".playerFormContainer")
const eventHub = document.querySelector(".container")





export const PlayerFormComponent = () => {

  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "savePlayer") {
      const hiddentInputValue = document.querySelector("#player-id").nodeValue

      if (hiddentInputValue !== "") {
        const editedPlayer = {
          id: parseInt(document.querySelector("player-id")).value,
          name: document.querySelector("playerName").value,
          team: document.querySelector("teamName").value

        }

        editPlayer(editedPlayer).then(() => {
          eventHub.dispatchEvent(new CustomEvent("entryHasBeenEdited"))
        })

      }
      else {
        const playerName = document.querySelector("playerName").value;
        const teamName = document.querySelector("teamName").value;
      }

      const newPlayer = {
        name: playerName,
        team: teamName
      }

      savePlayer(newPlayer).then(() => {
        const message = new CustomEvent("playerCreated")
        eventHub.dispatchEvent(message)
      })
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
      <fieldset>`
  }

  render()




}