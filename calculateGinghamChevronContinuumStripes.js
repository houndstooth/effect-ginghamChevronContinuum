import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../shared/state/state'
import trapezoidalNumbers from './trapezoidalNumbers'

export default ({ address }) => {
	const { initial, delta } = state.shared.stripeCount.ginghamChevronContinuum
	let stripes = [ 0 ]

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = trapezoidalNumbers.trapezoidalRoot({ initial, delta, n }) * 2
		if (stripe >= address[ 0 ] + address[ 1 ] + 2) {
			return stripes
		}
		if (stripe > address[ 0 ] + address[ 1 ]) {
			stripes.push((stripe - (address[ 0 ] + address[ 1 ] )) % 2)
		}
	}

	return stripes
}
