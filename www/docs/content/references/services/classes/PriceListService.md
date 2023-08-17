# Class: PriceListService

Provides layer to manipulate product tags.

## Hierarchy

- `TransactionBaseService`

  ↳ **`PriceListService`**

## Constructors

### constructor

• **new PriceListService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PriceListConstructorProps` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:51](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L51)
=======
[medusa/src/services/price-list.ts:51](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L51)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### customerGroupService\_

• `Protected` `Readonly` **customerGroupService\_**: [`CustomerGroupService`](CustomerGroupService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:42](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L42)
=======
[medusa/src/services/price-list.ts:42](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L42)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### featureFlagRouter\_

• `Protected` `Readonly` **featureFlagRouter\_**: `FlagRouter`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:49](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L49)
=======
[medusa/src/services/price-list.ts:49](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L49)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### moneyAmountRepo\_

• `Protected` `Readonly` **moneyAmountRepo\_**: `Repository`<`MoneyAmount`\> & { `addPriceListPrices`: (`priceListId`: `string`, `prices`: `PriceListPriceCreateInput`[], `overrideExisting`: `boolean`) => `Promise`<`MoneyAmount`[]\> ; `deletePriceListPrices`: (`priceListId`: `string`, `moneyAmountIds`: `string`[]) => `Promise`<`void`\> ; `deleteVariantPricesNotIn`: (`variantIdOrData`: `string` \| { `prices`: `ProductVariantPrice`[] ; `variantId`: `string`  }[], `prices?`: `Price`[]) => `Promise`<`void`\> ; `findManyForVariantInPriceList`: (`variant_id`: `string`, `price_list_id`: `string`, `requiresPriceList`: `boolean`) => `Promise`<[`MoneyAmount`[], `number`]\> ; `findManyForVariantInRegion`: (`variant_id`: `string`, `region_id?`: `string`, `currency_code?`: `string`, `customer_id?`: `string`, `include_discount_prices?`: `boolean`, `include_tax_inclusive_pricing`: `boolean`) => `Promise`<[`MoneyAmount`[], `number`]\> ; `findManyForVariantsInRegion`: (`variant_ids`: `string` \| `string`[], `region_id?`: `string`, `currency_code?`: `string`, `customer_id?`: `string`, `include_discount_prices?`: `boolean`, `include_tax_inclusive_pricing`: `boolean`) => `Promise`<[`Record`<`string`, `MoneyAmount`[]\>, `number`]\> ; `findVariantPricesNotIn`: (`variantId`: `string`, `prices`: `Price`[]) => `Promise`<`MoneyAmount`[]\> ; `insertBulk`: (`data`: `_QueryDeepPartialEntity`<`MoneyAmount`\>[]) => `Promise`<`MoneyAmount`[]\> ; `updatePriceListPrices`: (`priceListId`: `string`, `updates`: `PriceListPriceUpdateInput`[]) => `Promise`<`MoneyAmount`[]\> ; `upsertVariantCurrencyPrice`: (`variantId`: `string`, `price`: `Price`) => `Promise`<`MoneyAmount`\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:47](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L47)
=======
[medusa/src/services/price-list.ts:47](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L47)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### priceListRepo\_

• `Protected` `Readonly` **priceListRepo\_**: `Repository`<`PriceList`\> & { `listAndCount`: (`query`: `ExtendedFindConfig`<`PriceList`\>, `q?`: `string`) => `Promise`<[`PriceList`[], `number`]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:46](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L46)
=======
[medusa/src/services/price-list.ts:46](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L46)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### productService\_

• `Protected` `Readonly` **productService\_**: [`ProductService`](ProductService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:44](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L44)
=======
[medusa/src/services/price-list.ts:44](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L44)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### productVariantRepo\_

• `Protected` `Readonly` **productVariantRepo\_**: `Repository`<`ProductVariant`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:48](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L48)
=======
[medusa/src/services/price-list.ts:48](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L48)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### regionService\_

• `Protected` `Readonly` **regionService\_**: [`RegionService`](RegionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:43](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L43)
=======
[medusa/src/services/price-list.ts:43](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L43)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### variantService\_

• `Protected` `Readonly` **variantService\_**: [`ProductVariantService`](ProductVariantService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:45](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L45)
=======
[medusa/src/services/price-list.ts:45](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L45)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

## Methods

### addCurrencyFromRegion

▸ `Protected` **addCurrencyFromRegion**<`T`\>(`prices`): `Promise`<`T`[]\>

Add `currency_code` to an MA record if `region_id`is passed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PriceListPriceUpdateInput` \| `PriceListPriceCreateInput` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prices` | `T`[] | a list of PriceListPrice(Create/Update)Input records |

#### Returns

`Promise`<`T`[]\>

updated `prices` list

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:492](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L492)
=======
[medusa/src/services/price-list.ts:492](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L492)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### addPrices

▸ **addPrices**(`id`, `prices`, `replace?`): `Promise`<`PriceList`\>

Adds prices to a price list in bulk, optionally replacing all existing prices

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | id of the price list |
| `prices` | `PriceListPriceCreateInput`[] | `undefined` | prices to add |
| `replace` | `boolean` | `false` | whether to replace existing prices |

#### Returns

`Promise`<`PriceList`\>

updated Price List

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:212](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L212)
=======
[medusa/src/services/price-list.ts:212](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L212)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### clearPrices

▸ **clearPrices**(`id`): `Promise`<`void`\>

Removes all prices from a price list and deletes the removed prices in bulk

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the price list |

#### Returns

`Promise`<`void`\>

updated Price List

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:252](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L252)
=======
[medusa/src/services/price-list.ts:252](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L252)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### create

▸ **create**(`priceListObject`): `Promise`<`PriceList`\>

Creates a Price List

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priceListObject` | `CreatePriceListInput` | the Price List to create |

