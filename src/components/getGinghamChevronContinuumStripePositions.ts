import { Address, constants, state, StripePosition } from '../../../../src'
import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { getDistanceFromHomeAddress } from './getDistanceFromHomeAddress'
import { neededStripeCountToCoverGrid } from './neededStripeCountToCoverGrid'

const getGinghamChevronContinuumStripePositions: (_: {
	gridAddress: Address,
}) => StripePosition[] = ({ gridAddress }) => {
	// tslint:disable-next-line:max-line-length
	const { initialStripeCount = 0, deltaStripeCount = 0 } = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings.stripeCountContinuumSettings
	const distanceFromHomeAddress = getDistanceFromHomeAddress({ gridAddress })

	return getStripePositions({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount })
}

const getStripePositions: (_: {
	deltaStripeCount: number, distanceFromHomeAddress: number, initialStripeCount: number,
}) => StripePosition[] = ({ deltaStripeCount, distanceFromHomeAddress, initialStripeCount }) => {
	const stripes = [ 0 ]

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const stripe = termialRoot({
			n,
			rangeDelta: deltaStripeCount,
			rangeStart: initialStripeCount,
		}) * constants.PERIMETER_SCALAR
		if (stripe >= distanceFromHomeAddress + constants.PERIMETER_SCALAR) {
			return stripes
		}
		if (stripe > distanceFromHomeAddress) {
			stripes.push((stripe - distanceFromHomeAddress) % constants.PERIMETER_SCALAR)
		}
	}

	return stripes as any
}

export { getGinghamChevronContinuumStripePositions }
