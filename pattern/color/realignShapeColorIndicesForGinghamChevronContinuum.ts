// tslint:disable:max-line-length

import {
	codeUtilities,
	mathUtilities,
	ShapeColorIndex,
	TransformShapeColorIndices,
	TransformShapeColorIndicesParams,
} from '../../../../src'
import * as to from '../../../../src/to'
import { indexOfFirstStripeCrossingThisTile } from './indexOfFirstStripeCrossingThisTile'

const realignShapeColorIndicesForGinghamChevronContinuum: TransformShapeColorIndices =
	({ gridAddress, shapeColorIndices }: TransformShapeColorIndicesParams): ShapeColorIndex[] => {
		const stripeIndex: number = indexOfFirstStripeCrossingThisTile({ gridAddress })

		const realignedShapeColorIndices: ShapeColorIndex[] = mathUtilities.isOdd(stripeIndex)
			? codeUtilities.reversed(shapeColorIndices)
			: shapeColorIndices

		return to.ShapeColorIndices(realignedShapeColorIndices)
	}

export { realignShapeColorIndicesForGinghamChevronContinuum }
