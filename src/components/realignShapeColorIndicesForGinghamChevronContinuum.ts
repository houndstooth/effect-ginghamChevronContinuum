// tslint:disable:max-line-length

import { Address, ShapeColorIndex, to, TransformShapeColorIndices } from '../../../../src'
import { reversed } from '../../../../src/utilities/codeUtilities'
import { isOdd } from '../../../../src/utilities/mathUtilities'
import { indexOfFirstStripeCrossingThisTile } from './indexOfFirstStripeCrossingThisTile'

const realignShapeColorIndicesForGinghamChevronContinuum: TransformShapeColorIndices =
	({ gridAddress, shapeColorIndices }: { gridAddress: Address, shapeColorIndices: ShapeColorIndex[] }): ShapeColorIndex[] => {
		const stripeIndex: number = indexOfFirstStripeCrossingThisTile({ gridAddress })

		const realignedShapeColorIndices: ShapeColorIndex[] = isOdd(stripeIndex) ? reversed(shapeColorIndices) : shapeColorIndices

		return to.ShapeColorIndices(realignedShapeColorIndices)
	}

export { realignShapeColorIndicesForGinghamChevronContinuum }