#### Returns

`Promise`<`PriceList`\>

created Price List

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:113](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L113)
=======
[medusa/src/services/price-list.ts:113](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L113)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### delete

▸ **delete**(`id`): `Promise`<`void`\>

Deletes a Price List
Will never fail due to delete being idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the price list |

#### Returns

`Promise`<`void`\>

empty promise

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:266](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L266)
=======
[medusa/src/services/price-list.ts:266](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L266)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### deletePrices

▸ **deletePrices**(`id`, `priceIds`): `Promise`<`void`\>

Removes prices from a price list and deletes the removed prices in bulk

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the price list |
| `priceIds` | `string`[] | ids of the prices to delete |

#### Returns

`Promise`<`void`\>

updated Price List

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:237](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L237)
=======
[medusa/src/services/price-list.ts:237](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L237)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### deleteProductPrices

▸ **deleteProductPrices**(`priceListId`, `productIds`): `Promise`<[`string`[], `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `priceListId` | `string` |
| `productIds` | `string`[] |

#### Returns

`Promise`<[`string`[], `number`]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:419](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L419)
=======
[medusa/src/services/price-list.ts:419](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L419)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### deleteVariantPrices

▸ **deleteVariantPrices**(`priceListId`, `variantIds`): `Promise`<[`string`[], `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `priceListId` | `string` |
| `variantIds` | `string`[] |

#### Returns

`Promise`<[`string`[], `number`]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:456](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L456)
=======
[medusa/src/services/price-list.ts:456](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L456)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### list

▸ **list**(`selector?`, `config?`): `Promise`<`PriceList`[]\>

Lists Price Lists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `FilterablePriceListProps` | the query object for find |
| `config` | `FindConfig`<`PriceList`\> | the config to be used for find |

#### Returns

`Promise`<`PriceList`[]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:286](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L286)
=======
[medusa/src/services/price-list.ts:286](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L286)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### listAndCount

▸ **listAndCount**(`selector?`, `config?`): `Promise`<[`PriceList`[], `number`]\>

Lists Price Lists and adds count

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `FilterablePriceListProps` | the query object for find |
| `config` | `FindConfig`<`PriceList`\> | the config to be used for find |

#### Returns

`Promise`<[`PriceList`[], `number`]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:300](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L300)
=======
[medusa/src/services/price-list.ts:300](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L300)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### listProducts

▸ **listProducts**(`priceListId`, `selector?`, `config?`, `requiresPriceList?`): `Promise`<[`Product`[], `number`]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `priceListId` | `string` | `undefined` |
| `selector` | `FilterableProductProps` \| `Selector`<`Product`\> | `{}` |
| `config` | `FindConfig`<`Product`\> | `undefined` |
| `requiresPriceList` | `boolean` | `false` |

#### Returns

`Promise`<[`Product`[], `number`]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:337](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L337)
=======
[medusa/src/services/price-list.ts:337](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L337)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### listVariants

▸ **listVariants**(`priceListId`, `selector?`, `config?`, `requiresPriceList?`): `Promise`<[`ProductVariant`[], `number`]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `priceListId` | `string` | `undefined` |
| `selector` | `FilterableProductVariantProps` | `{}` |
| `config` | `FindConfig`<`ProductVariant`\> | `undefined` |
| `requiresPriceList` | `boolean` | `false` |

#### Returns

`Promise`<[`ProductVariant`[], `number`]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:385](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L385)
=======
[medusa/src/services/price-list.ts:385](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L385)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### retrieve

▸ **retrieve**(`priceListId`, `config?`): `Promise`<`PriceList`\>

Retrieves a product tag by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priceListId` | `string` | the id of the product tag to retrieve |
| `config` | `FindConfig`<`PriceList`\> | the config to retrieve the tag by |

#### Returns

`Promise`<`PriceList`\>

the collection.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:80](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L80)
=======
[medusa/src/services/price-list.ts:80](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L80)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### update

▸ **update**(`id`, `update`): `Promise`<`PriceList`\>

Updates a Price List

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the Product List to update |
| `update` | `UpdatePriceListInput` | the update to apply |

#### Returns

`Promise`<`PriceList`\>

updated Price List

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:161](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L161)
=======
[medusa/src/services/price-list.ts:161](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L161)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### upsertCustomerGroups\_

▸ `Protected` **upsertCustomerGroups_**(`priceListId`, `customerGroups`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `priceListId` | `string` |
| `customerGroups` | { `id`: `string`  }[] |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/services/price-list.ts:316](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/price-list.ts#L316)
=======
[medusa/src/services/price-list.ts:316](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/price-list.ts#L316)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`PriceListService`](PriceListService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`PriceListService`](PriceListService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/PriceListService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/PriceListService.md
