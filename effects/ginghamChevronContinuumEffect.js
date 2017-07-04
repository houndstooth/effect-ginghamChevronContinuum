import { ANIMATION_RATE } from '../../../src/constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from '../src/utilities/realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from '../src/utilities/getGinghamChevronContinuumStripePositions'

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
