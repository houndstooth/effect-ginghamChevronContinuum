import state from '../shared/state/state'
import calculateTrapezoidalNumber from './calculateTrapezoidalNumber'

export default () => {
    const { gridSize, stripeCount } = state.shared
    const { continuumStartsAtStripeCount, stripeCountIncreasePerDiagonal } = stripeCount.ginghamChevronContinuum
    const n = gridSize * 2

    return calculateTrapezoidalNumber({ 
        continuumStartsAtStripeCount,
        stripeCountIncreasePerDiagonal,
        n
    }) 
}
