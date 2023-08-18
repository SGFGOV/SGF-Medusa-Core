# Class: LineItemService

## Hierarchy

- `TransactionBaseService`

  ↳ **`LineItemService`**

## Constructors

### constructor

• **new LineItemService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `InjectedDependencies` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L56)
=======
[medusa/src/services/line-item.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### cartRepository\_

• `Protected` `Readonly` **cartRepository\_**: `Repository`<`Cart`\> & { `findOneWithRelations`: (`relations`: `FindOptionsRelations`<`Cart`\>, `optionsWithoutRelations`: `Omit`<`FindManyOptions`<`Cart`\>, ``"relations"``\>) => `Promise`<`Cart`\> ; `findWithRelations`: (`relations`: `FindOptionsRelations`<`Cart`\>, `optionsWithoutRelations`: `Omit`<`FindManyOptions`<`Cart`\>, ``"relations"``\>) => `Promise`<`Cart`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:47](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L47)
=======
[medusa/src/services/line-item.ts:47](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L47)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### featureFlagRouter\_

• `Protected` `Readonly` **featureFlagRouter\_**: `FlagRouter`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:52](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L52)
=======
[medusa/src/services/line-item.ts:52](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L52)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### itemTaxLineRepo\_

• `Protected` `Readonly` **itemTaxLineRepo\_**: `Repository`<`LineItemTaxLine`\> & { `deleteForCart`: (`cartId`: `string`) => `Promise`<`void`\> ; `upsertLines`: (`lines`: `LineItemTaxLine`[]) => `Promise`<`LineItemTaxLine`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:46](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L46)
=======
[medusa/src/services/line-item.ts:46](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L46)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### lineItemAdjustmentService\_

• `Protected` `Readonly` **lineItemAdjustmentService\_**: [`LineItemAdjustmentService`](LineItemAdjustmentService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:53](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L53)
=======
[medusa/src/services/line-item.ts:53](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L53)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### lineItemRepository\_

• `Protected` `Readonly` **lineItemRepository\_**: `Repository`<`LineItem`\> & { `findByReturn`: (`returnId`: `string`) => `Promise`<`LineItem` & { `return_item`: `ReturnItem`  }[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:45](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L45)
=======
[medusa/src/services/line-item.ts:45](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L45)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### pricingService\_

• `Protected` `Readonly` **pricingService\_**: [`PricingService`](PricingService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:50](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L50)
=======
[medusa/src/services/line-item.ts:50](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L50)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### productService\_

• `Protected` `Readonly` **productService\_**: [`ProductService`](ProductService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:49](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L49)
=======
[medusa/src/services/line-item.ts:49](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L49)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### productVariantService\_

• `Protected` `Readonly` **productVariantService\_**: [`ProductVariantService`](ProductVariantService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:48](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L48)
=======
[medusa/src/services/line-item.ts:48](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L48)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### regionService\_

• `Protected` `Readonly` **regionService\_**: [`RegionService`](RegionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:51](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L51)
=======
[medusa/src/services/line-item.ts:51](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L51)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### taxProviderService\_

• `Protected` `Readonly` **taxProviderService\_**: [`TaxProviderService`](TaxProviderService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:54](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L54)
=======
[medusa/src/services/line-item.ts:54](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L54)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

## Methods

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

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### cloneTo

▸ **cloneTo**(`ids`, `data?`, `options?`): `Promise`<`LineItem`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string` \| `string`[] |
| `data` | `DeepPartial`<`LineItem`\> |
| `options` | `Object` |
| `options.setOriginalLineItemId?` | `boolean` |

#### Returns

`Promise`<`LineItem`[]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:513](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L513)
=======
[medusa/src/services/line-item.ts:514](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L514)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### create

▸ **create**<`T`, `TResult`\>(`data`): `Promise`<`TResult`\>

Create a line item

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `LineItem` \| `LineItem`[] |
| `TResult` | `T` extends `LineItem`[] ? `LineItem`[] : `LineItem` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | the line item object to create |

#### Returns

`Promise`<`TResult`\>

the created line item

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:392](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L392)
=======
[medusa/src/services/line-item.ts:392](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L392)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### createReturnLines

▸ **createReturnLines**(`returnId`, `cartId`): `Promise`<`LineItem`[]\>

Creates return line items for a given cart based on the return items in a
return.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnId` | `string` | the id to generate return items from. |
| `cartId` | `string` | the cart to assign the return line items to. |

#### Returns

`Promise`<`LineItem`[]\>

the created line items

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:130](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L130)
=======
[medusa/src/services/line-item.ts:130](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L130)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### createTaxLine

