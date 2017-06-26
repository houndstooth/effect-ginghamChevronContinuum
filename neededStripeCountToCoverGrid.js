import mathUtilities from '../../utilities/mathUtilities'

export default () => {
	const { gridConfig: { gridSize }, stripeCountConfig } = state
	const { initial, delta } = stripeCountConfig.ginghamChevronContinuum
	return initial + delta * mathUtilities.triangularNumber(gridSize)
}
