import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../shared/state/state'
import trapezoidalNumbers from './trapezoidalNumbers'

export default ({ origin }) => {
	const { initial, delta } = state.shared.stripeCount.ginghamChevronContinuum
	let theseStripes = [ 0 ]

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const thisStripe = trapezoidalNumbers.trapezoidalRoot({ initial, delta, n }) * 2
		if (thisStripe >= origin[ 0 ] + origin[ 1 ]  + 2) {
			return theseStripes
		}
		if (thisStripe > origin[ 0 ] + origin[ 1 ] ) {
			theseStripes.push((thisStripe - (origin[ 0 ] + origin[ 1 ] )) % 2)
		}
	}

	return theseStripes
}
