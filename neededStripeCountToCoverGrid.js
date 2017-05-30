import state from '../shared/state/state'
import trapezoidalNumbers from './trapezoidalNumbers'

export default () => {
    const { gridSize, stripeCount } = state.shared
    const { initial, delta } = stripeCount.ginghamChevronContinuum
    return trapezoidalNumbers.trapezoidalNumber({ initial, delta, n: gridSize })
}
