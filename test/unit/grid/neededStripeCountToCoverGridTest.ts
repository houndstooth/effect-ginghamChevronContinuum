import { patternState } from '../../../../../src/pattern/patternState'
import { neededStripeCountToCoverGrid } from '../../../pattern'

const subject: () => number = neededStripeCountToCoverGrid.default

describe('needed stripe count to cover grid', () => {
	it('makes sure just enough gcc stripes are calculated to make it across the grid', () => {
		const initialStripeCount: number = 400
		const deltaStripeCount: number = 67
		const tileResolution: number = 5
		const triangularNumberOfTileResolution: number = 1 + 2 + 3 + 4 + 5

		patternState.gridSettings.tileResolution = tileResolution
		patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings = {
			deltaStripeCount,
			initialStripeCount,
		}

		const expectedStripeCount: number = initialStripeCount + deltaStripeCount * triangularNumberOfTileResolution
		expect(subject()).toBe(expectedStripeCount)
	})
})
