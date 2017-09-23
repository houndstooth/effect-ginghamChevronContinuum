import indexOfFirstGridStripeCrossingThisTile from './indexOfFirstGridStripeCrossingThisTile'

const realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid = ({ tileColorIndices, gridAddress }) => {
	const stripeIndex = indexOfFirstGridStripeCrossingThisTile({ gridAddress })
	return stripeIndex % 2 === 1 ? tileColorIndices.reverse() : tileColorIndices
}

export default realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid
