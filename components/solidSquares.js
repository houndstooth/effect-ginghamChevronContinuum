import { GRID_SIZE } from '../../shared/common/customize'
import iterator from '../../shared/utilities/iterator'
import maybeSolidSquare from '../components/maybeSolidSquare'

export default () => iterator(GRID_SIZE).forEach(x => iterator(GRID_SIZE).forEach(y => maybeSolidSquare({x, y})))