import iterator from '../../shared/utilities/iterator'
import triangularNumber from './triangularNumber'
import inverseTriangularNumber from './inverseTriangularNumber'
import { GRID_SIZE } from '../../shared/common/customize'

const NEEDED_STRIPE_COUNT = triangularNumber(GRID_SIZE + 1)

export default ({thinningRate}) => iterator(NEEDED_STRIPE_COUNT).map(n => inverseTriangularNumber(n) / thinningRate)