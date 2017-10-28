import { Address, ShapeColorIndex } from '../../../../../../src/components/types'
import { composeMainHoundstooth } from '../../../../../../src/execute/composeMainHoundstooth'
import * as to from '../../../../../../src/utilities/to'
import * as indexOfFirstStripeCrossingThisTile from '../../../../src/components/indexOfFirstStripeCrossingThisTile'
// tslint:disable-next-line:max-line-length
import { realignShapeColorIndicesForGinghamChevronContinuum } from '../../../../src/components/realignShapeColorIndicesForGinghamChevronContinuum'

// tslint:disable-next-line:max-line-length
describe('realign tile color indices to maintain gingham chevron continuum across grid, because the information about alternation of the colorSet has been lost from individual tiles, we have to check the modulus of the overall grid stripes instead', () => {
	const shapeColorIndices: ShapeColorIndex[] = to.ShapeColorIndices([ 9, 88 ])
	const gridAddress: Address = to.Address([ 4, 7 ])
	beforeEach(() => {
		composeMainHoundstooth({
			houndstoothEffects: [],
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountContinuumSettings: {
								deltaStripeCount: 67,
								initialStripeCount: 400,
							},
						},
					},
				},
			},
		})
	})

	describe('when the index of the first grid stripe crossing this tile is even', () => {
		it('returns the set for tile as is; all is well', () => {
			spyOn(indexOfFirstStripeCrossingThisTile, 'indexOfFirstStripeCrossingThisTile').and.returnValue(2)
			const actual: ShapeColorIndex[] = realignShapeColorIndicesForGinghamChevronContinuum({
				gridAddress,
				shapeColorIndices,
			})
			expect(actual).toEqual(to.ShapeColorIndices([ 9, 88 ]))
		})
	})

	describe('when the index of the first grid stripe crossing this tile is odd', () => {
		it('reverses the set to flip the grain, to realign with previous diagonal row of striped tiles', () => {
			spyOn(indexOfFirstStripeCrossingThisTile, 'indexOfFirstStripeCrossingThisTile').and.returnValue(1)
			const actual: ShapeColorIndex[] = realignShapeColorIndicesForGinghamChevronContinuum({
				gridAddress,
				shapeColorIndices,
			})
			expect(actual).toEqual(to.ShapeColorIndices([ 88, 9 ]))
		})
	})
})
