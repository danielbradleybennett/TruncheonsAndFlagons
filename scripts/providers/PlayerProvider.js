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

export const getPlayer = () => {
  return fetch("http://localhost:8088/players")
    .then(response => response.json())
    .then(parsedPlayer => {
      debugger
      player = parsedPlayer.slice()
    })


}

export const deletePlayer = (playerObject) => {
  return fetch(`http://localhost:8088/players/${playerObject.id}`, {
    method: "DELETE"
  })
    .then(getPlayer)
}

export const editPlayer = (playerObject) => {
  return fetch(`http://localhost:8088/players/${playerObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObject)
  })
    .then(getPlayer)
}