import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import mathUtilities from '../../../../src/utilities/mathUtilities'

export default ({ setForTile, address }) => {
	const stripeIndex = indexOfFirstGridStripeCrossingThisTile({ address })
	return stripeIndex % 2 === 1 ? setForTile.reverse() : setForTile
}

const indexOfFirstGridStripeCrossingThisTile = ({ address }) => {
	const { initialStripeCount, deltaStripeCount } = currentState.builtPattern.base.stripeCountSettings.ginghamChevronContinuum

	for (let stripeIndex = 0; stripeIndex < neededStripeCountToCoverGrid(); stripeIndex++) {
		const stripePosition = mathUtilities.termialRoot(
			{ rangeStart: initialStripeCount, rangeDelta: deltaStripeCount, n: stripeIndex }
		) * 2
		if (stripePosition > address[ 0 ] + address[ 1 ]) return stripeIndex
	}
}
