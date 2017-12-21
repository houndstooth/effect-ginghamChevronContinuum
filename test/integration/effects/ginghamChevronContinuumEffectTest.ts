import {
	BLACK,
	executeEffect,
	from,
	patternState,
	to,
	TRANSPARENT,
	Unit,
} from '../../../../../src/indexForTest'
import { sectionCenterIsColor, setAppStateForEffectTests } from '../../../../../test'
import { ginghamChevronContinuumEffect } from '../../../effects'
import { expectStripedTile } from '../helpers'

describe('gingham chevron continuum effect', () => {
	beforeEach(() => {
		setAppStateForEffectTests.setAvailableEffects({ 'gingham-chevron-continuum': ginghamChevronContinuumEffect })
		setAppStateForEffectTests.setSelectedEffects([ 'gingham-chevron-continuum' ])
	})

	it('each new diagonal row has an extra stripe', async (done: DoneFn) => {
		const areaSize: Unit = patternState.tileSettings.tileSize
		setAppStateForEffectTests.setOverrides({ basePattern: { gridSettings: { tileResolution: 8 } } })

		executeEffect.default()

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
		beforeEach(() => {
			setAppStateForEffectTests.setOverrides({
				basePattern: {
					gridSettings: { tileResolution: 4 },
					tileSettings: { tileSize: to.Unit(50) },
				},
			})
		})

		it('frame 0 looks just like the normal pattern', async (done: DoneFn) => {
			setAppStateForEffectTests.setCurrentFrame(to.Frame(0))

			executeEffect.default()

			setTimeout(() => {
				expectStripedTile({ diagonalAddress: 0, stripeCount: 1, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 1, stripeCount: 2, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 2, stripeCount: 3, firstColor: TRANSPARENT })
				expectStripedTile({ diagonalAddress: 3, stripeCount: 4, firstColor: TRANSPARENT })

				done()
			},         0)
		})

		it('around frame 720 each tile has twice its original stripe count', async (done: DoneFn) => {
			setAppStateForEffectTests.setCurrentFrame(to.Frame(720))

			executeEffect.default()

			setTimeout(() => {
				expectStripedTile({ diagonalAddress: 0, stripeCount: 2, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 1, stripeCount: 4, firstColor: TRANSPARENT })
				expectStripedTile({ diagonalAddress: 2, stripeCount: 6, firstColor: BLACK })
				expectStripedTile({ diagonalAddress: 3, stripeCount: 8, firstColor: TRANSPARENT })

				done()
			},         0)
		})

		it('around frame 1111 each tile has thrice its original stripe count', async (done: DoneFn) => {
			setAppStateForEffectTests.setCurrentFrame(to.Frame(1111))

			executeEffect.default()

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
