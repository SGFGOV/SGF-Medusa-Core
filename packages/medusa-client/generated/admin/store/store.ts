/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostStoreCurrenciesCode200,
  DeleteStoreCurrenciesCode200,
  GetStore200,
  PostStore200,
  PostStoreBody,
  GetStorePaymentProviders200,
  GetStoreTaxProviders200,
} from ".././model"
import { getClient } from "../../../src/custom-instance"

/**
 * Adds a Currency Code to the available currencies.
 * @summary Add a Currency Code
 */
export const postStoreCurrenciesCode = (code: string) => {
  return getClient<PostStoreCurrenciesCode200>({
    url: `/admin/store/currencies/${code}`,
    method: "post",
  })
}
/**
 * Removes a Currency Code from the available currencies.
 * @summary Remove a Currency Code
 */
export const deleteStoreCurrenciesCode = (code: string) => {
  return getClient<DeleteStoreCurrenciesCode200>({
    url: `/admin/store/currencies/${code}`,
    method: "delete",
  })
}
/**
 * Retrieves the Store details
 * @summary Retrieve Store details.
 */
export const getStore = () => {
  return getClient<GetStore200>({ url: `/admin/store`, method: "get" })
}
/**
 * Updates the Store details
 * @summary Update Store details.
 */
export const postStore = (postStoreBody: PostStoreBody) => {
  return getClient<PostStore200>({
    url: `/admin/store`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postStoreBody,
  })
}
/**
 * Retrieves the configured Payment Providers
 * @summary Retrieve configured Payment Providers
 */
export const getStorePaymentProviders = () => {
  return getClient<GetStorePaymentProviders200>({
    url: `/admin/store/payment-providers`,
    method: "get",
  })
}
/**
 * Retrieves the configured Tax Providers
 * @summary Retrieve configured Tax Providers
 */
export const getStoreTaxProviders = () => {
  return getClient<GetStoreTaxProviders200>({
    url: `/admin/store/tax-providers`,
    method: "get",
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostStoreCurrenciesCodeResult = NonNullable<
  AsyncReturnType<typeof postStoreCurrenciesCode>
>
export type DeleteStoreCurrenciesCodeResult = NonNullable<
  AsyncReturnType<typeof deleteStoreCurrenciesCode>
>
export type GetStoreResult = NonNullable<AsyncReturnType<typeof getStore>>
export type PostStoreResult = NonNullable<AsyncReturnType<typeof postStore>>
export type GetStorePaymentProvidersResult = NonNullable<
  AsyncReturnType<typeof getStorePaymentProviders>
>
export type GetStoreTaxProvidersResult = NonNullable<
  AsyncReturnType<typeof getStoreTaxProviders>
>