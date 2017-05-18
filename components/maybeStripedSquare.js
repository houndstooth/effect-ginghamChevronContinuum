import ctx from '../../shared/render/ctx'
import { COLOR_A, COLOR_B, SQUARE_SIZE } from '../../shared/common/customize'

export default ({x, y, stripes}) => {
	if (x % 2 === 0 && y % 2 === 0) {
		stripedSquare(stripes, COLOR_A, x, y)
	} else if (x % 2 === 1 && y % 2 === 1) {
		stripedSquare(stripes, COLOR_B, x, y)
	}
}

function stripedSquare(stripes, color, x, y) {
	stripes.forEach((curModulus, index) => {
		ctx.fillStyle = color
		let nextModulus = stripes[ index + 1 ] || 2
		ctx.beginPath()
		ctx.moveTo((x + curModulus) * SQUARE_SIZE, y * SQUARE_SIZE)
		ctx.lineTo((x + nextModulus) * SQUARE_SIZE, y * SQUARE_SIZE)
		ctx.lineTo(x * SQUARE_SIZE, (y + nextModulus) * SQUARE_SIZE)
		ctx.lineTo(x * SQUARE_SIZE, (y + curModulus) * SQUARE_SIZE)
		ctx.closePath()
		ctx.fill()
		color = color === COLOR_A ? COLOR_B : COLOR_A
	})
}