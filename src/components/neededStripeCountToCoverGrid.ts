import { getFromBaseOrDefaultPattern, StripeCountContinuumSettings } from '../../../../src'
import { triangularNumber } from '../../../../src/utilities/mathUtilities'

const neededStripeCountToCoverGrid: () => number = () => {
	const {
		initialStripeCount,
		deltaStripeCount,
	}: StripeCountContinuumSettings = getFromBaseOrDefaultPattern('stripeCountContinuum')
	const gridSize: number = getFromBaseOrDefaultPattern('gridSize')

	return initialStripeCount + deltaStripeCount * triangularNumber(gridSize)
}

export { neededStripeCountToCoverGrid }
