import {
	Address,
	constants,
	GetStripePositions,
	mathUtilities,
	StripePosition,
} from '../../../../src'
import { getFromBaseOrDefaultPattern } from '../../../../src/app/store/getFromBaseOrDefaultPattern'
import * as from from '../../../../src/from'
import * as to from '../../../../src/to'
import { getDistanceFromHomeAddress, neededStripeCountToCoverGrid } from '../grid'
import { GetStripePositionsParams } from './types'

const getGinghamChevronContinuumStripePositions: GetStripePositions =
	({ gridAddress }: { gridAddress: Address }): StripePosition[] => {
		const initialStripeCount: number = getFromBaseOrDefaultPattern('initialStripeCount')
		const deltaStripeCount: number = getFromBaseOrDefaultPattern('deltaStripeCount')

		const distanceFromHomeAddress: number = getDistanceFromHomeAddress({ gridAddress })

		return getStripePositions({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount })
	}

const getStripePositions: (_: GetStripePositionsParams) => StripePosition[] =
	({ deltaStripeCount, distanceFromHomeAddress, initialStripeCount }: GetStripePositionsParams): StripePosition[] => {
		const stripePositions: StripePosition[] = to.StripePositions([ 0 ])

		for (let n: number = 0; n < neededStripeCountToCoverGrid(); n++) {
			const rawStripePositionValue: number = mathUtilities.termialRoot({
				n,
				rangeDelta: deltaStripeCount,
				rangeStart: initialStripeCount,
			}) * from.StripePosition(constants.PERIMETER_SCALAR)

			if (rawStripePositionValue >= distanceFromHomeAddress + from.StripePosition(constants.PERIMETER_SCALAR)) {
				return stripePositions
			}
			if (rawStripePositionValue > distanceFromHomeAddress) {
				const positionWithinTile: number = rawStripePositionValue - distanceFromHomeAddress
				const stripePositionValue: number = positionWithinTile % from.StripePosition(constants.PERIMETER_SCALAR)
				stripePositions.push(to.StripePosition(stripePositionValue))
			}
		}

		return stripePositions
	}

export { getGinghamChevronContinuumStripePositions }
