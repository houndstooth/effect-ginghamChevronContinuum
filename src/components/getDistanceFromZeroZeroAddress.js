export default ({ gridAddress }) => {
	return gridAddress.reduce((a, b) => Math.abs(a) + Math.abs(b), 0)
}
