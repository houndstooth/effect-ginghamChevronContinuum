import store from '../../../../../store'
import resetStore from '../../../../../test/helpers/resetStore'
import composeMainHoundstooth from '../../../../../src/store/composeMainHoundstooth'
import getGinghamChevronContinuumStripePositions from '../../../src/utilities/getGinghamChevronContinuumStripePositions'

describe('get gingham chevron continuum stripe positions', () => {
	beforeEach(() => resetStore(store))

	// dig up your notebook from the Hayama trip and use examples from your development!
	xit('returns an array of numbers representing the positions of the stripes for a given tile in terms of its perimeter (2 is the max) based on where on the grid it is', () => {
		const initialStripeCount = 400
		const deltaStripeCount = 67

		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							ginghamChevronContinuumSettings: {
								initialStripeCount,
								deltaStripeCount,
							},
						},
					},
				},
			},
		})

		const gridAddress = [ 4, 7 ]
		// const distanceFromZeroZeroGridAddress = 4 + 7

		expect(getGinghamChevronContinuumStripePositions({ gridAddress })).toEqual([])
	})
})
