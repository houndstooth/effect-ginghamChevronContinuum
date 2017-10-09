import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { state } from '../../../../src'
import getDistanceFromHomeAddress from './getDistanceFromHomeAddress'
import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'

const getGinghamChevronContinuumStripePositions = ({ gridAddress }) => {
	const stripePositionSettings = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings
	const { initialStripeCount, deltaStripeCount } = stripePositionSettings.stripeCountContinuumSettings
	const distanceFromHomeAddress = getDistanceFromHomeAddress({ gridAddress })

	return getStripePositions({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount })
}

const getStripePositions = ({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount }) => {
	const stripes = [ 0 ]

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = termialRoot({ rangeStart: initialStripeCount, rangeDelta: deltaStripeCount, n }) * 2
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
