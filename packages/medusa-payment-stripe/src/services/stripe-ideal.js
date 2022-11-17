import StripeBase from "../helpers/stripe-base"

class IdealProviderService extends StripeBase {
  static identifier = "stripe-ideal"

  constructor(
    {
      stripeProviderService,
      customerService,
      totalsService,
      regionService,
      manager,
    },
    options
  ) {
    super(
      {
        stripeProviderService,
        customerService,
        totalsService,
        regionService,
        manager,
      },
      options,
      ["ideal"]
    )
  }

  get paymentIntentOptions() {
    return {
      payment_method_types: ["ideal"],
      capture_method: "automatic",
    }
  }
}

export default IdealProviderService
