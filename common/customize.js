// setting this to 1 / 2 makes it so that each next diagonal has one more stripe than the previous has
// and hey you actually get some pretty funky stuff if you set this very small
// especially if you animate it non-individually
const THINNING_RATE = 1 / 2
const EACH_SQUARE_IS_ITS_OWN_CONTINUUM = true
const TEMPORAL_THINNING_RATE_OF_SPATIAL_THINNING_RATE = 1.005

export {
	THINNING_RATE,
	EACH_SQUARE_IS_ITS_OWN_CONTINUUM,
	TEMPORAL_THINNING_RATE_OF_SPATIAL_THINNING_RATE
}