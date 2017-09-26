import indexOfFirstGridStripeCrossingThisTile from '../../../../src/components/indexOfFirstGridStripeCrossingThisTile'
import state from '../../../../../../src/state'
import resetState from '../../../../../../src/store/resetState'
import composeMainHoundstooth from '../../../../../../src/execute/composeMainHoundstooth'

describe('index of first grid stripe crossing this tile', () => {
	beforeEach(() => resetState(state))

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

		expect(indexOfFirstGridStripeCrossingThisTile({ gridAddress: [ 1, 5 ] })).toBe(1 + 2 + 3 + 1)
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

		expect(indexOfFirstGridStripeCrossingThisTile({ gridAddress: [ 1, 5 ] })).toBe(4 + (4 + 7) + (4 + 7 + 7) + 1)
	})
})
