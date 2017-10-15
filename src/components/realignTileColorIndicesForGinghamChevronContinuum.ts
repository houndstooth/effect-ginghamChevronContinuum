import { reversed } from '../../../../src/utilities/codeUtilities'
import indexOfFirstStripeCrossingThisTile from './indexOfFirstStripeCrossingThisTile'
import { TileColorIndices } from '../../../../src/components'
import { Address } from '../../../../src'

type RealignTileColorIndicesForGinghamChevronContinuum = {
	({}: { tileColorIndices: TileColorIndices, gridAddress: Address }): TileColorIndices,
}

const realignTileColorIndicesForGinghamChevronContinuum: RealignTileColorIndicesForGinghamChevronContinuum = params => {
	const { tileColorIndices, gridAddress } = params
	const stripeIndex = indexOfFirstStripeCrossingThisTile({ gridAddress })
	const realignedTileColorIndices = stripeIndex % 2 === 1 ? reversed(tileColorIndices) : tileColorIndices

	return realignedTileColorIndices as TileColorIndices
}

export default realignTileColorIndicesForGinghamChevronContinuum
