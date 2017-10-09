import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { state } from '../../../../src'
import getDistanceFromHomeAddress from './getDistanceFromHomeAddress'
import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'

const getGinghamChevronContinuumStripePositions = ({ gridAddress }) => {
	const { initialStripeCount, deltaStripeCount } = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings.stripeCountContinuumSettings
	const stripes = [ 0 ]
	const distanceFromHomeAddress = getDistanceFromHomeAddress({ gridAddress })

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = termialRoot(
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

export default getGinghamChevronContinuumStripePositions
