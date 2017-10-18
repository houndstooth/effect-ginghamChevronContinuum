import { Address, constants, state } from '../../../../src'
import { termialRoot } from '../../../../src/utilities/mathUtilities'
import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'

const indexOfFirstStripeCrossingThisTile: (_: { gridAddress: Address }) => number = ({ gridAddress }) => {
	const basePattern = state.mainHoundstooth.basePattern || {}
	const stripeSettings = basePattern.stripeSettings || {}
	const stripePositionSettings = stripeSettings.stripePositionSettings || {}
	const stripeCountContinuumSettings = stripePositionSettings.stripeCountContinuumSettings || {}
	const { initialStripeCount = 0, deltaStripeCount = 0 } = stripeCountContinuumSettings

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

export default indexOfFirstStripeCrossingThisTile
