import { termialRoot } from '../../../../src/utilities/mathUtilities'
import getDistanceFromHomeAddress from './getDistanceFromHomeAddress'
import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import { Address, StripePosition, state } from '../../../../src'

type GetGinghamChevronContinuumStripePositions = { ({}: { gridAddress: Address }): StripePosition[] }

const getGinghamChevronContinuumStripePositions: GetGinghamChevronContinuumStripePositions = ({ gridAddress }) => {
	const stripePositionSettings = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings
	const { initialStripeCount, deltaStripeCount } = stripePositionSettings.stripeCountContinuumSettings
	const distanceFromHomeAddress = getDistanceFromHomeAddress({ gridAddress })

	return getStripePositions({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount })
}

type GetStripePositions = {
	({}: { initialStripeCount: number, distanceFromHomeAddress: number, deltaStripeCount: number }): StripePosition[],
}

const getStripePositions: GetStripePositions = ({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount }) => {
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
