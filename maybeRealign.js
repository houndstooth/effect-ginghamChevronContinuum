import neededStripeCountToCoverGrid from './neededStripeCountToCoverGrid'
import state from '../shared/state/state'
import trapezoidalNumbers from './trapezoidalNumbers'

export default ({ setForTile, address }) => {
	const { initial, delta } = state.shared.stripeCountConfig.ginghamChevronContinuum

	for (let n = 0; n < neededStripeCountToCoverGrid(); n++) {
		const thisStripe = trapezoidalNumbers.trapezoidalRoot({ initial, delta, n }) * 2
		if (thisStripe > address[ 0 ] + address[ 1 ]) {
			if (n % 2 === 1) {
				return setForTile.reverse()
			} else {
				return setForTile
			}
		}
	}

	return setForTile
}
