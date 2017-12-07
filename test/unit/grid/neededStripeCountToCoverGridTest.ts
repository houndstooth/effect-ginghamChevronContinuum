import { setPatternStateForTest } from '../../../../../test'
import { neededStripeCountToCoverGrid } from '../../../pattern'

describe('needed stripe count to cover grid', () => {
	it('makes sure just enough gcc stripes are calculated to make it across the grid', () => {
		const initialStripeCount: number = 400
		const deltaStripeCount: number = 67
		const tileResolution: number = 5
		const triangularNumberOfTileResolution: number = 1 + 2 + 3 + 4 + 5

		setPatternStateForTest('tileResolution', tileResolution)
		setPatternStateForTest('deltaStripeCount', deltaStripeCount)
		setPatternStateForTest('initialStripeCount', initialStripeCount)

		const expectedStripeCount: number = initialStripeCount + deltaStripeCount * triangularNumberOfTileResolution
		expect(neededStripeCountToCoverGrid.default()).toBe(expectedStripeCount)
	})
})
