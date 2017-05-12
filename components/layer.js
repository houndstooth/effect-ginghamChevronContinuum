import stripedSquare from './stripedSquare'
import iterator from '../../shared/utilities/iterator'

export default ({ thisDiagonalsStripeEdgeModuli, countOfSquaresInThisLayer, originColor }) => {
	// unclear why this + 1 works but oneIndexed option does not
	iterator(countOfSquaresInThisLayer + 1, { countDown: true }).forEach(x => {
		stripedSquare({ x, y: countOfSquaresInThisLayer - x, thisDiagonalsStripeEdgeModuli, originColor })
	})
}