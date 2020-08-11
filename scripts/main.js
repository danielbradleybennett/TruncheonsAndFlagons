import { PlayerFormComponent } from './components/PlayerForm.js'
import { getPlayer } from './providers/PlayerProvider.js'
import { PlayerListComponent } from './components/PlayerEntryList.js'



getPlayer()
  .then(PlayerListComponent)
  .then(PlayerFormComponent)

