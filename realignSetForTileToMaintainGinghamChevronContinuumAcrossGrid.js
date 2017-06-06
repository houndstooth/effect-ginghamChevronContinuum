import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../../state/state'
import mathUtilities from '../../utilities/mathUtilities'

export default ({ setForTile, address }) => {
	const stripeIndex = indexOfFirstGridStripeCrossingThisTile({ address })
	return stripeIndex % 2 === 1 ? setForTile.reverse() : setForTile
}

const indexOfFirstGridStripeCrossingThisTile = ({ address }) => {
	const { initial, delta } = state.stripeCountConfig.ginghamChevronContinuum

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const thisStripe = mathUtilities.termialRoot({ initial, delta, n }) * 2
		if (thisStripe > address[ 0 ] + address[ 1 ]) return thisStripe
	}
}

//yeah, but this just assumes you've only got two colors...
// i guess i just need a similar tool which has the pattern-level set
