export default {
	state: {
		shared: {
			stripeCount: {
				ginghamChevronContinuum: {
					on: true,
					stripeCountIncreasePerDiagonal: 1,
					continuumStartsAtStripeCount: 1
				}
			}
		}
	},
	iterations: {},
	animations: {
		shared: {
			stripeCount: {
				ginghamChevronContinuum: {
					continuumStartsAtStripeCount: p => p * 1.005,
					stripeCountIncreasePerDiagonal: p => p * 1.005
				}
			}
		}
	}
}