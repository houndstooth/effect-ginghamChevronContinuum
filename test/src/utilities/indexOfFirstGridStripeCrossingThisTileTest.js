import indexOfFirstGridStripeCrossingThisTile from '../../../src/utilities/indexOfFirstGridStripeCrossingThisTile'
import store from '../../../../../store'
import resetStore from '../../../../../test/helpers/resetStore'
import composeMainHoundstooth from '../../../../../src/store/composeMainHoundstooth'

describe('index of first grid stripe crossing this tile', () => {
	beforeEach(() => resetStore(store))

	it('an example', () => {
		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountContinuumSettings: {
								initialStripeCount: 1,
								deltaStripeCount: 1,
							},
						},
					},
				},
			},
		})

		expect(indexOfFirstGridStripeCrossingThisTile({ gridAddress: [1, 5] })).toBe(1 + 2 + 3 + 1)
	})

	it('another example', () => {
		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountContinuumSettings: {
								initialStripeCount: 4,
								deltaStripeCount: 7,
							},
						},
					},
				},
			},
		})

		expect(indexOfFirstGridStripeCrossingThisTile({ gridAddress: [1, 5] })).toBe(4 + (4 + 7) + (4 + 7 + 7) + 1)
	})
})