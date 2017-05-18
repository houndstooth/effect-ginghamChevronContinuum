import render from '../../shared/render/render'
import calculateHarmonicShrinkingStripeCoordinates from '../utilities/calculateHarmonicShrinkingStripeCoordinates'
import maybeRotateStripe from '../../shared/utilities/maybeRotateStripe'

export default ({ sizedUnit, center, origin, rotationAboutCenter, rotationAboutOrigin, originColor, otherColor, harmonicShrinkingStripes }) => {
	harmonicShrinkingStripes.forEach((curModulus, index) => {
		const color = index % 2 === 0 ? originColor : otherColor

		let nextModulus = harmonicShrinkingStripes[ index + 1 ] || 2

		let coordinates = calculateHarmonicShrinkingStripeCoordinates({
			curModulus,
			nextModulus,
			sizedUnit,
			origin
		})
		coordinates = maybeRotateStripe({ coordinates, center, origin, rotationAboutCenter, rotationAboutOrigin })

		render({ color, coordinates})
	})
}