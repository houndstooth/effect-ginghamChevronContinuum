import execute from '../../../../src/application/execute'
import composeMainHoundstooth from '../../../../src/store/composeMainHoundstooth'
import tileSectorCenterIsColor from '../../../../test/integration/helpers/tileSectorCenterIsColor'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import ginghamChevronContinuumEffect from '../../effects/ginghamChevronContinuumEffect'
import getFromBasePatternOrDefault from '../../../../test/helpers/getFromBasePatternOrDefault'
import settingsPaths from '../../../../test/helpers/settingsPaths'

describe('gingham chevron continuum effect', () => {
	it('each new diagonal row has an extra stripe', () => {
		const tileSizeInPixels = getFromBasePatternOrDefault(settingsPaths.TILE_SIZE)
		composeMainHoundstooth({ houndstoothEffects: [ ginghamChevronContinuumEffect ] })
		activateTestMarkerCanvas()

		execute()

		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 0 * tileSizeInPixels, 0 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 0,
			y: 0,
			n: 1,
			color: BLACK,
		})).toBe(true)

		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 1 * tileSizeInPixels, 1 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 0,
			y: 0,
			n: 2,
			color: BLACK,
		})).toBe(true)
		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 1 * tileSizeInPixels, 1 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 1,
			y: 1,
			n: 2,
			color: TRANSPARENT,
		})).toBe(true)

		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 2 * tileSizeInPixels, 2 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 0,
			y: 0,
			n: 3,
			color: TRANSPARENT,
		})).toBe(true)
		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 2 * tileSizeInPixels, 2 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 1,
			y: 1,
			n: 3,
			color: BLACK,
		})).toBe(true)
		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 2 * tileSizeInPixels, 2 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 2,
			y: 2,
			n: 3,
			color: TRANSPARENT,
		})).toBe(true)

		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 0,
			y: 0,
			n: 4,
			color: TRANSPARENT,
		})).toBe(true)
		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 1,
			y: 1,
			n: 4,
			color: BLACK,
		})).toBe(true)
		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 2,
			y: 2,
			n: 4,
			color: TRANSPARENT,
		})).toBe(true)
		expect(tileSectorCenterIsColor({
			id: 1,
			originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ],
			tileSizeInPixels,
			x: 3,
			y: 3,
			n: 4,
			color: BLACK,
		})).toBe(true)
	})
})
