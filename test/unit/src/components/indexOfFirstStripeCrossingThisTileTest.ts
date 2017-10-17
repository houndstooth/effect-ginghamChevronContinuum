import Address from '../../../../../../src/components/types/Address'
import composeMainHoundstooth from '../../../../../../src/execute/composeMainHoundstooth'
import indexOfFirstStripeCrossingThisTile from '../../../../src/components/indexOfFirstStripeCrossingThisTile'

describe('index of first grid stripe crossing this tile', () => {
	it('an example', () => {
		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountContinuumSettings: {
								deltaStripeCount: 1,
								initialStripeCount: 1,
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
								deltaStripeCount: 7,
								initialStripeCount: 4,
							},
						},
					},
				},
			},
		})

		const actual = indexOfFirstStripeCrossingThisTile({ gridAddress: [ 1, 5 ] as Address })
		// tslint:disable-next-line:binary-expression-operand-order
		expect(actual).toBe(4 + (4 + 7) + (4 + 7 + 7) + 1)
	})
})
