import { PlayerFormComponent } from './components/Player/PlayerForm.js'
import { getPlayer } from './components/Player/PlayerProvider.js'
import { PlayerListComponent } from './components/Player/PlayerEntryList.js'



getPlayer()
  .then(PlayerListComponent)
  .then(PlayerFormComponent)

