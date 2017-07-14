import execute from '../../../../src/application/execute'
import setup from '../../../../src/application/setup'
import tileSectorCenterIsColor from '../../../../test/helpers/tileSectorCenterIsColor'
import activateTestMarkerCanvas from '../../../../test/helpers/activateTestMarkerCanvas'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import { TILE_SIZE } from '../../../../src/defaults'
import ginghamChevronContinuumEffect from '../../effects/ginghamChevronContinuumEffect'

describe('gingham chevron continuum effect', () => {
	it('each new diagonal row has an extra stripe', () => {
		const tileSizeInPixels = TILE_SIZE
		setup({ effects: [ ginghamChevronContinuumEffect ] })
		activateTestMarkerCanvas()

		execute()

		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 0 * tileSizeInPixels, 0 * tileSizeInPixels ], tileSizeInPixels, x: 0, y: 0, n: 1, color: BLACK })).toBe(true)

		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 1 * tileSizeInPixels, 1 * tileSizeInPixels ], tileSizeInPixels, x: 0, y: 0, n: 2, color: BLACK })).toBe(true)
		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 1 * tileSizeInPixels, 1 * tileSizeInPixels ], tileSizeInPixels, x: 1, y: 1, n: 2, color: TRANSPARENT })).toBe(true)

		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 2 * tileSizeInPixels, 2 * tileSizeInPixels ], tileSizeInPixels, x: 0, y: 0, n: 3, color: TRANSPARENT })).toBe(true)
		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 2 * tileSizeInPixels, 2 * tileSizeInPixels ], tileSizeInPixels, x: 1, y: 1, n: 3, color: BLACK })).toBe(true)
		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 2 * tileSizeInPixels, 2 * tileSizeInPixels ], tileSizeInPixels, x: 2, y: 2, n: 3, color: TRANSPARENT })).toBe(true)

		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ], tileSizeInPixels, x: 0, y: 0, n: 4, color: TRANSPARENT })).toBe(true)
		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ], tileSizeInPixels, x: 1, y: 1, n: 4, color: BLACK })).toBe(true)
		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ], tileSizeInPixels, x: 2, y: 2, n: 4, color: TRANSPARENT })).toBe(true)
		expect(tileSectorCenterIsColor({ id: 1, originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ], tileSizeInPixels, x: 3, y: 3, n: 4, color: BLACK })).toBe(true)
	})
})
