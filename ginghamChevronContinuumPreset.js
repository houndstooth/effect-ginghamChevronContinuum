export default {
	state: {
		stripeCountConfig: {
			mode: 'GINGHAM_CHEVRON_CONTINUUM',
			ginghamChevronContinuum: {
				delta: 1,
				initial: 1
			}
		}
	},
	iterations: {},
	animations: {
		stripeCountConfig: {
			ginghamChevronContinuum: {
				initial: p => p * 1.005,
				delta: p => p * 1.005
			}
		}
	}
}