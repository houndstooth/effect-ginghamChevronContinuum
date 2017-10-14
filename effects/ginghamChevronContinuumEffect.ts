import {
	getGinghamChevronContinuumStripePositions,
	realignTileColorIndicesForGinghamChevronContinuum,
} from '../src'
import { standardAnimation, Houndstooth } from '../../../src'

const ginghamChevronContinuumEffect: Houndstooth = {
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
