import { Color, from, to, Unit } from '../../../../../src'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { getFromBasePatternOrDefault } from '../../../../../test/helpers/getFromBasePatternOrDefault'
import { TILE_SIZE } from '../../../../../test/helpers/settingsPaths'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'

type ExpectStripedTile = (_: { diagonalAddress: number, firstColor: Color, stripeCount: number }) => void
const expectStripedTile: ExpectStripedTile = ({ diagonalAddress, firstColor, stripeCount }) => {
	const areaSize: Unit = getFromBasePatternOrDefault(TILE_SIZE)
	iterator(stripeCount).forEach(stripe => {
		expect(sectionCenterIsColor({
			areaOrigin: to.Coordinate([
				diagonalAddress * from.Unit(areaSize),
				diagonalAddress * from.Unit(areaSize),
			]),
			areaSize,
			color: stripe % 2 === 0 ? firstColor : firstColor === BLACK ? TRANSPARENT : BLACK,
			sectionAddress: to.Address([ stripe, stripe ]),
			sectionResolution: stripeCount,
		})).toBe(true)
	})
}

export { expectStripedTile }
