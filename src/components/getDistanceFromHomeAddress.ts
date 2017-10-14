import { Address } from '../../../../src'

const getDistanceFromHomeAddress: {({}: { gridAddress: Address }): number} = ({ gridAddress }) => {
	return gridAddress.reduce((a, b) => Math.abs(a) + Math.abs(b), 0)
}

export default getDistanceFromHomeAddress
