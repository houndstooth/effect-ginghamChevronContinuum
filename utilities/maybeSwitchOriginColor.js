import { COLOR_A, COLOR_B } from '../../shared/common/customize'

export default ({originColor, thisDiagonalsStripeEdgeModuli}) => {
	const thereWereAnEvenNumberOfStripesInThisDiagonal = thisDiagonalsStripeEdgeModuli.length % 2 == 0
	if (thereWereAnEvenNumberOfStripesInThisDiagonal) return originColor == COLOR_A ? COLOR_B : COLOR_A
	return originColor
}