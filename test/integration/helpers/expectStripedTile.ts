import { Unit } from '../../../../../src'
import { getFromBaseOrDefaultPattern } from '../../../../../src/app/store/getFromBaseOrDefaultPattern'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import * as from from '../../../../../src/from'
import * as to from '../../../../../src/to'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { ExpectStripedTile } from './types'

const expectStripedTile: (_: ExpectStripedTile) => void =
	({ diagonalAddress, firstColor, stripeCount }: ExpectStripedTile): void => {
		const areaSize: Unit = getFromBaseOrDefaultPattern('tileSize')

		iterator(stripeCount).forEach((stripe: number): void => {
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
