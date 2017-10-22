import { Address, from } from '../../../../src'

const getDistanceFromHomeAddress: (_: { gridAddress: Address[] }) => number = ({ gridAddress }) =>
	from.Address(gridAddress).reduce((a, b) =>
		Math.abs(a) + Math.abs(b), 0)

export { getDistanceFromHomeAddress }
