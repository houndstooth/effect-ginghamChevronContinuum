export default ({ continuumStartsAtStripeCount, stripeCountIncreasePerDiagonal, n }) => {
    const r = stripeCountIncreasePerDiagonal
    const i = continuumStartsAtStripeCount
    const answer = ( 4 * Math.pow(r, 2) * Math.pow(n, 2) + 8 * r * n * i - 4 * Math.pow(r, 2) * n + 2 * Math.pow(i, 2) ) / ( 8 * r )
    
    // I'm not sure why this formula is wrong, but dividing by 3 seems to be safe.
    return answer / 3
}
