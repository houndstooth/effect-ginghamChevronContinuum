import { state } from '../../../../../src'
import { executeSelectedHoundstoothEffects } from '../../../../../src/app/execute/executeSelectedHoundstoothEffects'
import { getFromBaseOrDefaultPattern } from '../../../../../src/app/store/getFromBaseOrDefaultPattern'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import * as from from '../../../../../src/from'
import { Effect } from '../../../../../src/pattern'
import * as animator from '../../../../../src/pattern/animation/animator'
import { Unit } from '../../../../../src/pattern/grid/types'
import * as to from '../../../../../src/to'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { fakeAnimator } from '../../../../../test/integration/helpers/fakeAnimator'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { thisFrameOnly } from '../../../../../test/integration/helpers/thisFrameOnly'
import { ginghamChevronContinuumEffect } from '../../../effects/ginghamChevronContinuumEffect'
import { expectStripedTile } from '../helpers/expectStripedTile'

describe('gingham chevron continuum effect', () => {
	it('each new diagonal row has an extra stripe', async (done: DoneFn) => {
		const areaSize: Unit = getFromBaseOrDefaultPattern('tileSize')
		state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({
			houndstoothOverrides: { basePattern: { gridSettings: { tileResolution: 8 } } },
		})

		setTimeout(() => {
			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 0 ]),
				areaSize,
				color: BLACK,
				sectionAddress: to.Address([ 0, 0 ]),
				sectionResolution: 1,
			})).toBe(true)

			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 1 ]),
				areaSize,
				color: BLACK,
				sectionAddress: to.Address([ 0, 0 ]),
				sectionResolution: 2,
			})).toBe(true)
			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 1 ]),
				areaSize,
				color: TRANSPARENT,
				sectionAddress: to.Address([ 1, 1 ]),
				sectionResolution: 2,
			})).toBe(true)

			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 2 ]),
				areaSize,
				color: TRANSPARENT,
				sectionAddress: to.Address([ 0, 0 ]),
				sectionResolution: 3,
			})).toBe(true)
			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 2 ]),
				areaSize,
				color: BLACK,
				sectionAddress: to.Address([ 1, 1 ]),
				sectionResolution: 3,
			})).toBe(true)
			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 2 ]),
				areaSize,
				color: TRANSPARENT,
				sectionAddress: to.Address([ 2, 2 ]),
				sectionResolution: 3,
			})).toBe(true)

			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 3 ]),
				areaSize,
				color: TRANSPARENT,
				sectionAddress: to.Address([ 0, 0 ]),
				sectionResolution: 4,
			})).toBe(true)
			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 3 ]),
				areaSize,
				color: BLACK,
				sectionAddress: to.Address([ 1, 1 ]),
				sectionResolution: 4,
			})).toBe(true)
			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 3 ]),
				areaSize,
				color: TRANSPARENT,
				sectionAddress: to.Address([ 2, 2 ]),
				sectionResolution: 4,
			})).toBe(true)
			expect(sectionCenterIsColor({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 3 ]),
				areaSize,
				color: BLACK,
				sectionAddress: to.Address([ 3, 3 ]),
				sectionResolution: 4,
			})).toBe(true)

			done()
		},         0)
	})

	describe('animating', () => {
		const ginghamChevronContinuumAnimationTestHoundstoothOverrides: Effect = {
			basePattern: {
				gridSettings: { tileResolution: 4 },
				tileSettings: { tileSize: to.Unit(50) },
				viewSettings: { canvasSize: to.Px(200) },
			},
		}

		beforeEach(() => {
			spyOn(animator, 'default').and.callFake(fakeAnimator)
		})

		it('frame 0 looks just like the normal pattern', async (done: DoneFn) => {
			const houndstoothOverrides: Effect = {
				...ginghamChevronContinuumAnimationTestHoundstoothOverrides,
				basePattern: { animationSettings: thisFrameOnly(to.Frame(0)) },
			}
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			setTimeout(() => {
				expectStripedTile({ diagonalAddress: 0, stripeCount: 1, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 1, stripeCount: 2, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 2, stripeCount: 3, firstColor: TRANSPARENT })
				expectStripedTile({ diagonalAddress: 3, stripeCount: 4, firstColor: TRANSPARENT })

				done()
			},         0)
		})

		it('around frame 525 each tile has twice its original stripe count', async (done: DoneFn) => {
			const houndstoothOverrides: Effect = {
				...ginghamChevronContinuumAnimationTestHoundstoothOverrides,
				basePattern: { animationSettings: thisFrameOnly(to.Frame(525)) },
			}
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			setTimeout(() => {
				expectStripedTile({ diagonalAddress: 0, stripeCount: 2, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 1, stripeCount: 4, firstColor: TRANSPARENT })
				expectStripedTile({ diagonalAddress: 2, stripeCount: 6, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 3, stripeCount: 8, firstColor: TRANSPARENT })

				done()
			},         0)
		})

		it('around frame 666 each tile has thrice its original stripe count', async (done: DoneFn) => {
			const houndstoothOverrides: Effect = {
				...ginghamChevronContinuumAnimationTestHoundstoothOverrides,
				basePattern: { animationSettings: thisFrameOnly(to.Frame(666)) },
			}
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			setTimeout(() => {
				expectStripedTile({ diagonalAddress: 0, stripeCount: 3, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 1, stripeCount: 6, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 2, stripeCount: 9, firstColor: TRANSPARENT })
				expectStripedTile({ diagonalAddress: 3, stripeCount: 12, firstColor: TRANSPARENT })

				done()
			},         0)
		})
	})
})
