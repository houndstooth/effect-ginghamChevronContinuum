import {
	Address,
	constants,
	from,
	GetStripePositions,
	mathUtilities,
	patternState,
	StripePosition,
	to,
} from '../../../../src'
import { getDistanceFromHomeAddress, neededStripeCountToCoverGrid } from '../grid'
import { GetStripePositionsParams } from './types'

const getGinghamChevronContinuumStripePositions: GetStripePositions =
	({ gridAddress }: { gridAddress: Address }): StripePosition[] => {
		const initialStripeCount: number = patternState.get('initialStripeCount')
		const deltaStripeCount: number = patternState.get('deltaStripeCount')

		const distanceFromHomeAddress: number = getDistanceFromHomeAddress.default({ gridAddress })

		return getStripePositions({ initialStripeCount, distanceFromHomeAddress, deltaStripeCount })
	}

const getStripePositions: (_: GetStripePositionsParams) => StripePosition[] =
	({ deltaStripeCount, distanceFromHomeAddress, initialStripeCount }: GetStripePositionsParams): StripePosition[] => {
		const stripePositions: StripePosition[] = to.StripePositions([ 0 ])

		for (let n: number = 0; n < neededStripeCountToCoverGrid.default(); n++) {
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

export default getGinghamChevronContinuumStripePositions
