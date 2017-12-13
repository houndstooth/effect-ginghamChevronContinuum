import { Address, to } from '../../../../../src/indexForTest'
import { getDistanceFromHomeAddress } from '../../../pattern'

describe('get distance from home address', () => {
	let subject: (_: { address: Address }) => number
	beforeEach(() => {
		subject = getDistanceFromHomeAddress.default
	})

	it('gives the distance, in address positions, from grid address 0, 0', () => {
		expect(subject({ address: to.Address([ 0, 0 ]) })).toBe(0)
		expect(subject({ address: to.Address([ 3, 0 ]) })).toBe(3)
		expect(subject({ address: to.Address([ 0, 5 ]) })).toBe(5)
		expect(subject({ address: to.Address([ 2, 7 ]) })).toBe(9)
	})

	it('works for addresses of more than 2 dimensions', () => {
		expect(subject({ address: to.Address([ 1, 2, 3 ]) })).toBe(6)
	})

	it('gives absolute distance, so it works for addresses with negative values', () => {
		expect(subject({ address: to.Address([ -3, -2 ]) })).toBe(5)
		expect(subject({ address: to.Address([ -3, 2 ]) })).toBe(5)
	})
})
