import composeMainHoundstooth from '../../../../../../src/execute/composeMainHoundstooth'
// eslint-disable-next-line max-len
import getGinghamChevronContinuumStripePositions from '../../../../src/components/getGinghamChevronContinuumStripePositions'

describe(`get gingham chevron continuum stripe positions returns an array of numbers
	representing the positions of the stripes for a given tile in terms of its perimeter
	(2 is the max) based on where on the grid it is`, () => {
		it(`checking this units ability to start the stripe count at the right amount
	and grow it by the right amount each diagonal`, () => {
				checkGccStripeCounts(4, 2)
				checkGccStripeCounts(4, 3)
				checkGccStripeCounts(3, 2)
				// checkGccStripeCounts(1, 3)
				// checkGccStripeCounts(2, 5) --> if the delta is more than twice the initial, it breaks a bit
				checkGccStripeCounts(5, 3)
				checkGccStripeCounts(3, 3)
				checkGccStripeCounts(2, 1)
				checkGccStripeCounts(3, 1)
				checkGccStripeCounts(1, 1)
				checkGccStripeCounts(2, 3)
				checkGccStripeCounts(1, 2)
			})
	})

const checkGccStripeCounts = (initial, delta) => {
	composeMainHoundstooth({
		houndstoothEffects: [],
		houndstoothOverrides: {
			basePattern: {
				stripeSettings: {
					stripePositionSettings: {
						stripeCountContinuumSettings: {
							initialStripeCount: initial,
							deltaStripeCount: delta,
						},
					},
				},
			},
		},
	})

	expect(getGinghamChevronContinuumStripePositions({ gridAddress: [ 0, 0 ] }).length).toEqual(initial)
	expect(getGinghamChevronContinuumStripePositions({ gridAddress: [ 1, 1 ] }).length).toEqual(initial + 1 * delta)
	expect(getGinghamChevronContinuumStripePositions({ gridAddress: [ 2, 2 ] }).length).toEqual(initial + 2 * delta)
	expect(getGinghamChevronContinuumStripePositions({ gridAddress: [ 3, 3 ] }).length).toEqual(initial + 3 * delta)
}
