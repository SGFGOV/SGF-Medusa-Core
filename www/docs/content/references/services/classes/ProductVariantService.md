# Class: ProductVariantService

## Hierarchy

- `TransactionBaseService`

  ↳ **`ProductVariantService`**

## Constructors

### constructor

• **new ProductVariantService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:75](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L75)
=======
[medusa/src/services/product-variant.ts:75](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L75)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### cartRepository\_

• `Protected` `Readonly` **cartRepository\_**: `Repository`<`Cart`\> & { `findOneWithRelations`: (`relations`: `FindOptionsRelations`<`Cart`\>, `optionsWithoutRelations`: `Omit`<`FindManyOptions`<`Cart`\>, ``"relations"``\>) => `Promise`<`Cart`\> ; `findWithRelations`: (`relations`: `FindOptionsRelations`<`Cart`\>, `optionsWithoutRelations`: `Omit`<`FindManyOptions`<`Cart`\>, ``"relations"``\>) => `Promise`<`Cart`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:73](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L73)
=======
[medusa/src/services/product-variant.ts:73](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L73)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### eventBus\_

• `Protected` `Readonly` **eventBus\_**: [`EventBusService`](EventBusService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:67](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L67)
=======
[medusa/src/services/product-variant.ts:67](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L67)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### moneyAmountRepository\_

• `Protected` `Readonly` **moneyAmountRepository\_**: `Repository`<`MoneyAmount`\> & { `addPriceListPrices`: (`priceListId`: `string`, `prices`: `PriceListPriceCreateInput`[], `overrideExisting`: `boolean`) => `Promise`<`MoneyAmount`[]\> ; `deletePriceListPrices`: (`priceListId`: `string`, `moneyAmountIds`: `string`[]) => `Promise`<`void`\> ; `deleteVariantPricesNotIn`: (`variantIdOrData`: `string` \| { `prices`: `ProductVariantPrice`[] ; `variantId`: `string`  }[], `prices?`: `Price`[]) => `Promise`<`void`\> ; `findManyForVariantInPriceList`: (`variant_id`: `string`, `price_list_id`: `string`, `requiresPriceList`: `boolean`) => `Promise`<[`MoneyAmount`[], `number`]\> ; `findManyForVariantInRegion`: (`variant_id`: `string`, `region_id?`: `string`, `currency_code?`: `string`, `customer_id?`: `string`, `include_discount_prices?`: `boolean`, `include_tax_inclusive_pricing`: `boolean`) => `Promise`<[`MoneyAmount`[], `number`]\> ; `findManyForVariantsInRegion`: (`variant_ids`: `string` \| `string`[], `region_id?`: `string`, `currency_code?`: `string`, `customer_id?`: `string`, `include_discount_prices?`: `boolean`, `include_tax_inclusive_pricing`: `boolean`) => `Promise`<[`Record`<`string`, `MoneyAmount`[]\>, `number`]\> ; `findVariantPricesNotIn`: (`variantId`: `string`, `prices`: `Price`[]) => `Promise`<`MoneyAmount`[]\> ; `insertBulk`: (`data`: `_QueryDeepPartialEntity`<`MoneyAmount`\>[]) => `Promise`<`MoneyAmount`[]\> ; `updatePriceListPrices`: (`priceListId`: `string`, `updates`: `PriceListPriceUpdateInput`[]) => `Promise`<`MoneyAmount`[]\> ; `upsertVariantCurrencyPrice`: (`variantId`: `string`, `price`: `Price`) => `Promise`<`MoneyAmount`\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:70](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L70)
=======
[medusa/src/services/product-variant.ts:70](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L70)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### priceSelectionStrategy\_

• `Protected` `Readonly` **priceSelectionStrategy\_**: `IPriceSelectionStrategy`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:69](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L69)
=======
[medusa/src/services/product-variant.ts:69](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L69)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### productOptionValueRepository\_

• `Protected` `Readonly` **productOptionValueRepository\_**: `Repository`<`ProductOptionValue`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:72](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L72)
=======
[medusa/src/services/product-variant.ts:72](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L72)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### productRepository\_

