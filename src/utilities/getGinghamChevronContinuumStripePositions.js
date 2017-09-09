import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import mathUtilities from '../../../../src/utilities/mathUtilities'
import state from '../../../../state'
import getDistanceFromZeroZeroAddress from './getDistanceFromZeroZeroAddress'

export default ({ gridAddress }) => {
	const { initialStripeCount, deltaStripeCount } = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings.stripeCountContinuumSettings
	let stripes = [ 0 ]
	const distanceFromZeroZeroAddress = getDistanceFromZeroZeroAddress({ gridAddress })

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
