import mathUtilities from '../../../../src/utilities/mathUtilities'
import store from '../../../../store'

export default () => {
	const { stripeCountSettings, gridSettings } = store.currentState.builtPattern.base
	const { initialStripeCount, deltaStripeCount } = stripeCountSettings.ginghamChevronContinuum
	return initialStripeCount + deltaStripeCount * mathUtilities.triangularNumber(gridSettings.gridSize)
}
