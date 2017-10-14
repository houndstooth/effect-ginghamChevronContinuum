import executeSelectedHoundstoothEffects from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import ginghamChevronContinuumEffect from '../../../effects/ginghamChevronContinuumEffect'
import getFromBasePatternOrDefault from '../../../../../test/helpers/getFromBasePatternOrDefault'
import { TILE_SIZE } from '../../../../../test/helpers/settingsPaths'
import { thisAnimationFrameOnly } from '../../../../../test/integration/helpers/thisFrameOnly'
import state from '../../../../../src/state'
import { deepClone, iterator } from '../../../../../src/utilities/codeUtilities'
import * as animator from '../../../../../src/animation/animator'

describe('gingham chevron continuum effect', () => {
	it('each new diagonal row has an extra stripe', () => {
		const areaSize = getFromBasePatternOrDefault(TILE_SIZE) as number
		state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides: { basePattern: { gridSettings: { gridSize: 8 } } } })

		expect(sectionCenterIsColor({
			areaOrigin: [ 0 * areaSize, 0 * areaSize ],
			areaSize,
			sectionResolution: 1,
			sectionAddress: [ 0, 0 ],
			color: BLACK,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: [ 1 * areaSize, 1 * areaSize ],
			areaSize,
			sectionResolution: 2,
			sectionAddress: [ 0, 0 ],
			color: BLACK,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ 1 * areaSize, 1 * areaSize ],
			areaSize,
			sectionResolution: 2,
			sectionAddress: [ 1, 1 ],
			color: TRANSPARENT,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: [ 2 * areaSize, 2 * areaSize ],
			areaSize,
			sectionResolution: 3,
			sectionAddress: [ 0, 0 ],

			color: TRANSPARENT,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ 2 * areaSize, 2 * areaSize ],
			areaSize,
			sectionResolution: 3,
			sectionAddress: [ 1, 1 ],
			color: BLACK,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ 2 * areaSize, 2 * areaSize ],
			areaSize,
			sectionResolution: 3,
			sectionAddress: [ 2, 2 ],
			color: TRANSPARENT,
		})).toBe(true)

		expect(sectionCenterIsColor({
			areaOrigin: [ 3 * areaSize, 3 * areaSize ],
			areaSize,
			sectionResolution: 4,
			sectionAddress: [ 0, 0 ],
			color: TRANSPARENT,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ 3 * areaSize, 3 * areaSize ],
			areaSize,
			sectionResolution: 4,
			sectionAddress: [ 1, 1 ],
			color: BLACK,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ 3 * areaSize, 3 * areaSize ],
			areaSize,
			sectionResolution: 4,
			sectionAddress: [ 2, 2 ],
			color: TRANSPARENT,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin: [ 3 * areaSize, 3 * areaSize ],
			areaSize,
			sectionResolution: 4,
			sectionAddress: [ 3, 3 ],
			color: BLACK,
		})).toBe(true)
	})

	describe('animating', () => {
		const ginghamChevronContinuumAnimationTestHoundstoothOverrides = {
			basePattern: {
				gridSettings: { gridSize: 4 },
				viewSettings: { canvasSize: 200 },
				tileSettings: { areaSizeSetting: 50 },
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
			houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(0)
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			expectStripedTile({ coordinate: 0, stripeCount: 1, firstColor: BLACK })
			expectStripedTile({ coordinate: 1, stripeCount: 2, firstColor: BLACK })
			expectStripedTile({ coordinate: 2, stripeCount: 3, firstColor: TRANSPARENT })
			expectStripedTile({ coordinate: 3, stripeCount: 4, firstColor: TRANSPARENT })
		})

		it('around frame 525 each tile has twice its original stripe count', () => {
			const houndstoothOverrides = deepClone(ginghamChevronContinuumAnimationTestHoundstoothOverrides)
			houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(525)
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			expectStripedTile({ coordinate: 0, stripeCount: 2, firstColor: BLACK })
			expectStripedTile({ coordinate: 1, stripeCount: 4, firstColor: TRANSPARENT })
			expectStripedTile({ coordinate: 2, stripeCount: 6, firstColor: BLACK })
			expectStripedTile({ coordinate: 3, stripeCount: 8, firstColor: TRANSPARENT })
		})

		it('around frame 666 each tile has thrice its original stripe count', () => {
			const houndstoothOverrides = deepClone(ginghamChevronContinuumAnimationTestHoundstoothOverrides)
			houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(666)
			state.selectedHoundstoothEffects = [ ginghamChevronContinuumEffect ]
			activateTestMarkerCanvas()
			state.animating = true

			executeSelectedHoundstoothEffects({ houndstoothOverrides })

			expectStripedTile({ coordinate: 0, stripeCount: 3, firstColor: BLACK })
			expectStripedTile({ coordinate: 1, stripeCount: 6, firstColor: BLACK })
			expectStripedTile({ coordinate: 2, stripeCount: 9, firstColor: TRANSPARENT })
			expectStripedTile({ coordinate: 3, stripeCount: 12, firstColor: TRANSPARENT })
		})
	})
})

const expectStripedTile = ({ coordinate, stripeCount, firstColor }) => {
	const areaSize = getFromBasePatternOrDefault(TILE_SIZE) as number
	iterator(stripeCount).forEach(stripe => {
		expect(sectionCenterIsColor({
			areaOrigin: [ coordinate * areaSize, coordinate * areaSize ],
			areaSize,
			sectionResolution: stripeCount,
			sectionAddress: [ stripe, stripe ],
			color: stripe % 2 === 0 ? firstColor : firstColor === BLACK ? TRANSPARENT : BLACK,
		})).toBe(true)
	})
}
