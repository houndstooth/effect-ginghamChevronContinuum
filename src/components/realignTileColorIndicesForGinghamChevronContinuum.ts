import { Address } from '../../../../src'
import { TileColorIndices } from '../../../../src/components'
import { reversed } from '../../../../src/utilities/codeUtilities'
import { isOdd } from '../../../../src/utilities/mathUtilities'
import indexOfFirstStripeCrossingThisTile from './indexOfFirstStripeCrossingThisTile'

const realignTileColorIndicesForGinghamChevronContinuum: (_: {
	gridAddress: Address, tileColorIndices: TileColorIndices,
}) => TileColorIndices = ({ gridAddress, tileColorIndices }) => {
	const stripeIndex = indexOfFirstStripeCrossingThisTile({ gridAddress })

	const realignedTileColorIndices = isOdd(stripeIndex) ? reversed(tileColorIndices) : tileColorIndices

	return realignedTileColorIndices as TileColorIndices
}

export default realignTileColorIndicesForGinghamChevronContinuum
