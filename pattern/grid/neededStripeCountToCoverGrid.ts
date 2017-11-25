import { mathUtilities } from '../../../../src'
// tslint:disable-next-line:no-reaching-imports
import { main as getFromBaseOrDefaultPattern } from '../../../../src/app/store/getFromBaseOrDefaultPattern'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const initialStripeCount: number = getFromBaseOrDefaultPattern('initialStripeCount')
		const deltaStripeCount: number = getFromBaseOrDefaultPattern('deltaStripeCount')

		const tileResolution: number = getFromBaseOrDefaultPattern('tileResolution')

		return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(tileResolution)
	}

export { neededStripeCountToCoverGrid as main }
