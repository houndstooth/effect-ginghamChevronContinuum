import { mathUtilities } from '../../../../src'
import { getFromBaseOrDefaultPattern } from '../../../../src/app/store/getFromBaseOrDefaultPattern'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const initialStripeCount: number = getFromBaseOrDefaultPattern('initialStripeCount')
		const deltaStripeCount: number = getFromBaseOrDefaultPattern('deltaStripeCount')

		const tileResolution: number = getFromBaseOrDefaultPattern('tileResolution')

		return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(tileResolution)
	}

export { neededStripeCountToCoverGrid }
