import getDistanceFromZeroZeroAddress from '../../../src/components/getDistanceFromZeroZeroAddress'

describe('get distance from zero-zero address', () => {
	it('gives the distance, in address positions, from grid address 0, 0', () => {
		expect(getDistanceFromZeroZeroAddress({ gridAddress: [ 0, 0 ] })).toBe(0)
		expect(getDistanceFromZeroZeroAddress({ gridAddress: [ 3, 0 ] })).toBe(3)
		expect(getDistanceFromZeroZeroAddress({ gridAddress: [ 0, 5 ] })).toBe(5)
		expect(getDistanceFromZeroZeroAddress({ gridAddress: [ 2, 7 ] })).toBe(9)
	})

	it('works for addresses of more than 2 dimensions', () => {
		expect(getDistanceFromZeroZeroAddress({ gridAddress: [ 1, 2, 3 ] })).toBe(6)
	})

	it('gives absolute distance, so it works for addresses with negative values', () => {
		expect(getDistanceFromZeroZeroAddress({ gridAddress: [ -3, -2 ] })).toBe(5)
		expect(getDistanceFromZeroZeroAddress({ gridAddress: [ -3, 2 ] })).toBe(5)
	})
})
