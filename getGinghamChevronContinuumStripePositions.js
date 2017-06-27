import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import mathUtilities from '../../utilities/mathUtilities'

export default ({ address }) => {
	const { initial, delta } = settings.initial.stripeCountConfig.ginghamChevronContinuum
	let stripes = [ 0 ]
	const distanceFromZeroZeroAddress = Math.abs(address[ 0 ]) + Math.abs(address[ 1 ])

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = mathUtilities.termialRoot({ initial, delta, n }) * 2
		if (stripe >= distanceFromZeroZeroAddress + 2) {
			return stripes
		}
		if (stripe > distanceFromZeroZeroAddress) {
			stripes.push((stripe - distanceFromZeroZeroAddress) % 2)
		}
	}

	return stripes
}
