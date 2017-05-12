import stripedSquare from '../render/stripedSquare'
import iterator from '../../shared/utilities/iterator'
import { SQUARE_SIZE } from '../../shared/common/customize'

export default ({ thisDiagonalsStripeEdgeModuli, countOfSquaresInThisLayer, originColor }) => {
	// unclear why this + 1 works but oneIndexed option does not
	iterator(countOfSquaresInThisLayer + 1, { countDown: true }).forEach(x => {
		const y = countOfSquaresInThisLayer - x
		stripedSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			thisDiagonalsStripeEdgeModuli,
			originColor
		})
	})
}