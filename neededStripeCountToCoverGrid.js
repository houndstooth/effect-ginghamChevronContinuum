import mathUtilities from '../../utilities/mathUtilities'

export default () => {
	const { gridConfig: { gridSize }, stripeCountConfig } = settings.initial
	const { initial, delta } = stripeCountConfig.ginghamChevronContinuum
	return initial + delta * mathUtilities.triangularNumber(gridSize)
}
