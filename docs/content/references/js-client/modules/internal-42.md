# Namespace: internal

## Classes

- [StoreGetProductsPaginationParams](../classes/internal-42.StoreGetProductsPaginationParams.md)
- [StoreGetProductsParams](../classes/internal-42.StoreGetProductsParams.md)
- [StorePostSearchReq](../classes/internal-42.StorePostSearchReq.md)

## Type Aliases

- [StorePaymentCollectionSessionsReq](../classes/internal-42.StorePaymentCollectionSessionsReq.md)
- [StorePostPaymentCollectionsBatchSessionsAuthorizeReq](../classes/internal-42.StorePostPaymentCollectionsBatchSessionsAuthorizeReq.md)
- [StorePostPaymentCollectionsBatchSessionsReq](../classes/internal-42.StorePostPaymentCollectionsBatchSessionsReq.md)
- [StorePostPaymentCollectionsSessionsReq](../classes/internal-42.StorePostPaymentCollectionsSessionsReq.md)

#### Index signature

▪ [k: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hits` | `unknown`[] |

#### Defined in

medusa/dist/api/routes/store/products/index.d.ts:12

___

### StoreProductsListRes

Ƭ **StoreProductsListRes**: [`PaginatedResponse`](internal-2.md#paginatedresponse) & { `products`: [`Product`](../classes/internal.Product.md)[]  }

#### Defined in

medusa/dist/api/routes/store/products/index.d.ts:16

___

### StorePaymentCollectionsRes

Ƭ **StorePaymentCollectionsRes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payment_collection` | [`PaymentCollection`](../classes/internal.PaymentCollection.md) |

#### Defined in

medusa/dist/api/routes/store/payment-collections/index.d.ts:7

___

### StorePaymentCollectionsSessionRes

Ƭ **StorePaymentCollectionsSessionRes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payment_session` | [`PaymentSession`](../classes/internal.PaymentSession.md) |

#### Defined in

medusa/dist/api/routes/store/payment-collections/index.d.ts:10
