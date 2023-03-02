import StripeBase from "../core/stripe-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class BlikProviderService extends StripeBase {
  static identifier = PaymentProviderKeys.BLIK

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
      ["blik"]
    )
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["blik"],
      capture_method: "automatic",
    }
  }
}

export default BlikProviderService
