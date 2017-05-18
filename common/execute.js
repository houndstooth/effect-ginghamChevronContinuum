import solidSquares from '../components/solidSquares'
import stripedSquares from '../components/stripedSquares'
import calculateStripes from '../utilities/calculateStripes'
import iterator from '../../shared/utilities/iterator'
import maybeSolidSquare from '../components/maybeSolidSquare'
import maybeStripedSquare from '../components/maybeStripedSquare'
import { THINNING_RATE, EACH_SQUARE_IS_ITS_OWN_CONTINUUM } from '../common/customize'
import { GRID_SIZE } from '../../shared/common/customize'

export default (options = {thinningRate: THINNING_RATE}) => {
	const {thinningRate} = options
	if (EACH_SQUARE_IS_ITS_OWN_CONTINUUM) {
		let stripes = calculateStripes({thinningRate})
		iterator(GRID_SIZE).forEach(x => {
			iterator(GRID_SIZE).forEach(y => {
				maybeSolidSquare({x, y})
				maybeStripedSquare({x, y, stripes})
			})
		})
	} else {
		stripedSquares({thinningRate})
		solidSquares()
	}
}