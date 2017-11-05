import { getFromBaseOrDefaultPattern, StripeCountContinuumSettings } from '../../../../src'
import { triangularNumber } from '../../../../src/utilities/mathUtilities'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const {
			initialStripeCount,
			deltaStripeCount,
		}: StripeCountContinuumSettings = getFromBaseOrDefaultPattern('stripeCountContinuumSettings')

		const tileResolution: number = getFromBaseOrDefaultPattern('tileResolution')

		return initialStripeCount + deltaStripeCount * triangularNumber(tileResolution)
	}

export { neededStripeCountToCoverGrid }
