import mathUtilities from '../../src/utilities/mathUtilities'
import { GRID_SIZE } from '../../src/defaults'

export default () => {
	const { gridConfig, stripeCountConfig } = settings.initial
	const { gridSize } = gridConfig || { gridSize: GRID_SIZE }
	const { initial, delta } = stripeCountConfig.ginghamChevronContinuum
	return initial + delta * mathUtilities.triangularNumber(gridSize)
}
