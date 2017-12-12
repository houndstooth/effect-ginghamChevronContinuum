import { BLACK, codeUtilities, from, patternState, to, TRANSPARENT, Unit } from '../../../../../src/indexForTest'
import { sectionCenterIsColor } from '../../../../../test'
import { ExpectStripedTile } from './types'

const expectStripedTile: (_: ExpectStripedTile) => void =
	({ diagonalAddress, firstColor, stripeCount }: ExpectStripedTile): void => {
		const areaSize: Unit = patternState.tileSettings.tileSize

		codeUtilities.iterator(stripeCount).forEach((stripe: number): void => {
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

export default expectStripedTile
