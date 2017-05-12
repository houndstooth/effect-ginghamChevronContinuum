import triangularNumber from '../utilities/triangularNumber'
import inverseTriangularNumber from '../utilities/inverseTriangularNumber'
import layer from '../components/layer'
import iterator from '../../shared/utilities/iterator'
import solidSquare from '../components/solidSquare'
import { GRID_SIZE } from '../../shared/common/customize'

const STRIPE_COUNT = triangularNumber(GRID_SIZE + 1)
const THINNING_RATE = 1 / 2

export default () => {
	const stripes = iterator(STRIPE_COUNT).map(n => inverseTriangularNumber(n) / THINNING_RATE)

	let diagonal = 0
	let thisDiagonalsStripeEdgeModuli = [ 0 ]
	stripes.forEach(stripe => {
		if (stripe >= diagonal + 2) {
			layer({ thisDiagonalsStripeEdgeModuli, diagonal })
			thisDiagonalsStripeEdgeModuli = [ 0 ]
			diagonal += 2
		}
		thisDiagonalsStripeEdgeModuli.push(stripe % 2)
	})

	iterator(GRID_SIZE).forEach(x => iterator(GRID_SIZE).forEach(y => solidSquare({x, y})))
}