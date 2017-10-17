import getFromBasePatternOrDefault from '../../../../../test/helpers/getFromBasePatternOrDefault'
import { TILE_SIZE } from '../../../../../test/helpers/settingsPaths'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { Color, Address, Coordinate } from '../../../../../src'

type ExpectStripedTile = { ({}: { diagonalAddress: number, firstColor: Color, stripeCount: number }): void }
const expectStripedTile: ExpectStripedTile = ({ diagonalAddress, firstColor, stripeCount }) => {
	const areaSize = getFromBasePatternOrDefault(TILE_SIZE) as any
	iterator(stripeCount).forEach(stripe => {
		expect(sectionCenterIsColor({
			areaOrigin: [ diagonalAddress * areaSize as any, diagonalAddress * areaSize as any ] as Coordinate,
			areaSize,
			sectionResolution: stripeCount,
			sectionAddress: [ stripe, stripe ] as Address,
			color: stripe % 2 === 0 ? firstColor : firstColor === BLACK ? TRANSPARENT : BLACK,
		})).toBe(true)
	})
}

export default expectStripedTile
