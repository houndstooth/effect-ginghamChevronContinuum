import { composeMainHoundstooth } from '../../../../../../src/execute/composeMainHoundstooth'
import { neededStripeCountToCoverGrid } from '../../../../src/components/neededStripeCountToCoverGrid'

describe('needed stripe count to cover grid', () => {
	it('makes sure just enough gcc stripes are calculated to make it across the grid', () => {
		const initialStripeCount: number = 400
		const deltaStripeCount: number = 67
		const tileResolution: number = 5
		const triangularNumberOfTileResolution: number = 1 + 2 + 3 + 4 + 5

		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					gridSettings: {
						tileResolution,
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

		expect(neededStripeCountToCoverGrid()).toBe(initialStripeCount + deltaStripeCount * triangularNumberOfTileResolution)
	})
})
