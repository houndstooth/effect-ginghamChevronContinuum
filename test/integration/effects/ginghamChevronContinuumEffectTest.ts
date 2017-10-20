import { to } from '../../../../../src'
import * as animator from '../../../../../src/animation/animator'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { state } from '../../../../../src/state'
import { deepClone } from '../../../../../src/utilities/codeUtilities'
import { getFromBasePatternOrDefault } from '../../../../../test/helpers/getFromBasePatternOrDefault'
import { TILE_SIZE } from '../../../../../test/helpers/settingsPaths'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { thisAnimationFrameOnly } from '../../../../../test/integration/helpers/thisFrameOnly'
import { ginghamChevronContinuumEffect } from '../../../effects/ginghamChevronContinuumEffect'
import { expectStripedTile } from '../helpers/expectStripedTile'

describe('gingham chevron continuum effect', () => {
	it('each new diagonal row has an extra stripe', () => {
		const areaSize = getFromBasePatternOrDefault(TILE_SIZE)
		state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides: { basePattern: { gridSettings: { gridSize: 8 } } } })

		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 0, areaSize * 0 ]),
			areaSize,
			color: BLACK,
			sectionAddress: to.Address([ 0, 0 ]),
			sectionResolution: 1,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 1, areaSize * 1 ]),
			areaSize,
			color: BLACK,
			sectionAddress: to.Address([ 0, 0 ]),
			sectionResolution: 2,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 1, areaSize * 1 ]),
			areaSize,
			color: TRANSPARENT,
			sectionAddress: to.Address([ 1, 1 ]),
			sectionResolution: 2,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 2, areaSize * 2 ]),
			areaSize,
			color: TRANSPARENT,
			sectionAddress: to.Address([ 0, 0 ]),
			sectionResolution: 3,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 2, areaSize * 2 ]),
			areaSize,
			color: BLACK,
			sectionAddress: to.Address([ 1, 1 ]),
			sectionResolution: 3,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 2, areaSize * 2 ]),
			areaSize,
			color: TRANSPARENT,
			sectionAddress: to.Address([ 2, 2 ]),
			sectionResolution: 3,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 3, areaSize * 3 ]),
			areaSize,
			color: TRANSPARENT,
			sectionAddress: to.Address([ 0, 0 ]),
			sectionResolution: 4,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 3, areaSize * 3 ]),
			areaSize,
			color: BLACK,
			sectionAddress: to.Address([ 1, 1 ]),
			sectionResolution: 4,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 3, areaSize * 3 ]),
			areaSize,
			color: TRANSPARENT,
			sectionAddress: to.Address([ 2, 2 ]),
			sectionResolution: 4,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([ areaSize * 3, areaSize * 3 ]),
			areaSize,
			color: BLACK,
			sectionAddress: to.Address([ 3, 3 ]),
			sectionResolution: 4,
		})).toBe(true)
	})

	describe('animating', () => {
		const ginghamChevronContinuumAnimationTestHoundstoothOverrides = {
			basePattern: {
				gridSettings: { gridSize: 4 },
				tileSettings: { areaSizeSetting: 50 },
				viewSettings: { canvasSize: 200 },
			},
		}

		beforeEach(() => {
			spyOn(animator, 'default').and.callFake(({ animationFunction, stopConditionFunction }) => {
				while (!stopConditionFunction()) {
					animationFunction()
				}
			})
		})

		it('frame 0 looks just like the normal pattern', () => {
			const houndstoothOverrides = deepClone(ginghamChevronContinuumAnimationTestHoundstoothOverrides)
			houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(to.Frame(0))
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			expectStripedTile({ diagonalAddress: 0, stripeCount: 1, firstColor: BLACK })
			expectStripedTile({ diagonalAddress: 1, stripeCount: 2, firstColor: BLACK })
			expectStripedTile({ diagonalAddress: 2, stripeCount: 3, firstColor: TRANSPARENT })
			expectStripedTile({ diagonalAddress: 3, stripeCount: 4, firstColor: TRANSPARENT })
		})

		it('around frame 525 each tile has twice its original stripe count', () => {
			const houndstoothOverrides = deepClone(ginghamChevronContinuumAnimationTestHoundstoothOverrides)
			houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(to.Frame(525))
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			expectStripedTile({ diagonalAddress: 0, stripeCount: 2, firstColor: BLACK })
			expectStripedTile({ diagonalAddress: 1, stripeCount: 4, firstColor: TRANSPARENT })
			expectStripedTile({ diagonalAddress: 2, stripeCount: 6, firstColor: BLACK })
			expectStripedTile({ diagonalAddress: 3, stripeCount: 8, firstColor: TRANSPARENT })
		})

		it('around frame 666 each tile has thrice its original stripe count', () => {
			const houndstoothOverrides = deepClone(ginghamChevronContinuumAnimationTestHoundstoothOverrides)
			houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(to.Frame(666))
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			expectStripedTile({ diagonalAddress: 0, stripeCount: 3, firstColor: BLACK })
			expectStripedTile({ diagonalAddress: 1, stripeCount: 6, firstColor: BLACK })
			expectStripedTile({ diagonalAddress: 2, stripeCount: 9, firstColor: TRANSPARENT })
			expectStripedTile({ diagonalAddress: 3, stripeCount: 12, firstColor: TRANSPARENT })
		})
	})
})
