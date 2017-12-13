import { Address, from } from '../../../../src'

const getDistanceFromHomeAddress: (_: { address: Address }) => number =
	({ address }: { address: Address }): number =>
		from.Address(address).reduce((a: number, b: number): number => Math.abs(a) + Math.abs(b), 0)

export default getDistanceFromHomeAddress
