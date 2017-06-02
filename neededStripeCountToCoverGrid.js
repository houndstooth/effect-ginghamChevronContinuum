import state from '../shared/state/state'
import trapezoidalNumbers from './trapezoidalNumbers'

export default () => {
    const { gridSize, stripeCountConfig } = state
    const { initial, delta } = stripeCountConfig.ginghamChevronContinuum
    return trapezoidalNumbers.trapezoidalNumber({ initial, delta, n: gridSize })
}
