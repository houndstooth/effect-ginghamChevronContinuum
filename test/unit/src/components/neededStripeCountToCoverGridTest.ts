import { composeMainHoundstooth } from '../../../../../../src/execute/composeMainHoundstooth'
import { neededStripeCountToCoverGrid } from '../../../../src/components/neededStripeCountToCoverGrid'

describe('needed stripe count to cover grid', () => {
	it('makes sure just enough gcc stripes are calculated to make it across the grid', () => {
		const initialStripeCount: number = 400
		const deltaStripeCount: number = 67
		const gridSize: number = 5
		const triangularNumberOfGridSize: number = 1 + 2 + 3 + 4 + 5

		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					gridSettings: {
						gridSize,
					},
					stripeSettings: {
						stripePositionSettings: {
							stripeCountContinuumSettings: {
								deltaStripeCount,
								initialStripeCount,
							},
						},
					},
				},
			},
		})

		expect(neededStripeCountToCoverGrid()).toBe(initialStripeCount + deltaStripeCount * triangularNumberOfGridSize)
	})
})
