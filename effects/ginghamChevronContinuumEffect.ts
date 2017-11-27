import { Effect, standardAnimation, StripeCountMode } from '../../../src'
import {
	getGinghamChevronContinuumStripePositions,
	realignShapeColorIndicesForGinghamChevronContinuum,
} from '../pattern'

const ginghamChevronContinuumEffect: Effect = {
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountContinuumSettings: {
					deltaStripeCount: standardAnimation.default,
					initialStripeCount: standardAnimation.default,
				},
			},
		},
	},
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				transformShapeColorIndices: realignShapeColorIndicesForGinghamChevronContinuum.default,
			},
		},
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getGinghamChevronContinuumStripePositions.default,
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
