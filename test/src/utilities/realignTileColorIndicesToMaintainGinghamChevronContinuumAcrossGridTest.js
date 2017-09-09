import state from '../../../../../state'
import resetState from '../../../../../src/store/resetState'
import composeMainHoundstooth from '../../../../../src/execute/composeMainHoundstooth'
import subject from '../../../src/utilities/realignTileColorIndicesToMaintainGinghamChevronContinuumAcrossGrid'

describe('realign tile color indices to maintain gingham chevron continuum across grid, because the information about alternation of the set has been lost from individual tiles, we have to check the modulus of the overall grid stripes instead', () => {
	const tileColorIndices = [ 'a', 'b' ]
	const gridAddress = [ 4, 7 ]
	beforeEach(() => {
		resetState(state)
		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountContinuumSettings: {
								initialStripeCount: 400,
								deltaStripeCount: 67,
							},
						},
					},
				},
			},
		})
	})

	describe('when the index of the first grid stripe crossing this tile is even', () => {
		it('returns the set for tile as is; all is well', () => {
			subject.__Rewire__('indexOfFirstGridStripeCrossingThisTile', () => 2)
			expect(subject({ tileColorIndices, gridAddress })).toEqual([ 'a', 'b' ])
		})
	})

	describe('when the index of the first grid stripe crossing this tile is odd', () => {
		it('reverses the set to flip the grain, to realign with previous diagonal row of striped tiles', () => {
			subject.__Rewire__('indexOfFirstGridStripeCrossingThisTile', () => 1)
			expect(subject({ tileColorIndices, gridAddress })).toEqual([ 'b', 'a' ])
		})
	})
})
