import state from '../../state'

export default ({ origin }) => {
    const { continuumStartsAtStripeCount, stripeCountIncreasePerDiagonal } = state.shared.stripeCount.ginghamChevronContinuum.aligning
    return Math.floor(
        ((origin[ 0 ] + origin[ 1 ] + (continuumStartsAtStripeCount * 2)) * stripeCountIncreasePerDiagonal / 2)
        - (continuumStartsAtStripeCount * (stripeCountIncreasePerDiagonal - 1))
    )
}
    