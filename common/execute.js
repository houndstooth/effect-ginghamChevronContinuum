import gcc from '../components/gcc'
import { EACH_SQUARE_IS_ITS_OWN_CONTINUUM, THINNING_RATE } from '../common/customize'
import harmonicShrinkingTile from '../components/harmonicShrinkingTile'
import grid from '../../shared/components/grid'
import calculateStripes from '../utilities/calculateStripes'

export default (options = { thinningRate: THINNING_RATE }) => {
	const { thinningRate } = options
	if (EACH_SQUARE_IS_ITS_OWN_CONTINUUM) {
		options.harmonicShrinkingStripes = calculateStripes({ thinningRate })
		grid({ tile: harmonicShrinkingTile, options })
	} else {
		gcc({ thinningRate })
	}
}