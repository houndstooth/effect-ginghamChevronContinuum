import {
	getGinghamChevronContinuumStripePositions,
	realignTileColorIndicesForGinghamChevronContinuum,
} from '../src'
import { standardAnimation, Houndstooth, StripeCountMode } from '../../../src'

const ginghamChevronContinuumEffect: Houndstooth = {
	name: 'gingham chevron continuum',
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountMode: StripeCountMode.GINGHAM_CHEVRON_CONTINUUM,
				stripeCountContinuumSettings: {
					deltaStripeCount: 1,
					initialStripeCount: 1,
				},
				getStripePositions: getGinghamChevronContinuumStripePositions,
			},
		},
		colorSettings: {
			assignment: {
				transformTileColorIndices: realignTileColorIndicesForGinghamChevronContinuum,
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
