import { getFromBaseOrDefaultPattern, mathUtilities } from '../../../../src'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const initialStripeCount: number = getFromBaseOrDefaultPattern.main('initialStripeCount')
		const deltaStripeCount: number = getFromBaseOrDefaultPattern.main('deltaStripeCount')
		const tileResolution: number = getFromBaseOrDefaultPattern.main('tileResolution')

		return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(tileResolution)
	}

export { neededStripeCountToCoverGrid as main }
