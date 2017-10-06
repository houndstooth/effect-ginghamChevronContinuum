const getDistanceFromHomeAddress = ({ gridAddress }) => {
	return gridAddress.reduce((a, b) => Math.abs(a) + Math.abs(b), 0)
}

export default getDistanceFromHomeAddress
