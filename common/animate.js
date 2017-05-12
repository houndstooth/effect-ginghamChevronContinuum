import { FRAME_RATE } from '../../shared/common/customize'
import { THINNING_RATE, TEMPORAL_THINNING_RATE_OF_SPATIAL_THINNING_RATE } from '../common/customize'
import execute from './execute'

export default () => {
	let thinningRate = THINNING_RATE
	setInterval(() => {
		thinningRate = thinningRate * TEMPORAL_THINNING_RATE_OF_SPATIAL_THINNING_RATE
		execute({thinningRate})
	}, FRAME_RATE)
}