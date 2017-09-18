import { triangularNumber } from '../../../../src/utilities/mathUtilities'
import state from '../../../../state'

export default () => {
	const { stripeSettings, gridSettings } = state.mainHoundstooth.basePattern
	const { initialStripeCount, deltaStripeCount } = stripeSettings.stripePositionSettings.stripeCountContinuumSettings
	return initialStripeCount + deltaStripeCount * triangularNumber(gridSettings.gridSize)
}
