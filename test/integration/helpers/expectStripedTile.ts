import { Address, Color, Coordinate } from '../../../../../src'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import getFromBasePatternOrDefault from '../../../../../test/helpers/getFromBasePatternOrDefault'
import { TILE_SIZE } from '../../../../../test/helpers/settingsPaths'
import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'

type ExpectStripedTile = { ({}: { diagonalAddress: number, firstColor: Color, stripeCount: number }): void }
const expectStripedTile: ExpectStripedTile = ({ diagonalAddress, firstColor, stripeCount }) => {
	const areaSize = getFromBasePatternOrDefault(TILE_SIZE) as any
	iterator(stripeCount).forEach(stripe => {
		expect(sectionCenterIsColor({
			areaOrigin: [ diagonalAddress * areaSize as any, diagonalAddress * areaSize as any ] as Coordinate,
			areaSize,
			color: stripe % 2 === 0 ? firstColor : firstColor === BLACK ? TRANSPARENT : BLACK,
			sectionAddress: [ stripe, stripe ] as Address,
			sectionResolution: stripeCount,
		})).toBe(true)
	})
}

export default expectStripedTile
