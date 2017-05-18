export default ({ curModulus, nextModulus, sizedUnit, origin }) => {
	let coordinates = []

	// this does not yet support "trapezoiding" off the corners and right edge
	// but i wrote it this "push" way to support putting into if/else like the standard calculateStripeCoordinates does
	coordinates.push([
		origin[ 0 ] + curModulus * sizedUnit,
		origin[ 1 ]
	])
	coordinates.push([
		origin[ 0 ] + nextModulus * sizedUnit,
		origin[ 1 ]
	])
	coordinates.push([
		origin[ 0 ],
		origin[ 1 ] + nextModulus * sizedUnit
	])
	coordinates.push([
		origin[ 0 ],
		origin[ 1 ] + curModulus * sizedUnit
	])

	return coordinates
}
