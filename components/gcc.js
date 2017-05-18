import layer from '../components/layer'
import calculateStripes from '../utilities/calculateStripes'
import maybeSwitchOriginColor from '../utilities/maybeSwitchOriginColor'
import { COLOR_A } from '../../shared/common/customize'
import grid from '../../shared/components/grid'
import gccMaybeSolidTile from '../components/gccMaybeSolidTile'

export default ({ thinningRate }) => {
	// won't this make it always even, although it's actually always odd?
	let countOfSquaresInThisLayer = 0

	// start out with just the top left corner
	let thisDiagonalsStripeEdgeModuli = [ 0 ]

	let originColor = COLOR_A

	// clearly each next diagonal has 2 more squares than the previous one,
	// but what does this have to do with the cut-off in drawing a new layer,
	// or the modulus?
	// maybe it has something to do with going along the top side, then the right,
	// until you reach the opposite corner?
	calculateStripes({ thinningRate }).forEach(stripe => {
		if (stripe >= countOfSquaresInThisLayer + 2) {
			layer({ thisDiagonalsStripeEdgeModuli, countOfSquaresInThisLayer, originColor })
			originColor = maybeSwitchOriginColor({ originColor, thisDiagonalsStripeEdgeModuli })
			thisDiagonalsStripeEdgeModuli = [ 0 ]
			countOfSquaresInThisLayer += 2
		}

		thisDiagonalsStripeEdgeModuli.push(stripe % 2)
	})

	grid({ tile: gccMaybeSolidTile })
}