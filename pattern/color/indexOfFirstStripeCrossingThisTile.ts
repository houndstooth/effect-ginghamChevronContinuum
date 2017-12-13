// tslint:disable:max-line-length

import { Address, from, mathUtilities, patternState, PERIMETER_SCALAR } from '../../../../src'
import { neededStripeCountToCoverGrid } from '../grid'

const indexOfFirstStripeCrossingThisTile: (_: { address: Address }) => number =
	({ address }: { address: Address }): number => {
		const initialStripeCount: number = patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings.initialStripeCount
		const deltaStripeCount: number = patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings.deltaStripeCount

		for (let stripeIndex: number = 0; stripeIndex < neededStripeCountToCoverGrid.default(); stripeIndex++) {
			const stripePosition: number = mathUtilities.termialRoot({
				n: stripeIndex,
				rangeDelta: deltaStripeCount,
				rangeStart: initialStripeCount,
			}) * from.StripePosition(PERIMETER_SCALAR)
			const [ x, y ]: number[] = from.Address(address)
			if (stripePosition > x + y) {
				return stripeIndex
			}
		}

		return 0
	}

export default indexOfFirstStripeCrossingThisTile
