import indexOfFirstGridStripeCrossingThisTile from './indexOfFirstGridStripeCrossingThisTile'

export default ({ tileColorIndices, gridAddress }) => {
	const stripeIndex = indexOfFirstGridStripeCrossingThisTile({ gridAddress })
	return stripeIndex % 2 === 1 ? tileColorIndices.reverse() : tileColorIndices
}
