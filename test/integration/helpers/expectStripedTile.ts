import { codeUtilities, constants, from, to, Unit } from '../../../../../src'
// tslint:disable-next-line:no-reaching-imports
import { getFromBaseOrDefaultPattern } from '../../../../../src/app/store/getFromBaseOrDefaultPattern'
import { sectionCenterIsColor } from '../../../../../test'
import { ExpectStripedTile } from './types'

const { BLACK, TRANSPARENT } = constants

const expectStripedTile: (_: ExpectStripedTile) => void =
	({ diagonalAddress, firstColor, stripeCount }: ExpectStripedTile): void => {
		const areaSize: Unit = getFromBaseOrDefaultPattern('tileSize')

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

export { expectStripedTile }
