// tslint:disable:max-line-length

import { mathUtilities, patternState } from '../../../../src'

const neededStripeCountToCoverGrid: () => number =
	(): number => {
		const initialStripeCount: number = patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings.initialStripeCount
		const deltaStripeCount: number = patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings.deltaStripeCount
		const tileResolution: number = patternState.gridSettings.tileResolution

		return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(tileResolution)
	}

export default neededStripeCountToCoverGrid
