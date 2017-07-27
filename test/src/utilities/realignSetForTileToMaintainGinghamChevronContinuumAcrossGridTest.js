import store from '../../../../../store'
import resetStore from '../../../../../test/helpers/resetStore'
import composeMainHoundstooth from '../../../../../src/store/composeMainHoundstooth'
import subject from '../../../src/utilities/realignSetForTileToMaintainGinghamChevronContinuumAcrossGrid'

describe('realign set for tile to maintain gingham chevron continuum across grid', () => {
	beforeEach(() => resetStore(store))

	xit('because the information about alternation of the set has been lost from individual tiles, we have to check the modulus of the overall grid stripes instead', () => {
		const setForTile = [ 'a', 'b' ]
		const gridAddress = [ 4, 7 ]

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

		expect(subject({ setForTile, gridAddress })).toEqual(setForTile)
	})

	xit('above test is not finished. you would want to extract the index of first grid stripe so you could spy on it and prove whether it was odd or even', () => {})

	xit('um, you do see that this is quite hacky, right? what you should really do is not assume there are only two colors, but instead use the index of the first grid stripe crossing this tile to figure out where in the supertile or weave you are. then you could have this work with gongram', () => {})
})
