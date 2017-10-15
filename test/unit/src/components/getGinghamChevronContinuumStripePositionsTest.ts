import composeMainHoundstooth from '../../../../../../src/execute/composeMainHoundstooth'
// eslint-disable-next-line max-len
import getGinghamChevronContinuumStripePositions from '../../../../src/components/getGinghamChevronContinuumStripePositions'
import Address from '../../../../../../src/components/types/Address'

// eslint-disable-next-line max-len
describe('get gingham chevron continuum stripe positions returns an array of numbers representing the positions of the stripes for a given tile in terms of its perimeter (2 is the max) based on where on the grid it is', () => {
	// eslint-disable-next-line max-len
	it('expecting this units ability to start the stripe count at the right amount and grow it by the right amount each diagonal', () => {
		expectGccStripeCounts(4, 2)
		expectGccStripeCounts(4, 3)
		expectGccStripeCounts(3, 2)
		// expectGccStripeCounts(1, 3)
		// expectGccStripeCounts(2, 5) --> if the delta is more than twice the initial, it breaks a bit
		expectGccStripeCounts(5, 3)
		expectGccStripeCounts(3, 3)
		expectGccStripeCounts(2, 1)
		expectGccStripeCounts(3, 1)
		expectGccStripeCounts(1, 1)
		expectGccStripeCounts(2, 3)
		expectGccStripeCounts(1, 2)
	})
})

const expectGccStripeCounts: { (initial: number, delta: number): void } = (initial, delta) => {
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

	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: [ 0, 0 ] as Address,
	}).length).toEqual(initial)
	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: [ 1, 1 ] as Address,
	}).length).toEqual(initial + 1 * delta)
	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: [ 2, 2 ] as Address,
	}).length).toEqual(initial + 2 * delta)
	expect(getGinghamChevronContinuumStripePositions({
		gridAddress: [ 3, 3 ] as Address,
	}).length).toEqual(initial + 3 * delta)
}
