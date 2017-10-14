import getDistanceFromHomeAddress from '../../../../src/components/getDistanceFromHomeAddress'

describe('get distance from home address', () => {
	it('gives the distance, in address positions, from grid address 0, 0', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: [ 0, 0 ] })).toBe(0)
		expect(getDistanceFromHomeAddress({ gridAddress: [ 3, 0 ] })).toBe(3)
		expect(getDistanceFromHomeAddress({ gridAddress: [ 0, 5 ] })).toBe(5)
		expect(getDistanceFromHomeAddress({ gridAddress: [ 2, 7 ] })).toBe(9)
	})

	it('works for addresses of more than 2 dimensions', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: [ 1, 2, 3 ] })).toBe(6)
	})

	it('gives absolute distance, so it works for addresses with negative values', () => {
		expect(getDistanceFromHomeAddress({ gridAddress: [ -3, -2 ] })).toBe(5)
		expect(getDistanceFromHomeAddress({ gridAddress: [ -3, 2 ] })).toBe(5)
	})
})