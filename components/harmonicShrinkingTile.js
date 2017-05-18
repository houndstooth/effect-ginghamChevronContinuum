import { SQUARE_SIZE } from '../../shared/common/customize'
import tile from '../../shared/components/tile'
import calculateColors from '../../shared/utilities/calculateColors'

export default ({ x, y, options }) => {
	const { harmonicShrinkingStripes } = options
	const { originColor, otherColor } = calculateColors({ x, y })
	const origin = [ x * SQUARE_SIZE, y * SQUARE_SIZE ]
	const size = SQUARE_SIZE

	tile({ origin, size, originColor, otherColor, harmonicShrinkingStripes })
}
