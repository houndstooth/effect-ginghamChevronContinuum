import indexOfFirstStripeCrossingThisTile from '../../../../src/components/indexOfFirstStripeCrossingThisTile'
import composeMainHoundstooth from '../../../../../../src/execute/composeMainHoundstooth'
import Address from '../../../../../../src/components/types/Address'

describe('index of first grid stripe crossing this tile', () => {
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

		const actual = indexOfFirstStripeCrossingThisTile({ gridAddress: [ 1, 5 ] as Address })
		expect(actual).toBe(1 + 2 + 3 + 1)
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

		const actual = indexOfFirstStripeCrossingThisTile({ gridAddress: [ 1, 5 ] as Address })
		expect(actual).toBe(4 + (4 + 7) + (4 + 7 + 7) + 1)
	})
})
