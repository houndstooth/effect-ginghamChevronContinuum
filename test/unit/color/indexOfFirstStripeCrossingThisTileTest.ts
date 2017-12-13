import { Address, patternState, to } from '../../../../../src/indexForTest'
import { indexOfFirstStripeCrossingThisTile, neededStripeCountToCoverGrid } from '../../../pattern'

const subject: (_: { address: Address }) => number = indexOfFirstStripeCrossingThisTile.default

describe('index of first grid stripe crossing this tile', () => {
	it('an example', () => {
		patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings = {
			deltaStripeCount: 1,
			initialStripeCount: 1,
		}

		const actual: number = subject({ address: to.Address([ 1, 5 ]) })
		expect(actual).toBe(1 + 2 + 3 + 1)
	})

	it('another example', () => {
		patternState.stripeSettings.stripePositionSettings.stripeCountContinuumSettings = {
			deltaStripeCount: 7,
			initialStripeCount: 4,
		}

		const actual: number = subject({ address: to.Address([ 1, 5 ]) })
		// tslint:disable-next-line:binary-expression-operand-order
		expect(actual).toBe(4 + (4 + 7) + (4 + 7 + 7) + 1)
	})

	it('edge case', () => {
		spyOn(neededStripeCountToCoverGrid, 'default').and.returnValue(0)

		const actual: number = subject({ address: to.Address([ 1, 5 ]) })
		expect(actual).toBe(0)
	})
})
