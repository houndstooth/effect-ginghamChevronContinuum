import { ANIMATION_RATE } from '../../application/constants'
import realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid from './realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'
import getGinghamChevronContinuumStripePositions from './getGinghamChevronContinuumStripePositions'
import state from '../../state/state'
import currentAnimation from '../../state/currentAnimation'

export default {
	state: {
		stripeCountConfig: {
			mode: 'GINGHAM_CHEVRON_CONTINUUM',
			ginghamChevronContinuum: {
				delta: 1,
				initial: 1
			}
		},
		colorConfig: {
			assignment: {
				transformAssignedSet: realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid
			}
		},
		getStripePositions: getGinghamChevronContinuumStripePositions
	},
	animations: {
		stripeCountConfig: {
			ginghamChevronContinuum: {
				initial: () => state.stripeCountConfig.ginghamChevronContinuum.initial * Math.pow(ANIMATION_RATE, currentAnimation.i),
				delta: () => state.stripeCountConfig.ginghamChevronContinuum.delta * Math.pow(ANIMATION_RATE, currentAnimation.i)
			}
		}
	}
}
