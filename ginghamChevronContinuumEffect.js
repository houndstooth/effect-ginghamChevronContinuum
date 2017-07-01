import { ANIMATION_RATE } from '../../constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from './realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from './getGinghamChevronContinuumStripePositions'

export default {
	initial: {
		stripeCountConfig: {
			mode: 'GINGHAM_CHEVRON_CONTINUUM',
			ginghamChevronContinuum: {
				delta: 1,
				initial: 1,
			},
		},
		colorConfig: {
			assignment: {
				transformAssignedSet: realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid,
			},
		},
		getStripePositions: getGinghamChevronContinuumStripePositions,
	},
	animations: {
		stripeCountConfig: {
			ginghamChevronContinuum: {
				initial: p => p * ANIMATION_RATE,
				delta: p => p * ANIMATION_RATE,
			},
		},
	},
}
