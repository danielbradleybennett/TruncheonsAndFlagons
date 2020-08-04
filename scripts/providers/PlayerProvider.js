let player = [];

export const usePlayer = () => {
  return player.slice()
}

export const savePlayer = (player) => {

  return fetch("http://localhost:8088/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(player)
  })
    .then(() => getPlayer())

}

export const getJournal = () => {
  return fetch("http://localhost:8088/players")
    .then(response => response.json())
    .then(parsedPlayer => {
      player = parsedPlayer.slice()
    })


}