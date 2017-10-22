import * as to from '../../../../../../src/utilities/to'
import { getDistanceFromHomeAddress } from '../../../../src/components/getDistanceFromHomeAddress'

describe('get distance from home address', () => {
	it('gives the distance, in address positions, from grid address 0, 0', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: to.Address([ 0, 0 ]) })).toBe(0)
		expect(getDistanceFromHomeAddress({ gridAddress: to.Address([ 3, 0 ]) })).toBe(3)
		expect(getDistanceFromHomeAddress({ gridAddress: to.Address([ 0, 5 ]) })).toBe(5)
		expect(getDistanceFromHomeAddress({ gridAddress: to.Address([ 2, 7 ]) })).toBe(9)
	})

	it('works for addresses of more than 2 dimensions', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: to.Address([ 1, 2, 3 ]) })).toBe(6)
	})

	it('gives absolute distance, so it works for addresses with negative values', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: to.Address([ -3, -2 ]) })).toBe(5)
		expect(getDistanceFromHomeAddress({ gridAddress: to.Address([ -3, 2 ]) })).toBe(5)
	})
})
