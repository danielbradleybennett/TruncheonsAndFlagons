const PlayerComponent = (player) => {

  return `
  <div class="player_card">
  <div>Name: ${playerObject.playerName}<div>

  <button id="deletePlayer--${playerObject.id}">Delete</button>
  <button id="editPlayer--${playerObject.id}">Edit</button>

</div>
<br>
`

}

export default PlayerComponent