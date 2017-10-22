import {
	constants,
	getFromBaseOrDefaultPattern,
	GetStripePositions,
	StripeCountContinuumSettings,
	StripePosition,
	to,
} from '../../../../src'
import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { getDistanceFromHomeAddress } from './getDistanceFromHomeAddress'
import { neededStripeCountToCoverGrid } from './neededStripeCountToCoverGrid'

const getGinghamChevronContinuumStripePositions: GetStripePositions = ({ gridAddress }) => {
	const {
		initialStripeCount,
		deltaStripeCount,
	}: StripeCountContinuumSettings = getFromBaseOrDefaultPattern('stripeCountContinuum')

	const distanceFromHomeAddress = getDistanceFromHomeAddress({ gridAddress })

	return getStripePositions({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount })
}

const getStripePositions: (_: {
	deltaStripeCount: number, distanceFromHomeAddress: number, initialStripeCount: number,
}) => StripePosition[] = ({ deltaStripeCount, distanceFromHomeAddress, initialStripeCount }) => {
	const stripePositions = to.StripePositions([ 0 ])

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const rawStripePositionValue = termialRoot({
			n,
			rangeDelta: deltaStripeCount,
			rangeStart: initialStripeCount,
		}) * constants.PERIMETER_SCALAR
		if (rawStripePositionValue >= distanceFromHomeAddress + constants.PERIMETER_SCALAR) {
			return stripePositions
		}
		if (rawStripePositionValue > distanceFromHomeAddress) {
			const stripePositionValue = (rawStripePositionValue - distanceFromHomeAddress) % constants.PERIMETER_SCALAR
			stripePositions.push(to.StripePosition(stripePositionValue))
		}
	}

	return stripePositions
}

export { getGinghamChevronContinuumStripePositions }