• `Protected` `Readonly` **productRepository\_**: `Repository`<`Product`\> & { `_applyCategoriesQuery`: (`qb`: `SelectQueryBuilder`<`Product`\>, `__namedParameters`: `Object`) => `SelectQueryBuilder`<`Product`\> ; `_findWithRelations`: (`__namedParameters`: { `idsOrOptionsWithoutRelations`: `string`[] \| `FindWithoutRelationsOptions` ; `relations`: `string`[] ; `shouldCount`: `boolean` ; `withDeleted`: `boolean`  }) => `Promise`<[`Product`[], `number`]\> ; `bulkAddToCollection`: (`productIds`: `string`[], `collectionId`: `string`) => `Promise`<`Product`[]\> ; `bulkRemoveFromCollection`: (`productIds`: `string`[], `collectionId`: `string`) => `Promise`<`Product`[]\> ; `findOneWithRelations`: (`relations`: `string`[], `optionsWithoutRelations`: `FindWithoutRelationsOptions`) => `Promise`<`Product`\> ; `findWithRelations`: (`relations`: `string`[], `idsOrOptionsWithoutRelations`: `string`[] \| `FindWithoutRelationsOptions`, `withDeleted`: `boolean`) => `Promise`<`Product`[]\> ; `findWithRelationsAndCount`: (`relations`: `string`[], `idsOrOptionsWithoutRelations`: `FindWithoutRelationsOptions`) => `Promise`<[`Product`[], `number`]\> ; `getFreeTextSearchResultsAndCount`: (`q`: `string`, `options`: `FindWithoutRelationsOptions`, `relations`: `string`[]) => `Promise`<[`Product`[], `number`]\> ; `isProductInSalesChannels`: (`id`: `string`, `salesChannelIds`: `string`[]) => `Promise`<`boolean`\> ; `queryProducts`: (`optionsWithoutRelations`: `FindWithoutRelationsOptions`, `shouldCount`: `boolean`) => `Promise`<[`Product`[], `number`]\> ; `queryProductsWithIds`: (`__namedParameters`: { `entityIds`: `string`[] ; `groupedRelations`: { `[toplevel: string]`: `string`[];  } ; `order?`: { `[column: string]`: ``"ASC"`` \| ``"DESC"``;  } ; `select?`: keyof `Product`[] ; `where?`: `FindOptionsWhere`<`Product`\> ; `withDeleted?`: `boolean`  }) => `Promise`<`Product`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:66](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L66)
=======
[medusa/src/services/product-variant.ts:66](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L66)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### productVariantRepository\_

• `Protected` `Readonly` **productVariantRepository\_**: `Repository`<`ProductVariant`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:65](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L65)
=======
[medusa/src/services/product-variant.ts:65](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L65)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### regionService\_

• `Protected` `Readonly` **regionService\_**: [`RegionService`](RegionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:68](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L68)
=======
[medusa/src/services/product-variant.ts:68](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L68)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### Events

▪ `Static` **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CREATED` | `string` |
| `DELETED` | `string` |
| `UPDATED` | `string` |

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:59](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L59)
=======
[medusa/src/services/product-variant.ts:59](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L59)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

## Methods

### addOptionValue

▸ **addOptionValue**(`variantId`, `optionId`, `optionValue`): `Promise`<`ProductOptionValue`\>

Adds option value to a variant.
Fails when product with variant does not exist or
if that product does not have an option with the given
option id. Fails if given variant is not found.
Option value must be of type string or number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the variant to decorate. |
| `optionId` | `string` | the option from product. |
| `optionValue` | `string` | option value to add. |

#### Returns

`Promise`<`ProductOptionValue`\>

the result of the update operation.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:836](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L836)
=======
[medusa/src/services/product-variant.ts:836](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L836)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### atomicPhase\_

▸ `Protected` **atomicPhase_**<`TResult`, `TError`\>(`work`, `isolationOrErrorHandler?`, `maybeErrorHandlerOrDontFail?`): `Promise`<`TResult`\>

Wraps some work within a transactional block. If the service already has
a transaction manager attached this will be reused, otherwise a new
transaction manager is created.

#### Type parameters

| Name |
| :------ |
| `TResult` |
| `TError` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `work` | (`transactionManager`: `EntityManager`) => `Promise`<`TResult`\> | the transactional work to be done |
| `isolationOrErrorHandler?` | `IsolationLevel` \| (`error`: `TError`) => `Promise`<`void` \| `TResult`\> | the isolation level to be used for the work. |
| `maybeErrorHandlerOrDontFail?` | (`error`: `TError`) => `Promise`<`void` \| `TResult`\> | Potential error handler |

#### Returns

`Promise`<`TResult`\>

the result of the transactional work

#### Inherited from

TransactionBaseService.atomicPhase\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### create

▸ **create**<`TVariants`, `TOutput`\>(`productOrProductId`, `variants`): `Promise`<`TOutput`\>

Creates an unpublished product variant. Will validate against parent product
to ensure that the variant can in fact be created.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TVariants` | extends `CreateProductVariantInput` \| `CreateProductVariantInput`[] |
| `TOutput` | `TVariants` extends `CreateProductVariantInput`[] ? `CreateProductVariantInput`[] : `CreateProductVariantInput` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productOrProductId` | `string` \| `Product` | the product the variant will be added to |
| `variants` | `CreateProductVariantInput` \| `CreateProductVariantInput`[] |  |

#### Returns

`Promise`<`TOutput`\>

resolves to the creation result.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:168](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L168)
=======
[medusa/src/services/product-variant.ts:168](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L168)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### delete

▸ **delete**(`variantIds`): `Promise`<`void`\>

Deletes variant or variants.
Will never fail due to delete being idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantIds` | `string` \| `string`[] | the id of the variant to delete. Must be   castable as an ObjectId |

