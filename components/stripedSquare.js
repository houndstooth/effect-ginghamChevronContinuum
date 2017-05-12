import { SQUARE_SIZE } from '../../shared/common/customize'
import render from '../../shared/render/render'

let color = "BLACK";
const switchColor = () => {
	color = color == "BLACK" ? "WHITE" : "BLACK";
}

export default ({ x, y, thisDiagonalsStripeEdgeModuli }) => {
	thisDiagonalsStripeEdgeModuli.forEach((curModulus, index) => {
		switchColor();
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

	if (thisDiagonalsStripeEdgeModuli.length % 2 == 0) switchColor();
}