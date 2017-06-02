import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../shared/state/state'
import trapezoidalNumbers from './trapezoidalNumbers'

export default ({ address }) => {
	const { initial, delta } = state.stripeCountConfig.ginghamChevronContinuum
	let stripes = [ 0 ]
	const distanceFromOrigin = Math.abs(address[ 0 ] + address[ 1 ])
	console.log(initial, delta, address[0], address[1], distanceFromOrigin)
	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = trapezoidalNumbers.trapezoidalRoot({ initial, delta, n }) * 2
		if (stripe >= distanceFromOrigin + 2) {
			return stripes
		}
		if (stripe > distanceFromOrigin) {
			stripes.push((stripe - distanceFromOrigin) % 2)
		}
	}

	return stripes
}
