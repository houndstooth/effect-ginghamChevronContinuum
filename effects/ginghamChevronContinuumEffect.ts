import { Effect, standardAnimation, StripeCountMode } from '../../../src'
import {
	getGinghamChevronContinuumStripePositions,
	realignShapeColorIndicesForGinghamChevronContinuum,
} from '../src'

const ginghamChevronContinuumEffect: Effect = {
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
			colorAssignment: {
				transformShapeColorIndices: realignShapeColorIndicesForGinghamChevronContinuum,
			},
		},
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getGinghamChevronContinuumStripePositions,
				stripeCountContinuumSettings: {
					deltaStripeCount: 1,
					initialStripeCount: 1,
				},
				stripeCountMode: StripeCountMode.GinghamChevronContinuum,
			},
		},
	},
	name: 'gingham chevron continuum',
}

export { ginghamChevronContinuumEffect }
