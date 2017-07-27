import store from '../../../../../store'
import resetStore from '../../../../../test/helpers/resetStore'
import composeMainHoundstooth from '../../../../../src/store/composeMainHoundstooth'
import neededStripeCountToCoverGrid from '../../../src/utilities/neededStripeCountToCoverGrid'

describe('needed stripe count to cover grid', () => {
	beforeEach(() => resetStore(store))

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
							ginghamChevronContinuumSettings: {
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
