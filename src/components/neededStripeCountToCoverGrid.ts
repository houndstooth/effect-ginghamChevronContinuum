import { getSetting, StripeCountContinuumSettings } from '../../../../src'
import { triangularNumber } from '../../../../src/utilities/mathUtilities'

const neededStripeCountToCoverGrid: () => number = () => {
	const { initialStripeCount, deltaStripeCount }: StripeCountContinuumSettings = getSetting('stripeCountContinuum')
	const gridSize: number = getSetting('gridSize')

	return initialStripeCount + deltaStripeCount * triangularNumber(gridSize)
}

export { neededStripeCountToCoverGrid }
