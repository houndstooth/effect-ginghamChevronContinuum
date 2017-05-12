import { SQUARE_SIZE } from '../../shared/common/customize'
import render from '../../shared/render/render'

export default ({ x, y, thisDiagonalsStripeEdgeModuli, originColor }) => {
	thisDiagonalsStripeEdgeModuli.forEach((curModulus, index) => {
		const otherColor = originColor == "BLACK" ? "WHITE" : "BLACK"
		// this seems like the opposite of what it should be
		// but maybe that's because the moduli array always starts with a 0 in it?
		const color = index % 2 == 1 ? originColor : otherColor

		const nextModulus = thisDiagonalsStripeEdgeModuli[ index + 1 ] || 2;

		const coordinates = [
			[
				(x + curModulus) * SQUARE_SIZE,
				y * SQUARE_SIZE
			],
			[
				(x + nextModulus) * SQUARE_SIZE,
				y * SQUARE_SIZE
			],
			[
				x * SQUARE_SIZE,
				(y + nextModulus) * SQUARE_SIZE
			],
			[
				x * SQUARE_SIZE,
				(y + curModulus) * SQUARE_SIZE
			]
		]

		render({ color, coordinates })
	})
}