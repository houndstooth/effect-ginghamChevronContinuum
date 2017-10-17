import { state } from '../../../../src'
import { triangularNumber } from '../../../../src/utilities/mathUtilities'

const neededStripeCountToCoverGrid: { (): number } = () => {
	const basePattern = state.mainHoundstooth.basePattern || {}
	const stripeSettings = basePattern.stripeSettings || {}
	const gridSettings = basePattern.gridSettings || {}

	const stripePositionSettings = stripeSettings.stripePositionSettings || {}
	const stripeCountContinuumSettings = stripePositionSettings.stripeCountContinuumSettings || {}
	const { initialStripeCount = 0, deltaStripeCount = 0 } = stripeCountContinuumSettings

	return initialStripeCount + deltaStripeCount * triangularNumber(gridSettings.gridSize || 0)
}

export default neededStripeCountToCoverGrid
