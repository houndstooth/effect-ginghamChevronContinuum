import { SQUARE_SIZE } from '../../shared/common/customize'
import tile from '../../shared/components/tile'
import calculateColors from '../../shared/utilities/calculateColors'

export default ({ x, y, options }) => {
	if (x % 2 !== 0 || y % 2 !== 0) return

	const { originColor, otherColor } = calculateColors({ x, y })
	const origin = [ x * SQUARE_SIZE, y * SQUARE_SIZE ]
	const size = SQUARE_SIZE

	tile({ origin, size, originColor, otherColor, options })
}
