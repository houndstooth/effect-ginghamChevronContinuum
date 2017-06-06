import { ANIMATION_RATE } from '../../application/constants'
import realignSetForGinghamChevronContinuum from './realignSetForGinghamChevronContinuum'

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
				transformAssignedSet: realignSetForGinghamChevronContinuum
			}
		}
	},
	animations: {
		stripeCountConfig: {
			ginghamChevronContinuum: {
				initial: p => p * ANIMATION_RATE,
				delta: p => p * ANIMATION_RATE
			}
		}
	}
}
