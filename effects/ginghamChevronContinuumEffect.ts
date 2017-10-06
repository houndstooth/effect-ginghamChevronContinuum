import { getGinghamChevronContinuumStripePositions, realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid } from '../src'
import { standardAnimation } from '../../../src'

const ginghamChevronContinuumEffect = {
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
					deltaStripeCount: standardAnimation,
					initialStripeCount: standardAnimation,
				},
			},
		},
	},
}

export default ginghamChevronContinuumEffect
