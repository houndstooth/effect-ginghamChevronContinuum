import { Address, from } from '../../../../src'

const getDistanceFromHomeAddress: (_: { gridAddress: Address }) => number =
	({ gridAddress }: { gridAddress: Address }): number =>
		from.Address(gridAddress).reduce((a: number, b: number): number => Math.abs(a) + Math.abs(b), 0)

export { getDistanceFromHomeAddress }