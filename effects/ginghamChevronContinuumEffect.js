import realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid from '../src/utilities/realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from '../src/utilities/getGinghamChevronContinuumStripePositions'
import src from '../../../src'

export default {
	name: 'gingham chevron continuum',
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountMode: 'GINGHAM_CHEVRON_CONTINUUM',
				stripeCountContinuumSettings: {
					deltaStripeCount: 1,
					initialStripeCount: 1,
				},
				getStripePositions: getGinghamChevronContinuumStripePositions,
			},
		},
		colorSettings: {
			assignment: {
				transformTileColorIndices: realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid,
			},
		},
	},
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountContinuumSettings: {
					deltaStripeCount: src.standardAnimation,
					initialStripeCount: src.standardAnimation,
				},
			},
		},
	},
}
