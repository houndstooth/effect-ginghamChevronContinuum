import { termialRoot } from '../../../../src/utilities/mathUtilities'
import getDistanceFromHomeAddress from './getDistanceFromHomeAddress'
import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import { Address, StripePosition, state } from '../../../../src'

const getGinghamChevronContinuumStripePositions: {
	({}: { gridAddress: Address }): StripePosition[],
} = ({ gridAddress }) => {
	const basePattern = state.mainHoundstooth.basePattern || {}
	const stripeSettings = basePattern.stripeSettings || {}
	const stripePositionSettings = stripeSettings.stripePositionSettings || {}
	const stripeCountContinuumSettings = stripePositionSettings.stripeCountContinuumSettings || {}
	const { initialStripeCount = 0, deltaStripeCount = 0 } = stripeCountContinuumSettings
	const distanceFromHomeAddress = getDistanceFromHomeAddress({ gridAddress })

	return getStripePositions({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount })
}

const getStripePositions: {
	({}: { deltaStripeCount: number, distanceFromHomeAddress: number, initialStripeCount: number }): StripePosition[],
} = ({ deltaStripeCount, distanceFromHomeAddress, initialStripeCount }) => {
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

	return stripes as any
}

export default getGinghamChevronContinuumStripePositions
