import {
	codeUtilities,
	mathUtilities,
	ShapeColorIndex,
	to,
	TransformShapeColorIndices,
	TransformShapeColorIndicesParams,
} from '../../../../src'
import indexOfFirstStripeCrossingThisTile from './indexOfFirstStripeCrossingThisTile'

const realignShapeColorIndicesForGinghamChevronContinuum: TransformShapeColorIndices =
	({ gridAddress, shapeColorIndices }: TransformShapeColorIndicesParams): ShapeColorIndex[] => {
		const stripeIndex: number = indexOfFirstStripeCrossingThisTile({ gridAddress })

		const realignedShapeColorIndices: ShapeColorIndex[] = mathUtilities.isOdd(stripeIndex)
			? codeUtilities.reversed(shapeColorIndices)
			: shapeColorIndices

		return to.ShapeColorIndices(realignedShapeColorIndices)
	}

export default realignShapeColorIndicesForGinghamChevronContinuum
