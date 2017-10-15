import { Address } from '../../../../src'

const getDistanceFromHomeAddress: {({}: { gridAddress: Address }): number} = ({ gridAddress }) =>
	gridAddress.reduce((a, b) => Math.abs(a) + Math.abs(b), 0)

export default getDistanceFromHomeAddress
