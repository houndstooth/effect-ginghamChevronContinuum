import mathUtilities from '../../../../src/utilities/mathUtilities'
import settingsUtilities from '../../../../src/utilities/settingsUtilities'
import { GRID_SIZE } from '../../../../src/defaults'

export default () => {
	const { stripeCountSettings } = current.settings.initial
	const gridSize = settingsUtilities.getFromSettingsOrDefault({
		nestedPropertyPath: [ 'initial', 'gridSettings', 'gridSize' ],
		defaultForProperty: GRID_SIZE,
	})
	const { initial, delta } = stripeCountSettings.ginghamChevronContinuum
	return initial + delta * mathUtilities.triangularNumber(gridSize)
}
