export default ({ continuumStartsAtStripeCount, stripeCountIncreasePerDiagonal, n }) => {
    const thing = 2 * continuumStartsAtStripeCount - stripeCountIncreasePerDiagonal
    return (Math.sqrt(Math.pow(thing, 2) + 8 * stripeCountIncreasePerDiagonal * n) - thing) / (2 * stripeCountIncreasePerDiagonal)
}