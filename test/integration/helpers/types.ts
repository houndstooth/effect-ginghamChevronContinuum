import { Color, ConditionFunction, NullaryVoidPromise } from '../../../../../src'

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