▸ **createTaxLine**(`args`): `LineItemTaxLine`

Create a line item tax line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `DeepPartial`<`LineItemTaxLine`\> | tax line partial passed to the repo create method |

#### Returns

`LineItemTaxLine`

a new line item tax line

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:505](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L505)
=======
[medusa/src/services/line-item.ts:506](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L506)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### delete

▸ **delete**(`id`): `Promise`<`undefined` \| ``null`` \| `LineItem`\>

Deletes a line item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the line item to delete |

#### Returns

`Promise`<`undefined` \| ``null`` \| `LineItem`\>

the result of the delete operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:465](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L465)
=======
[medusa/src/services/line-item.ts:465](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L465)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### deleteWithTaxLines

▸ **deleteWithTaxLines**(`id`): `Promise`<`undefined` \| ``null`` \| `LineItem`\>

**`Deprecated`**

no the cascade on the entity takes care of it
Deletes a line item with the tax lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the line item to delete |

#### Returns

`Promise`<`undefined` \| ``null`` \| `LineItem`\>

the result of the delete operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:484](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L484)
=======
[medusa/src/services/line-item.ts:485](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L485)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### generate

▸ **generate**<`T`, `TResult`\>(`variantIdOrData`, `regionIdOrContext`, `quantity?`, `context?`): `Promise`<`TResult`\>

Generate a single or multiple line item without persisting the data into the db

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` \| `GenerateInputData` \| `GenerateInputData`[] |
| `TResult` | `T` extends `string` ? `LineItem` : `T` extends `LineItem` ? `LineItem` : `LineItem`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `variantIdOrData` | `T` |
| `regionIdOrContext` | `T` extends `string` ? `string` : `GenerateLineItemContext` |
| `quantity?` | `number` |
| `context` | `GenerateLineItemContext` |

#### Returns

`Promise`<`TResult`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:191](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L191)
=======
[medusa/src/services/line-item.ts:191](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L191)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### generateLineItem

▸ `Protected` **generateLineItem**(`variant`, `quantity`, `context`): `Promise`<`LineItem`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variant` | `Object` |
| `variant.id` | `string` |
| `variant.product` | `Object` |
| `variant.product.discountable` | `boolean` |
| `variant.product.is_giftcard` | `boolean` |
| `variant.product.thumbnail` | ``null`` \| `string` |
| `variant.product.title` | `string` |
| `variant.product_id` | `string` |
| `variant.title` | `string` |
| `quantity` | `number` |
| `context` | `GenerateLineItemContext` & { `variantPricing`: `ProductVariantPricing`  } |

#### Returns

`Promise`<`LineItem`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:316](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L316)
=======
[medusa/src/services/line-item.ts:316](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L316)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### list

▸ **list**(`selector`, `config?`): `Promise`<`LineItem`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `Selector`<`LineItem`\> |
| `config` | `FindConfig`<`LineItem`\> |

#### Returns

`Promise`<`LineItem`[]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:83](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L83)
=======
[medusa/src/services/line-item.ts:83](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L83)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### retrieve

▸ **retrieve**(`id`, `config?`): `Promise`<`LineItem`\>

Retrieves a line item by its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the line item to retrieve |
| `config` | `Object` | the config to be used at query building |

#### Returns

`Promise`<`LineItem`\>

the line item

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:104](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L104)
=======
[medusa/src/services/line-item.ts:104](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L104)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### update

▸ **update**(`idOrSelector`, `data`): `Promise`<`LineItem`[]\>

Updates a line item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idOrSelector` | `string` \| `Selector`<`LineItem`\> | the id or selector of the line item(s) to update |
| `data` | `Partial`<`LineItem`\> | the properties to update the line item(s) |

#### Returns

`Promise`<`LineItem`[]\>

the updated line item(s)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:422](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L422)
=======
[medusa/src/services/line-item.ts:422](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L422)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### validateGenerateArguments

▸ `Protected` **validateGenerateArguments**<`T`, `TResult`\>(`variantIdOrData`, `regionIdOrContext`, `quantity?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` \| `GenerateInputData` \| `GenerateInputData`[] |
| `TResult` | `T` extends `string` ? `LineItem` : `T` extends `LineItem` ? `LineItem` : `LineItem`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `variantIdOrData` | `string` \| `T` |
| `regionIdOrContext` | `T` extends `string` ? `string` : `GenerateLineItemContext` |
| `quantity?` | `number` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/services/line-item.ts:584](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/line-item.ts#L584)
=======
[medusa/src/services/line-item.ts:585](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/line-item.ts#L585)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`LineItemService`](LineItemService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`LineItemService`](LineItemService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/LineItemService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/LineItemService.md