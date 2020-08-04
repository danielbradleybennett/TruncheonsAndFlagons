import { usePlayer, savePlayer } from "../providers/PlayerProvider.js"

const contentTarget = document.querySelector(".playerFormContainer")
const eventHub = document.querySelector(".container")





export const PlayerFormComponent = () => {

  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "savePlayer") {
      const hiddentInputValue = document.querySelector("#player-id").nodeValue

      if (hiddentInputValue !== "") {
        const
      }
    }
  })







}