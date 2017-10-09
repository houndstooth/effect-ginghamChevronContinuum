import { reversed } from '../../../../src/utilities/codeUtilities'
import indexOfFirstStripeCrossingThisTile from './indexOfFirstStripeCrossingThisTile'

const realignTileColorIndicesForGinghamChevronContinuum = ({ tileColorIndices, gridAddress }) => {
	const stripeIndex = indexOfFirstStripeCrossingThisTile({ gridAddress })
	return stripeIndex % 2 === 1 ? reversed(tileColorIndices) : tileColorIndices
}

export default realignTileColorIndicesForGinghamChevronContinuum
