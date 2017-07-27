import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import mathUtilities from '../../../../src/utilities/mathUtilities'
import store from '../../../../store'

export default ({ gridAddress }) => {
	const { initialStripeCount, deltaStripeCount } = store.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings.ginghamChevronContinuumSettings
	let stripes = [ 0 ]
	const distanceFromZeroZeroAddress = Math.abs(gridAddress[ 0 ]) + Math.abs(gridAddress[ 1 ])

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = mathUtilities.termialRoot(
			{ rangeStart: initialStripeCount, rangeDelta: deltaStripeCount, n }
		) * 2
		if (stripe >= distanceFromZeroZeroAddress + 2) {
			return stripes
		}
		if (stripe > distanceFromZeroZeroAddress) {
			stripes.push((stripe - distanceFromZeroZeroAddress) % 2)
		}
	}

	return stripes
}
