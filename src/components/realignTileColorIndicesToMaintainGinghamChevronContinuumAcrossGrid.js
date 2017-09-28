import indexOfFirstGridStripeCrossingThisTile from './indexOfFirstGridStripeCrossingThisTile'
import { reversed } from '../../../../src/utilities/codeUtilities'

const realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid = ({ tileColorIndices, gridAddress }) => {
	const stripeIndex = indexOfFirstGridStripeCrossingThisTile({ gridAddress })
	return stripeIndex % 2 === 1 ? reversed(tileColorIndices) : tileColorIndices
}

export default realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid
