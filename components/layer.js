import stripedSquare from './stripedSquare'
import iterator from '../../shared/utilities/iterator'

export default ({ thisDiagonalsStripeEdgeModuli, diagonal }) => {
	iterator(diagonal + 1, { countDown: true }).forEach(x => {
		stripedSquare({ x, y: diagonal - x, thisDiagonalsStripeEdgeModuli })
	})
}