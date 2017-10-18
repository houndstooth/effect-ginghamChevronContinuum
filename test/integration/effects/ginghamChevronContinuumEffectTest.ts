import * as animator from '../../../../../src/animation/animator'
import { CanvasSize } from '../../../../../src/canvas/types/CanvasSize'
import { Address } from '../../../../../src/components/types/Address'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
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
			areaOrigin: [ areaSize * 0 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			color: BLACK,
			sectionAddress: [ 0, 0 ] as Address,
			sectionResolution: 1,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 1 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			color: BLACK,
			sectionAddress: [ 0, 0 ] as Address,
			sectionResolution: 2,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 1 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			color: TRANSPARENT,
			sectionAddress: [ 1, 1 ] as Address,
			sectionResolution: 2,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 2 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			color: TRANSPARENT,
			sectionAddress: [ 0, 0 ] as Address,
			sectionResolution: 3,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 2 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			color: BLACK,
			sectionAddress: [ 1, 1 ] as Address,
			sectionResolution: 3,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 2 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			color: TRANSPARENT,
			sectionAddress: [ 2, 2 ] as Address,
			sectionResolution: 3,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 3 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			color: TRANSPARENT,
			sectionAddress: [ 0, 0 ] as Address,
			sectionResolution: 4,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 3 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			color: BLACK,
			sectionAddress: [ 1, 1 ] as Address,
			sectionResolution: 4,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 3 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			color: TRANSPARENT,
			sectionAddress: [ 2, 2 ] as Address,
			sectionResolution: 4,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ areaSize * 3 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			color: BLACK,
			sectionAddress: [ 3, 3 ] as Address,
			sectionResolution: 4,
		})).toBe(true)
	})

	describe('animating', () => {
		const ginghamChevronContinuumAnimationTestHoundstoothOverrides = {
			basePattern: {
				gridSettings: { gridSize: 4 },
				tileSettings: { areaSizeSetting: 50 },
				viewSettings: { canvasSize: 200 as CanvasSize },
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
			const houndstoothOverridesBasePattern = houndstoothOverrides.basePattern || {}
			houndstoothOverridesBasePattern.animationSettings = thisAnimationFrameOnly(0)
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
			const houndstoothOverridesBasePattern = houndstoothOverrides.basePattern || {}
			houndstoothOverridesBasePattern.animationSettings = thisAnimationFrameOnly(525)
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
			const houndstoothOverridesBasePattern = houndstoothOverrides.basePattern || {}
			houndstoothOverridesBasePattern.animationSettings = thisAnimationFrameOnly(666)
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
