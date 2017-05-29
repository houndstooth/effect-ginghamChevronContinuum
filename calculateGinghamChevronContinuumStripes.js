import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../shared/state/state'
import calculateTrapezoidalRoot from './calculateTrapezoidalRoot'

export default ({ origin }) => {
	const gcc = state.shared.stripeCount.ginghamChevronContinuum
	const { continuumStartsAtStripeCount, stripeCountIncreasePerDiagonal } = gcc
	let theseStripes = [ 0 ]

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const thisStripe = calculateTrapezoidalRoot({ 
			continuumStartsAtStripeCount,
			stripeCountIncreasePerDiagonal,
			n
		}) * 2
		if (thisStripe >= origin[ 0 ] + origin[ 1 ]  + 2) {
			return theseStripes
		}
		if (thisStripe > origin[ 0 ] + origin[ 1 ] ) {
			theseStripes.push((thisStripe - (origin[ 0 ] + origin[ 1 ] )) % 2)
		}
	}

	return theseStripes
}
