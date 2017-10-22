import { Address, TileColorIndex, to } from '../../../../src'
import { reversed } from '../../../../src/utilities/codeUtilities'
import { isOdd } from '../../../../src/utilities/mathUtilities'
import { indexOfFirstStripeCrossingThisTile } from './indexOfFirstStripeCrossingThisTile'

const realignTileColorIndicesForGinghamChevronContinuum: (_: {
	gridAddress: Address, tileColorIndices: TileColorIndex[],
}) => TileColorIndex[] = ({ gridAddress, tileColorIndices }) => {
	const stripeIndex = indexOfFirstStripeCrossingThisTile({ gridAddress })

	const realignedTileColorIndices = isOdd(stripeIndex) ? reversed(tileColorIndices) : tileColorIndices

	return to.TileColorIndices(realignedTileColorIndices)
}

export { realignTileColorIndicesForGinghamChevronContinuum }
