import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../shared/state/state'
import calculateTrapezoidalRoot from './calculateTrapezoidalRoot'

export default ({ colors, origin }) => {
	const gcc = state.shared.stripeCount.ginghamChevronContinuum
	const { continuumStartsAtStripeCount, stripeCountIncreasePerDiagonal } = gcc

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const thisStripe = calculateTrapezoidalRoot({ 
			continuumStartsAtStripeCount,
			stripeCountIncreasePerDiagonal,
			n
		}) * 2
		if (thisStripe > origin[ 0 ] + origin[ 1 ]) {
			if (n % 2 === 1) {
				return colors.reverse()
			} else {
				return colors
			}
		}
	}

	return colors
}
