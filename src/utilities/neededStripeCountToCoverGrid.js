import mathUtilities from '../../../../src/utilities/mathUtilities'
import { GRID_SIZE } from '../../../../src/defaults'

export default () => {
	const { gridSettings, stripeCountSettings } = settings.initial
	const { gridSize } = gridSettings || { gridSize: GRID_SIZE }
	const { initial, delta } = stripeCountSettings.ginghamChevronContinuum
	return initial + delta * mathUtilities.triangularNumber(gridSize)
}
