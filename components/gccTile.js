import tile from '../../shared/components/tile'
import { CONTINUUM_STARTS_AT_STRIPE_COUNT, STRIPE_COUNT_INCREASES_BY_X_EACH_DIAGONAL } from '../common/customize'

export default ({ origin }) => {
	const stripeCount = Math.floor(
		((origin[ 0 ] + origin[ 1 ] + (CONTINUUM_STARTS_AT_STRIPE_COUNT * 2)) * STRIPE_COUNT_INCREASES_BY_X_EACH_DIAGONAL / 2)
		- (CONTINUUM_STARTS_AT_STRIPE_COUNT * (STRIPE_COUNT_INCREASES_BY_X_EACH_DIAGONAL - 1))
	)

	tile({ origin, stripeCount })
}