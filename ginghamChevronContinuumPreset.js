import { ANIMATION_RATE } from '../../application/constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from './realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'

export default {
	state: {
		stripeCountConfig: {
			mode: 'GINGHAM_CHEVRON_CONTINUUM',
			ginghamChevronContinuum: {
				delta: 1,
				initial: 1
			}
		},
		colorConfig: {
			assignment: {
				transformAssignedSet: realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid
			}
		}
	},
	animations: {
		stripeCountConfig: {
			ginghamChevronContinuum: {
				initial: p => p * ANIMATION_RATE,
				delta: p => p * ANIMATION_RATE
			}
		}
	}
}
