// tslint:disable:max-line-length

import { composeMainHoundstooth } from '../../../../../../src/execute/composeMainHoundstooth'
import * as to from '../../../../../../src/utilities/to'
import { getGinghamChevronContinuumStripePositions } from '../../../../src/components/getGinghamChevronContinuumStripePositions'

describe('get gingham chevron continuum stripe positions returns an array of numbers representing the positions of the stripes for a given tile in terms of its perimeter (2 is the max) based on where on the grid it is', () => {
	it('expecting this units ability to start the stripe count at the right amount and grow it by the right amount each diagonal', () => {
		expectGccStripeCounts(4, 2)
		expectGccStripeCounts(4, 3)
		expectGccStripeCounts(3, 2)
		// If the delta is more than twice the initial, it breaks a bit: expectGccStripeCounts(1, 3)
		// If the delta is more than twice the initial, it breaks a bit: expectGccStripeCounts(2, 5)
		expectGccStripeCounts(5, 3)
		expectGccStripeCounts(3, 3)
		expectGccStripeCounts(2, 1)
		expectGccStripeCounts(3, 1)
		expectGccStripeCounts(1, 1)
		expectGccStripeCounts(2, 3)
		expectGccStripeCounts(1, 2)
	})
})

const expectGccStripeCounts: (initial: number, delta: number) => void = (initial, delta) => {
	composeMainHoundstooth({
		houndstoothEffects: [],
		houndstoothOverrides: {
			basePattern: {
				stripeSettings: {
					stripePositionSettings: {
						stripeCountContinuumSettings: {
							deltaStripeCount: delta,
							initialStripeCount: initial,
						},
					},
				},
			},
		},
	})

	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: to.Address([ 0, 0 ]),
	}).length).toEqual(initial)
	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: to.Address([ 1, 1 ]),
	}).length).toEqual(initial + delta * 1)
	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: to.Address([ 2, 2 ]),
	}).length).toEqual(initial + delta * 2)
	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: to.Address([ 3, 3 ]),
	}).length).toEqual(initial + delta * 3)
}
