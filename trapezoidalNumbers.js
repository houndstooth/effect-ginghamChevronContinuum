const trapezoidalNumber = ({ initial, delta, n }) => {
	return ( 4 * Math.pow(delta, 2) * Math.pow(n, 2) + 8 * delta * n * initial - 4 * Math.pow(delta, 2) * n + 2 * Math.pow(initial, 2) ) / ( 8 * delta )
}

const trapezoidalRoot = ({ initial, delta, n }) => {
	return ( Math.sqrt(Math.pow(2 * initial - delta, 2) + 8 * delta * n) - 2 * initial + delta ) / ( 2 * delta )
}

export default {
	trapezoidalNumber,
	trapezoidalRoot
}
