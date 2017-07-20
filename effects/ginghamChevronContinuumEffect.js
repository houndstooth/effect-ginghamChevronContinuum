import { ANIMATION_RATE } from '../../../src/constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from '../src/utilities/realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from '../src/utilities/getGinghamChevronContinuumStripePositions'

export default {
	base: {
		stripeCountSettings: {
			stripeCountMode: 'GINGHAM_CHEVRON_CONTINUUM',
			ginghamChevronContinuum: {
				deltaStripeCount: 1,
				initialStripeCount: 1,
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
				deltaStripeCount: p => p * ANIMATION_RATE,
				initialStripeCount: p => p * ANIMATION_RATE,
			},
		},
	},
}
