import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import mathUtilities from '../../../../src/utilities/mathUtilities'
import store from '../../../../store'

export default ({ gridAddress }) => {
	const { initialStripeCount, deltaStripeCount } = store.mainHoundstooth.basePattern.stripeSettings.stripePositionSettings.stripeCountContinuumSettings

	for (let stripeIndex = 0; stripeIndex < neededStripeCountToCoverGrid(); stripeIndex++) {
		const stripePosition = mathUtilities.termialRoot({
			rangeStart: initialStripeCount,
			rangeDelta: deltaStripeCount,
			n: stripeIndex,
		}) * 2
		if (stripePosition > gridAddress[ 0 ] + gridAddress[ 1 ]) return stripeIndex
	}
}
