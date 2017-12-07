import { mathUtilities, patternState } from '../../../../src'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const initialStripeCount: number = patternState.get('initialStripeCount')
		const deltaStripeCount: number = patternState.get('deltaStripeCount')
		const tileResolution: number = patternState.get('tileResolution')

		return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(tileResolution)
	}

export default neededStripeCountToCoverGrid
