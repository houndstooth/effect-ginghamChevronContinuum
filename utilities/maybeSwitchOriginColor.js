export default ({originColor, thisDiagonalsStripeEdgeModuli}) => {
	const thereWereAnEvenNumberOfStripesInThisDiagonal = thisDiagonalsStripeEdgeModuli.length % 2 == 0
	if (thereWereAnEvenNumberOfStripesInThisDiagonal) return originColor == "BLACK" ? "WHITE" : "BLACK"
	return originColor
}