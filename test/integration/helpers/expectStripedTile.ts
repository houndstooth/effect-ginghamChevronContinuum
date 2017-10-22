import { Color, from, to, Unit } from '../../../../../src'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { getFromBaseOrDefaultPattern } from '../../../../../src/store/getFromBaseOrDefaultPattern'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'

type ExpectStripedTile = (_: { diagonalAddress: number, firstColor: Color, stripeCount: number }) => void
const expectStripedTile: ExpectStripedTile = ({ diagonalAddress, firstColor, stripeCount }) => {
	const areaSize: Unit = getFromBaseOrDefaultPattern('tileSize')
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
