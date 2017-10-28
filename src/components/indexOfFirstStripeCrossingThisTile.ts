import { Address, constants, from, getFromBaseOrDefaultPattern, StripeCountContinuumSettings } from '../../../../src'
import { termialRoot } from '../../../../src/utilities/mathUtilities'
import { neededStripeCountToCoverGrid } from './neededStripeCountToCoverGrid'

const indexOfFirstStripeCrossingThisTile: (_: { gridAddress: Address }) => number =
	({ gridAddress }: { gridAddress: Address }): number => {
		const {
			initialStripeCount,
			deltaStripeCount,
		}: StripeCountContinuumSettings = getFromBaseOrDefaultPattern('stripeCountContinuumSettings')

		for (let stripeIndex: number = 0; stripeIndex < neededStripeCountToCoverGrid(); stripeIndex++) {
			const stripePosition: number = termialRoot({
				n: stripeIndex,
				rangeDelta: deltaStripeCount,
				rangeStart: initialStripeCount,
			}) * constants.PERIMETER_SCALAR
			const [ x, y ]: number[] = from.Address(gridAddress)
			if (stripePosition > x + y) {
				return stripeIndex
			}
		}

		return 0
	}

export { indexOfFirstStripeCrossingThisTile }
