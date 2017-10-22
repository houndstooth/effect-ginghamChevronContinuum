import { Address, ShapeColorIndex, to } from '../../../../src'
import { reversed } from '../../../../src/utilities/codeUtilities'
import { isOdd } from '../../../../src/utilities/mathUtilities'
import { indexOfFirstStripeCrossingThisTile } from './indexOfFirstStripeCrossingThisTile'

const realignShapeColorIndicesForGinghamChevronContinuum: (_: {
	gridAddress: Address, shapeColorIndices: ShapeColorIndex[],
}) => ShapeColorIndex[] = ({ gridAddress, shapeColorIndices }) => {
	const stripeIndex = indexOfFirstStripeCrossingThisTile({ gridAddress })

	const realignedShapeColorIndices = isOdd(stripeIndex) ? reversed(shapeColorIndices) : shapeColorIndices

	return to.ShapeColorIndices(realignedShapeColorIndices)
}

export { realignShapeColorIndicesForGinghamChevronContinuum }
