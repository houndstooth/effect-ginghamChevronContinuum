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
	({ address, shapeColorIndices }: TransformShapeColorIndicesParams): ShapeColorIndex[] => {
		const stripeIndex: number = indexOfFirstStripeCrossingThisTile({ address })

		const realignedShapeColorIndices: ShapeColorIndex[] = mathUtilities.isOdd(stripeIndex)
			? codeUtilities.reversed(shapeColorIndices)
			: shapeColorIndices

		return to.ShapeColorIndices(realignedShapeColorIndices)
	}

export default realignShapeColorIndicesForGinghamChevronContinuum
