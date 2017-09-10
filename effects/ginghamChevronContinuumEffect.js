import ginghamChevronContinuumSrc from '../src'
import src from '../../../src'

const { getGinghamChevronContinuumStripePositions, realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid } = ginghamChevronContinuumSrc

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
