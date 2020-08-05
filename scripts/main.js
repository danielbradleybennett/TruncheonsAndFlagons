import { PlayerFormComponent } from './components/PlayerForm.js'
import { getPlayer } from './providers/PlayerProvider.js'



getPlayer()
  .then(PlayerFormComponent)

