// tslint:disable:max-line-length

import { GetStripePositions, patternState, StripePosition, to } from '../../../../../src/indexForTest'
import { getGinghamChevronContinuumStripePositions, neededStripeCountToCoverGrid } from '../../../pattern'

const subject: GetStripePositions = getGinghamChevronContinuumStripePositions.default

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

	it('edge case', () => {
		spyOn(neededStripeCountToCoverGrid, 'default').and.returnValue(0)

		const actual: StripePosition[] = subject({ gridAddress: to.Address([ 1, 5 ]) })
		expect(actual).toEqual(to.StripePositions([ 0 ]))
	})
})

const expectGccStripeCounts: (_: number, __: number) => void =
	(initialStripeCount: number, deltaStripeCount: number): void => {
		patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings = {
			deltaStripeCount,
			initialStripeCount,
		}

		expect(subject({
			gridAddress: to.Address([ 0, 0 ]),
		}).length).toEqual(initialStripeCount)
		expect(subject({
			gridAddress: to.Address([ 1, 1 ]),
		}).length).toEqual(initialStripeCount + deltaStripeCount * 1)
		expect(subject({
			gridAddress: to.Address([ 2, 2 ]),
		}).length).toEqual(initialStripeCount + deltaStripeCount * 2)
		expect(subject({
			gridAddress: to.Address([ 3, 3 ]),
		}).length).toEqual(initialStripeCount + deltaStripeCount * 3)
	}
