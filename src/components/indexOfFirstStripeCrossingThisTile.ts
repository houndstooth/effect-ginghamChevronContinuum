import { Address, constants, getFromBaseOrDefaultPattern, StripeCountContinuumSettings } from '../../../../src'
import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { neededStripeCountToCoverGrid } from './neededStripeCountToCoverGrid'

const indexOfFirstStripeCrossingThisTile: (_: { gridAddress: Address }) => number = ({ gridAddress }) => {
	const {
		initialStripeCount,
		deltaStripeCount,
	}: StripeCountContinuumSettings = getFromBaseOrDefaultPattern('stripeCountContinuum')

	for (let stripeIndex = 0; stripeIndex < neededStripeCountToCoverGrid(); stripeIndex++) {
		const stripePosition = termialRoot({
			n: stripeIndex,
			rangeDelta: deltaStripeCount,
			rangeStart: initialStripeCount,
		}) * constants.PERIMETER_SCALAR
		if (stripePosition > gridAddress[ 0 ] + gridAddress[ 1 ]) {
			return stripeIndex
		}
	}

	return 0
}

export { indexOfFirstStripeCrossingThisTile }
