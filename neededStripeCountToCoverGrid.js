import state from '../../state/state'
import mathUtilities from '../../utilities/mathUtilities'

export default () => {
    const { gridSize, stripeCountConfig } = state
    const { initial, delta } = stripeCountConfig.ginghamChevronContinuum
    return initial + delta * mathUtilities.triangularNumber(gridSize)
}
