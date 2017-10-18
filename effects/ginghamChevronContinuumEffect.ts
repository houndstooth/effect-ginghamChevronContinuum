import { Houndstooth, standardAnimation, StripeCountMode } from '../../../src'
import {
	getGinghamChevronContinuumStripePositions,
	realignTileColorIndicesForGinghamChevronContinuum,
} from '../src'

const ginghamChevronContinuumEffect: Houndstooth = {
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
	basePattern: {
		colorSettings: {
			assignment: {
				transformTileColorIndices: realignTileColorIndicesForGinghamChevronContinuum,
			},
		},
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getGinghamChevronContinuumStripePositions,
				stripeCountContinuumSettings: {
					deltaStripeCount: 1,
					initialStripeCount: 1,
				},
				stripeCountMode: StripeCountMode.GINGHAM_CHEVRON_CONTINUUM,
			},
		},
	},
	name: 'gingham chevron continuum',
}

export { ginghamChevronContinuumEffect }
