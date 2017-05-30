import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../shared/state/state'
import trapezoidalNumbers from './trapezoidalNumbers'

export default ({ colors, origin }) => {
	const { initial, delta } = state.shared.stripeCount.ginghamChevronContinuum

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const thisStripe = trapezoidalNumbers.trapezoidalRoot({ initial, delta, n }) * 2
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
