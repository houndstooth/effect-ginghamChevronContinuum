import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { state } from '../../../../src'
import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'

const indexOfFirstGridStripeCrossingThisTile = ({ gridAddress }) => {
	const { initialStripeCount, deltaStripeCount } = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings.stripeCountContinuumSettings

	for (let stripeIndex = 0; stripeIndex < neededStripeCountToCoverGrid(); stripeIndex++) {
		const stripePosition = termialRoot({
			rangeStart: initialStripeCount,
			rangeDelta: deltaStripeCount,
			n: stripeIndex,
		}) * 2
		if (stripePosition > gridAddress[ 0 ] + gridAddress[ 1 ]) return stripeIndex
	}
}

export default indexOfFirstGridStripeCrossingThisTile
