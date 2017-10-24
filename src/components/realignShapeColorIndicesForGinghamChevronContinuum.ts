import { to, TransformShapeColorIndices } from '../../../../src'
import { reversed } from '../../../../src/utilities/codeUtilities'
import { isOdd } from '../../../../src/utilities/mathUtilities'
import { indexOfFirstStripeCrossingThisTile } from './indexOfFirstStripeCrossingThisTile'

const realignShapeColorIndicesForGinghamChevronContinuum: TransformShapeColorIndices = params => {
	const { gridAddress, shapeColorIndices } = params
	const stripeIndex = indexOfFirstStripeCrossingThisTile({ gridAddress })

	const realignedShapeColorIndices = isOdd(stripeIndex) ? reversed(shapeColorIndices) : shapeColorIndices

	return to.ShapeColorIndices(realignedShapeColorIndices)
}

export { realignShapeColorIndicesForGinghamChevronContinuum }
