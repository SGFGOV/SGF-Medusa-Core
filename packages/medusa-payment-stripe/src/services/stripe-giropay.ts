import StripeBase from "../core/stripe-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class GiropayProviderService extends StripeBase {
  static identifier = PaymentProviderKeys.GIROPAY

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
      ["giropay"]
    )
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["giropay"],
      capture_method: "automatic",
    }
  }
}

export default GiropayProviderService
