import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import mathUtilities from '../../../../src/utilities/mathUtilities'
import state from '../../../../state'
import getDistanceFromHomeAddress from './getDistanceFromHomeAddress'

export default ({ gridAddress }) => {
	const { initialStripeCount, deltaStripeCount } = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings.stripeCountContinuumSettings
	let stripes = [ 0 ]
	const distanceFromHomeAddress = getDistanceFromHomeAddress({ gridAddress })

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = mathUtilities.termialRoot(
			{ rangeStart: initialStripeCount, rangeDelta: deltaStripeCount, n }
		) * 2
		if (stripe >= distanceFromHomeAddress + 2) {
			return stripes
		}
		if (stripe > distanceFromHomeAddress) {
			stripes.push((stripe - distanceFromHomeAddress) % 2)
		}
	}

	return stripes
}
