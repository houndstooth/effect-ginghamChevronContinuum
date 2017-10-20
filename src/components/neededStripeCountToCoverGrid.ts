import { state } from '../../../../src'
import { triangularNumber } from '../../../../src/utilities/mathUtilities'

const neededStripeCountToCoverGrid: () => number = () => {
	const { stripeSettings: { stripePositionSettings }, gridSettings } = state.mainHoundstooth.basePattern
	const { initialStripeCount = 0, deltaStripeCount = 0 } = stripePositionSettings.stripeCountContinuumSettings

	return initialStripeCount + deltaStripeCount * triangularNumber(gridSettings.gridSize || 0)
}

export { neededStripeCountToCoverGrid }
