import tile from '../../shared/components/tile'
import state from '../../state'

export default ({ origin }) => {
    const { continuumStartsAtStripeCount, stripeCountIncreasePerDiagonal } = state.ginghamChevronContinuum
	const stripeCount = Math.floor(
		((origin[ 0 ] + origin[ 1 ] + (continuumStartsAtStripeCount * 2)) * stripeCountIncreasePerDiagonal / 2)
		- (continuumStartsAtStripeCount * (stripeCountIncreasePerDiagonal - 1))
	)

	tile({ origin, stripeCount })
}