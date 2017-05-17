import { COLOR_A, COLOR_B, SQUARE_SIZE } from '../../shared/common/customize'
import drawStripedSquare from '../../shared/render/drawStripedSquare'

export default ({x, y}) => {
	if (x % 2 == 1 && y % 2 == 0) {
		drawStripedSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			originColor: COLOR_A,
			otherColor: COLOR_A
		})
	} else if (x % 2 == 0 && y % 2 == 1) {
		drawStripedSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			originColor: COLOR_B,
			otherColor: COLOR_B
		})
	}
}