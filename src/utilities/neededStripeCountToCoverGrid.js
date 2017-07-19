import mathUtilities from '../../../../src/utilities/mathUtilities'

export default () => {
	const { stripeCountSettings, gridSettings } = current.settings.initial
	const { initial, delta } = stripeCountSettings.ginghamChevronContinuum
	return initial + delta * mathUtilities.triangularNumber(gridSettings.gridSize)
}
