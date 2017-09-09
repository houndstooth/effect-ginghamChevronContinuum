import state from '../../../../../state'
import resetState from '../../../../../src/store/resetState'
import composeMainHoundstooth from '../../../../../src/execute/composeMainHoundstooth'
import neededStripeCountToCoverGrid from '../../../src/utilities/neededStripeCountToCoverGrid'

describe('needed stripe count to cover grid', () => {
	beforeEach(() => resetState(state))

	it('makes sure just enough gcc stripes are calculated to make it across the grid', () => {
		const initialStripeCount = 400
		const deltaStripeCount = 67
		const gridSize = 5
		const triangularNumberOfGridSize = 1 + 2 + 3 + 4 + 5
		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountContinuumSettings: {
								initialStripeCount,
								deltaStripeCount,
							},
						},
					},
					gridSettings: {
						gridSize,
					},
				},
			},
		})

		expect(neededStripeCountToCoverGrid()).toBe(initialStripeCount + deltaStripeCount * triangularNumberOfGridSize)
	})
})
