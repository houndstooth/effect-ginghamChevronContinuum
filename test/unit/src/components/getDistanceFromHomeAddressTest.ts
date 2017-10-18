import { Address } from '../../../../../../src/components/types/Address'
import { getDistanceFromHomeAddress } from '../../../../src/components/getDistanceFromHomeAddress'

describe('get distance from home address', () => {
	it('gives the distance, in address positions, from grid address 0, 0', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: [ 0, 0 ] as Address })).toBe(0)
		expect(getDistanceFromHomeAddress({ gridAddress: [ 3, 0 ] as Address })).toBe(3)
		expect(getDistanceFromHomeAddress({ gridAddress: [ 0, 5 ] as Address })).toBe(5)
		expect(getDistanceFromHomeAddress({ gridAddress: [ 2, 7 ] as Address })).toBe(9)
	})

	it('works for addresses of more than 2 dimensions', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: [ 1, 2, 3 ] as Address })).toBe(6)
	})

	it('gives absolute distance, so it works for addresses with negative values', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: [ -3, -2 ] as Address })).toBe(5)
		expect(getDistanceFromHomeAddress({ gridAddress: [ -3, 2 ] as Address })).toBe(5)
	})
})
