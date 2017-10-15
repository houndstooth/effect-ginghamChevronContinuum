import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { state, Address } from '../../../../src'
import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'

const indexOfFirstStripeCrossingThisTile: {({}: { gridAddress: Address }): number} = ({ gridAddress }) => {
	const stripePositionSettings = state.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings
	const { initialStripeCount, deltaStripeCount } = stripePositionSettings.stripeCountContinuumSettings

	for (let stripeIndex = 0; stripeIndex < neededStripeCountToCoverGrid(); stripeIndex++) {
		const stripePosition = termialRoot({
			rangeStart: initialStripeCount,
			rangeDelta: deltaStripeCount,
			n: stripeIndex,
		}) * 2
		if (stripePosition > gridAddress[ 0 ] + gridAddress[ 1 ]) {
			return stripeIndex
		}
	}
}

export default indexOfFirstStripeCrossingThisTile