#### Returns

`Promise`<`void`\>

empty promise

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:1006](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L1006)
=======
[medusa/src/services/product-variant.ts:1006](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L1006)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### deleteOptionValue

▸ **deleteOptionValue**(`variantId`, `optionId`): `Promise`<`void`\>

Deletes option value from given variant.
Will never fail due to delete being idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the variant to decorate. |
| `optionId` | `string` | the option from product. |

#### Returns

`Promise`<`void`\>

empty promise

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:863](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L863)
=======
[medusa/src/services/product-variant.ts:863](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L863)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### getFreeTextQueryBuilder\_

▸ **getFreeTextQueryBuilder_**(`variantRepo`, `query`, `q?`): `SelectQueryBuilder`<`ProductVariant`\>

Lists variants based on the provided parameters and includes the count of
variants that match the query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantRepo` | `Repository`<`ProductVariant`\> | the variant repository |
| `query` | `FindWithRelationsOptions` | object that defines the scope for what should be returned |
| `q?` | `string` | free text query |

#### Returns

`SelectQueryBuilder`<`ProductVariant`\>

an array containing the products as the first element and the total
  count of products that matches the query as the second element.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:1069](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L1069)
=======
[medusa/src/services/product-variant.ts:1069](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L1069)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### getRegionPrice

▸ **getRegionPrice**(`variantId`, `context`): `Promise`<``null`` \| `number`\>

Gets the price specific to a region. If no region specific money amount
exists the function will try to use a currency price. If no default
currency price exists the function will throw an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the id of the variant to get price from |
| `context` | `GetRegionPriceContext` | context for getting region price |

#### Returns

`Promise`<``null`` \| `number`\>

the price specific to the region

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:711](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L711)
=======
[medusa/src/services/product-variant.ts:711](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L711)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### isVariantInSalesChannels

▸ **isVariantInSalesChannels**(`id`, `salesChannelIds`): `Promise`<`boolean`\>

Check if the variant is assigned to at least one of the provided sales channels.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | product variant id |
| `salesChannelIds` | `string`[] | an array of sales channel ids |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:1044](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L1044)
=======
[medusa/src/services/product-variant.ts:1044](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L1044)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### list

▸ **list**(`selector`, `config?`): `Promise`<`ProductVariant`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `FilterableProductVariantProps` | the query object for find |
| `config` | `FindConfig`<`ProductVariant`\> & `PriceSelectionContext` | query config object for variant retrieval |

#### Returns

`Promise`<`ProductVariant`[]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:952](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L952)
=======
[medusa/src/services/product-variant.ts:952](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L952)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### listAndCount

▸ **listAndCount**(`selector`, `config?`): `Promise`<[`ProductVariant`[], `number`]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `FilterableProductVariantProps` | the query object for find |
| `config` | `FindConfig`<`ProductVariant`\> & `PriceSelectionContext` | query config object for variant retrieval |

#### Returns

`Promise`<[`ProductVariant`[], `number`]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:891](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L891)
=======
[medusa/src/services/product-variant.ts:891](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L891)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### retrieve

▸ **retrieve**(`variantId`, `config?`): `Promise`<`ProductVariant`\>

Gets a product variant by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the id of the product to get. |
| `config` | `FindConfig`<`ProductVariant`\> & `PriceSelectionContext` | query config object for variant retrieval. |

#### Returns

`Promise`<`ProductVariant`\>

the product document.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:104](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L104)
=======
[medusa/src/services/product-variant.ts:104](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L104)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### retrieveBySKU

▸ **retrieveBySKU**(`sku`, `config?`): `Promise`<`ProductVariant`\>

Gets a product variant by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sku` | `string` | The unique stock keeping unit used to identify the product variant. |
| `config` | `FindConfig`<`ProductVariant`\> & `PriceSelectionContext` | query config object for variant retrieval. |

#### Returns

`Promise`<`ProductVariant`\>

the product document.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:132](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L132)
=======
[medusa/src/services/product-variant.ts:132](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L132)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### setCurrencyPrice

▸ **setCurrencyPrice**(`variantId`, `price`): `Promise`<`MoneyAmount`\>

**`Deprecated`**

use addOrUpdateCurrencyPrices instead
Sets the default price for the given currency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the id of the variant to set prices for |
| `price` | `ProductVariantPrice` | the price for the variant |

#### Returns

`Promise`<`MoneyAmount`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:777](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L777)
=======
[medusa/src/services/product-variant.ts:777](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L777)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### setRegionPrice

