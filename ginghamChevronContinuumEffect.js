import { ANIMATION_RATE } from '../../application/constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from './realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from './getGinghamChevronContinuumStripePositions'

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
		},
		getStripePositions: getGinghamChevronContinuumStripePositions
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
