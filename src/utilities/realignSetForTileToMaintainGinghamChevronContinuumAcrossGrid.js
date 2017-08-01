import indexOfFirstGridStripeCrossingThisTile from './indexOfFirstGridStripeCrossingThisTile'

export default ({ setForTile, gridAddress }) => {
	const stripeIndex = indexOfFirstGridStripeCrossingThisTile({ gridAddress })
	return stripeIndex % 2 === 1 ? setForTile.reverse() : setForTile
}
