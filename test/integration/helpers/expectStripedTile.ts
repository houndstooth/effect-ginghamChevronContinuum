import getFromBasePatternOrDefault from '../../../../../test/helpers/getFromBasePatternOrDefault'
import { TILE_SIZE } from '../../../../../test/helpers/settingsPaths'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { Color, Address } from '../../../../../src'

type ExpectStripedTile = { ({}: { diagonalAddress: number, stripeCount: number, firstColor: Color }): void }
const expectStripedTile: ExpectStripedTile = ({ diagonalAddress, stripeCount, firstColor }) => {
	const areaSize = getFromBasePatternOrDefault(TILE_SIZE) as number
	iterator(stripeCount).forEach(stripe => {
		expect(sectionCenterIsColor({
			areaOrigin: [ diagonalAddress * areaSize, diagonalAddress * areaSize ],
			areaSize,
			sectionResolution: stripeCount,
			sectionAddress: [ stripe, stripe ] as Address,
			color: stripe % 2 === 0 ? firstColor : firstColor === BLACK ? TRANSPARENT : BLACK,
		})).toBe(true)
	})
}

export default expectStripedTile
