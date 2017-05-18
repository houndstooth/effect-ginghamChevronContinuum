import { COLOR_A, COLOR_B, UNIT } from '../../shared/common/customize'
import render from '../../shared/render/render'
import scalePoint from '../../shared/utilities/scalePoint'

// what is up with this file ??????????????????????????

export default ({ origin, size, thisDiagonalsStripeEdgeModuli, originColor }) => {
	origin = scalePoint({ point: origin })
	const sizedUnit = size * UNIT

	thisDiagonalsStripeEdgeModuli.forEach((curModulus, index) => {
		const otherColor = originColor === COLOR_A ? COLOR_B : COLOR_A
		// this seems like the opposite of what it should be
		// but maybe that's because the moduli array always starts with a 0 in it?
		const color = index % 2 === 1 ? originColor : otherColor

		const nextModulus = thisDiagonalsStripeEdgeModuli[ index + 1 ] || 2

		const coordinates = [
			[
				origin[ 0 ] + curModulus * sizedUnit,
				origin[ 1 ]
			],
			[
				origin[ 0 ] + nextModulus * sizedUnit,
				origin[ 1 ]
			],
			[
				origin[ 0 ],
				origin[ 1 ] + nextModulus * sizedUnit
			],
			[
				origin[ 0 ],
				origin[ 1 ] + curModulus * sizedUnit
			]
		]

		render({ color, coordinates })
	})
}