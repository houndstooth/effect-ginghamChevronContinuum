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
					deltaStripeCount: standardAnimation.main,
					initialStripeCount: standardAnimation.main,
				},
			},
		},
	},
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				transformShapeColorIndices: realignShapeColorIndicesForGinghamChevronContinuum.main,
			},
		},
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getGinghamChevronContinuumStripePositions.main,
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
