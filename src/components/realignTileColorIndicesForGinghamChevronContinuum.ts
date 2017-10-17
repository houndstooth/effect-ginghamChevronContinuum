import { reversed } from '../../../../src/utilities/codeUtilities'
import indexOfFirstStripeCrossingThisTile from './indexOfFirstStripeCrossingThisTile'
import { TileColorIndices } from '../../../../src/components'
import { Address } from '../../../../src'

const realignTileColorIndicesForGinghamChevronContinuum: {
	({}: { gridAddress: Address, tileColorIndices: TileColorIndices }): TileColorIndices,
} = ({ gridAddress, tileColorIndices }) => {
	const stripeIndex = indexOfFirstStripeCrossingThisTile({ gridAddress })
	const realignedTileColorIndices = stripeIndex % 2 === 1 ? reversed(tileColorIndices) : tileColorIndices

	return realignedTileColorIndices as TileColorIndices
}

export default realignTileColorIndicesForGinghamChevronContinuum
