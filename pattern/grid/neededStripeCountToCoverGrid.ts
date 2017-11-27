import { getSetting, mathUtilities } from '../../../../src'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const initialStripeCount: number = getSetting.main('initialStripeCount')
		const deltaStripeCount: number = getSetting.main('deltaStripeCount')
		const tileResolution: number = getSetting.main('tileResolution')

		return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(tileResolution)
	}

export { neededStripeCountToCoverGrid as main }
