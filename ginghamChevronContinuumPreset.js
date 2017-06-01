export default {
	state: {
		shared: {
			stripeCountConfig: {
				mode: 'GINGHAM_CHEVRON_CONTINUUM',
				ginghamChevronContinuum: {
					delta: 1,
					initial: 1
				}
			}
		}
	},
	iterations: {},
	animations: {
		shared: {
			stripeCountConfig: {
				ginghamChevronContinuum: {
					initial: p => p * 1.005,
					delta: p => p * 1.005
				}
			}
		}
	}
}