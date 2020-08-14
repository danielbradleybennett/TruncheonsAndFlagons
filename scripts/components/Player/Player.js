const PlayerComponent = (player) => {

  return `
  <div class="player_card">
  <div>Name: ${player.playerName}<div>

  <button id="deletePlayer--${player.id}">Delete</button>
  <button id="editPlayer--${player.id}">Edit</button>

</div>
<br>
`

}

export default PlayerComponent