import { ANIMATION_RATE } from '../../../src/constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from '../src/utilities/realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from '../src/utilities/getGinghamChevronContinuumStripePositions'

export default {
	initial: {
		stripeCountSettings: {
			mode: 'GINGHAM_CHEVRON_CONTINUUM',
			ginghamChevronContinuum: {
				delta: 1,
				initial: 1,
			},
		},
		colorSettings: {
			assignment: {
				transformAssignedSet: realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid,
			},
		},
		getStripePositions: getGinghamChevronContinuumStripePositions,
	},
	animations: {
		stripeCountSettings: {
			ginghamChevronContinuum: {
				initial: p => p * ANIMATION_RATE,
				delta: p => p * ANIMATION_RATE,
			},
		},
	},
}
