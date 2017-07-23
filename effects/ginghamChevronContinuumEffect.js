import { ANIMATION_RATE } from '../../../src/constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from '../src/utilities/realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from '../src/utilities/getGinghamChevronContinuumStripePositions'

export default {
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountMode: 'GINGHAM_CHEVRON_CONTINUUM',
				ginghamChevronContinuumSettings: {
					deltaStripeCount: 1,
					initialStripeCount: 1,
				},
				getStripePositions: getGinghamChevronContinuumStripePositions,
			},
		},
		colorSettings: {
			assignment: {
				transformAssignedSet: realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid,
			},
		},
	},
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				ginghamChevronContinuumSettings: {
					deltaStripeCount: p => p * ANIMATION_RATE,
					initialStripeCount: p => p * ANIMATION_RATE,
				},
			},
		},
	},
}
