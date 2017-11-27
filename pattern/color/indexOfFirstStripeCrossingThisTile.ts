import { Address, constants, from, getSetting, mathUtilities } from '../../../../src'
import { neededStripeCountToCoverGrid } from '../grid'

const indexOfFirstStripeCrossingThisTile: (_: { gridAddress: Address }) => number =
	({ gridAddress }: { gridAddress: Address }): number => {
		const initialStripeCount: number = getSetting.default('initialStripeCount')
		const deltaStripeCount: number = getSetting.default('deltaStripeCount')

		for (let stripeIndex: number = 0; stripeIndex < neededStripeCountToCoverGrid.default(); stripeIndex++) {
			const stripePosition: number = mathUtilities.termialRoot({
				n: stripeIndex,
				rangeDelta: deltaStripeCount,
				rangeStart: initialStripeCount,
			}) * from.StripePosition(constants.PERIMETER_SCALAR)
			const [ x, y ]: number[] = from.Address(gridAddress)
			if (stripePosition > x + y) {
				return stripeIndex
			}
		}

		return 0
	}

export default indexOfFirstStripeCrossingThisTile
