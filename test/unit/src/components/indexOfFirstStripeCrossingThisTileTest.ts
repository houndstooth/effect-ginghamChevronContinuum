import { composeMainHoundstooth } from '../../../../../../src/execute/composeMainHoundstooth'
import * as to from '../../../../../../src/utilities/to'
import { indexOfFirstStripeCrossingThisTile } from '../../../../src/components/indexOfFirstStripeCrossingThisTile'
import * as neededStripeCountToCoverGrid from '../../../../src/components/neededStripeCountToCoverGrid'

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

		const actual: number = indexOfFirstStripeCrossingThisTile({ gridAddress: to.Address([ 1, 5 ]) })
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

		const actual: number = indexOfFirstStripeCrossingThisTile({ gridAddress: to.Address([ 1, 5 ]) })
		// tslint:disable-next-line:binary-expression-operand-order
		expect(actual).toBe(4 + (4 + 7) + (4 + 7 + 7) + 1)
	})

	it('edge case', () => {
		spyOn(neededStripeCountToCoverGrid, 'neededStripeCountToCoverGrid').and.returnValue(0)

		const actual: number = indexOfFirstStripeCrossingThisTile({ gridAddress: to.Address([ 1, 5 ]) })
		expect(actual).toBe(0)
	})
})
