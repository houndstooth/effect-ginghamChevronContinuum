import { NamedEffect, standardAnimation, StripeCountMode } from '../../../src'
import {
	getGinghamChevronContinuumStripePositions,
	realignShapeColorIndicesForGinghamChevronContinuum,
} from '../pattern'
import GINGHAM_CHEVRON_CONTINUUM_DESCRIPTION from './ginghamChevronContinuumDescription'

const ginghamChevronContinuumEffect: NamedEffect = {
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
				stripeCountMode: StripeCountMode.GinghamChevronContinuum,
			},
		},
	},
	description: GINGHAM_CHEVRON_CONTINUUM_DESCRIPTION,
	name: 'gingham chevron continuum',
}

export { ginghamChevronContinuumEffect }
