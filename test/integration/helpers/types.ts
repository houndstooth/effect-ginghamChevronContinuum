import { ConditionFunction } from '../../../../../src'
import { Color } from '../../../../../src'
import { NullaryVoidPromise } from '../../../../../src'

interface ExpectStripedTile {
	diagonalAddress: number,
	firstColor: Color,
	stripeCount: number
}

interface FakeAnimatorParams {
	animationFunction: NullaryVoidPromise,
	stopConditionFunction: ConditionFunction
}

export {
	ExpectStripedTile,
	FakeAnimatorParams,
}
