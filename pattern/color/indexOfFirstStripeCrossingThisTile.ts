import { Address, constants, from, mathUtilities } from '../../../../src'
// tslint:disable-next-line:no-reaching-imports
import { main as getFromBaseOrDefaultPattern } from '../../../../src/app/store/getFromBaseOrDefaultPattern'
import { neededStripeCountToCoverGrid } from '../grid'

const indexOfFirstStripeCrossingThisTile: (_: { gridAddress: Address }) => number =
	({ gridAddress }: { gridAddress: Address }): number => {
		const initialStripeCount: number = getFromBaseOrDefaultPattern('initialStripeCount')
		const deltaStripeCount: number = getFromBaseOrDefaultPattern('deltaStripeCount')

		for (let stripeIndex: number = 0; stripeIndex < neededStripeCountToCoverGrid.main(); stripeIndex++) {
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

export { indexOfFirstStripeCrossingThisTile as main }