▸ **setRegionPrice**(`variantId`, `price`): `Promise`<`MoneyAmount`\>

**`Deprecated`**

use addOrUpdateRegionPrices instead
Sets the default price of a specific region

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the id of the variant to update |
| `price` | `ProductVariantPrice` | the price for the variant. |

#### Returns

`Promise`<`MoneyAmount`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:740](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L740)
=======
[medusa/src/services/product-variant.ts:740](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L740)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### shouldRetryTransaction\_

▸ `Protected` **shouldRetryTransaction_**(`err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Record`<`string`, `unknown`\> \| { `code`: `string`  } |

#### Returns

`boolean`

#### Inherited from

TransactionBaseService.shouldRetryTransaction\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### update

▸ **update**(`variantData`): `Promise`<`ProductVariant`[]\>

Updates a collection of variant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantData` | { `updateData`: `UpdateProductVariantInput` ; `variant`: `ProductVariant`  }[] | a collection of variant and the data to update. |

#### Returns

`Promise`<`ProductVariant`[]\>

resolves to the update result.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:266](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L266)
=======
[medusa/src/services/product-variant.ts:266](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L266)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

▸ **update**(`variantOrVariantId`, `update`): `Promise`<`ProductVariant`\>

Updates a variant.
Price updates should use dedicated methods.
The function will throw, if price updates are attempted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantOrVariantId` | `string` \| `Partial`<`ProductVariant`\> | variant or id of a variant. |
| `update` | `UpdateProductVariantInput` | an object with the update values. |

#### Returns

`Promise`<`ProductVariant`\>

resolves to the update result.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:281](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L281)
=======
[medusa/src/services/product-variant.ts:281](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L281)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

▸ **update**(`variantOrVariantId`, `update`): `Promise`<`ProductVariant`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variantOrVariantId` | `string` \| `Partial`<`ProductVariant`\> |
| `update` | `UpdateProductVariantInput` |

#### Returns

`Promise`<`ProductVariant`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:286](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L286)
=======
[medusa/src/services/product-variant.ts:286](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L286)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### updateBatch

▸ `Protected` **updateBatch**(`variantData`): `Promise`<`ProductVariant`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variantData` | `UpdateProductVariantData`[] |

#### Returns

`Promise`<`ProductVariant`[]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:340](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L340)
=======
[medusa/src/services/product-variant.ts:340](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L340)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### updateOptionValue

▸ **updateOptionValue**(`variantId`, `optionId`, `optionValue`): `Promise`<`ProductOptionValue`\>

Updates variant's option value.
Option value must be of type string or number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the variant to decorate. |
| `optionId` | `string` | the option from product. |
| `optionValue` | `string` | option value to add. |

#### Returns

`Promise`<`ProductOptionValue`\>

the result of the update operation.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:798](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L798)
=======
[medusa/src/services/product-variant.ts:798](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L798)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### updateVariantPrices

▸ **updateVariantPrices**(`data`): `Promise`<`void`\>

Updates variant/prices collection.
Deletes any prices that are not in the update object, and is not associated with a price list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UpdateVariantPricesData`[] |

#### Returns

`Promise`<`void`\>

empty promise

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:438](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L438)
=======
[medusa/src/services/product-variant.ts:438](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L438)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

▸ **updateVariantPrices**(`variantId`, `prices`): `Promise`<`void`\>

Updates a variant's prices.
Deletes any prices that are not in the update object, and is not associated with a price list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variantId` | `string` | the id of variant |
| `prices` | `ProductVariantPrice`[] | the update prices |

#### Returns

`Promise`<`void`\>

empty promise

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:447](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L447)
=======
[medusa/src/services/product-variant.ts:447](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L447)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### updateVariantPricesBatch

▸ `Protected` **updateVariantPricesBatch**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UpdateVariantPricesData`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:467](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L467)
=======
[medusa/src/services/product-variant.ts:467](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L467)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### upsertCurrencyPrices

▸ **upsertCurrencyPrices**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | { `price`: `WithRequiredProperty`<`ProductVariantPrice`, ``"currency_code"``\> ; `variantId`: `string`  }[] |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:619](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L619)
=======
[medusa/src/services/product-variant.ts:619](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L619)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### upsertRegionPrices

▸ **upsertRegionPrices**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UpdateVariantRegionPriceData`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:540](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L540)
=======
[medusa/src/services/product-variant.ts:540](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L540)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### validateVariantsToCreate\_

▸ `Protected` **validateVariantsToCreate_**(`product`, `variants`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | `Product` |
| `variants` | `CreateProductVariantInput`[] |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/services/product-variant.ts:1104](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-variant.ts#L1104)
=======
[medusa/src/services/product-variant.ts:1104](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-variant.ts#L1104)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`ProductVariantService`](ProductVariantService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`ProductVariantService`](ProductVariantService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductVariantService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductVariantService.md
