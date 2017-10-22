import { Address, constants, from, getFromBaseOrDefaultPattern, StripeCountContinuumSettings } from '../../../../src'
import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { neededStripeCountToCoverGrid } from './neededStripeCountToCoverGrid'

const indexOfFirstStripeCrossingThisTile: (_: { gridAddress: Address[] }) => number = ({ gridAddress }) => {
	const {
		initialStripeCount,
		deltaStripeCount,
	}: StripeCountContinuumSettings = getFromBaseOrDefaultPattern('stripeCountContinuumSettings')

	for (let stripeIndex = 0; stripeIndex < neededStripeCountToCoverGrid(); stripeIndex++) {
		const stripePosition = termialRoot({
			n: stripeIndex,
			rangeDelta: deltaStripeCount,
			rangeStart: initialStripeCount,
		}) * constants.PERIMETER_SCALAR
		const [ x, y ] = from.Address(gridAddress)
		if (stripePosition > x + y) {
			return stripeIndex
		}
	}

	return 0
}

export { indexOfFirstStripeCrossingThisTile }
