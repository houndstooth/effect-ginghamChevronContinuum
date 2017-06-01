export default {
	state: {
		shared: {
			stripeCount: {
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
			stripeCount: {
				ginghamChevronContinuum: {
					initial: p => p * 1.005,
					delta: p => p * 1.005
				}
			}
		}
	}
}