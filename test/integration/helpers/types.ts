import { ConditionFunction } from '../../../../../src/animation/types'
import { Color } from '../../../../../src/render/types'
import { NullarySideEffector } from '../../../../../src/utilities/types'

interface ExpectStripedTile {
	diagonalAddress: number,
	firstColor: Color,
	stripeCount: number
}

interface FakeAnimatorParams {
	animationFunction: NullarySideEffector,
	stopConditionFunction: ConditionFunction
}

export {
	ExpectStripedTile,
	FakeAnimatorParams,
}
