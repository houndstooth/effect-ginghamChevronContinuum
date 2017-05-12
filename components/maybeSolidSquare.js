import { COLOR_A, COLOR_B, SQUARE_SIZE } from '../../shared/common/customize'
import drawSolidSquare from '../../shared/render/drawSolidSquare'

export default ({x, y}) => {
	if (x % 2 != 0 && y % 2 == 0) {
		drawSolidSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			color: COLOR_A
		})
	}
	if (x % 2 == 0 && y % 2 != 0) {
		drawSolidSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			color: COLOR_B
		})
	}
}