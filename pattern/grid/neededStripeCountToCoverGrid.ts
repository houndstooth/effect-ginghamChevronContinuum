import { getSetting, mathUtilities } from '../../../../src'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const initialStripeCount: number = getSetting.default('initialStripeCount')
		const deltaStripeCount: number = getSetting.default('deltaStripeCount')
		const tileResolution: number = getSetting.default('tileResolution')

		return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(tileResolution)
	}

export default neededStripeCountToCoverGrid
