# Class: DiscountService

Provides layer to manipulate discounts.

**`Implements`**

## Hierarchy

- `TransactionBaseService`

  ↳ **`DiscountService`**

## Constructors

### constructor

• **new DiscountService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:71](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L71)
=======
[medusa/src/services/discount.ts:71](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L71)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### customerService\_

• `Protected` `Readonly` **customerService\_**: [`CustomerService`](CustomerService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:58](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L58)
=======
[medusa/src/services/discount.ts:58](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L58)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### discountConditionRepository\_

• `Protected` `Readonly` **discountConditionRepository\_**: `Repository`<`DiscountCondition`\> & { `addConditionResources`: (`conditionId`: `string`, `resourceIds`: (`string` \| { `id`: `string`  })[], `type`: `DiscountConditionType`, `overrideExisting`: `boolean`) => `Promise`<(`DiscountConditionProduct` \| `DiscountConditionProductType` \| `DiscountConditionProductCollection` \| `DiscountConditionProductTag` \| `DiscountConditionCustomerGroup`)[]\> ; `canApplyForCustomer`: (`discountRuleId`: `string`, `customerId`: `string`) => `Promise`<`boolean`\> ; `findOneWithDiscount`: (`conditionId`: `string`, `discountId`: `string`) => `Promise`<`undefined` \| `DiscountCondition` & { `discount`: `Discount`  }\> ; `getJoinTableResourceIdentifiers`: (`type`: `string`) => { `conditionTable`: `DiscountConditionResourceType` ; `joinTable`: `string` ; `joinTableForeignKey`: `DiscountConditionJoinTableForeignKey` ; `joinTableKey`: `string` ; `resourceKey`: `string`  } ; `isValidForProduct`: (`discountRuleId`: `string`, `productId`: `string`) => `Promise`<`boolean`\> ; `queryConditionTable`: (`__namedParameters`: `Object`) => `Promise`<`number`\> ; `removeConditionResources`: (`id`: `string`, `type`: `DiscountConditionType`, `resourceIds`: (`string` \| { `id`: `string`  })[]) => `Promise`<`void` \| `DeleteResult`\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:62](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L62)
=======
[medusa/src/services/discount.ts:62](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L62)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### discountConditionService\_

• `Protected` `Readonly` **discountConditionService\_**: [`DiscountConditionService`](DiscountConditionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:63](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L63)
=======
[medusa/src/services/discount.ts:63](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L63)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### discountRepository\_

• `Protected` `Readonly` **discountRepository\_**: `Repository`<`Discount`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:57](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L57)
=======
[medusa/src/services/discount.ts:57](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L57)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### discountRuleRepository\_

• `Protected` `Readonly` **discountRuleRepository\_**: `Repository`<`DiscountRule`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:59](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L59)
=======
[medusa/src/services/discount.ts:59](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L59)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### eventBus\_

• `Protected` `Readonly` **eventBus\_**: [`EventBusService`](EventBusService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:68](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L68)
=======
[medusa/src/services/discount.ts:68](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L68)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### featureFlagRouter\_

• `Protected` `Readonly` **featureFlagRouter\_**: `FlagRouter`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:69](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L69)
=======
[medusa/src/services/discount.ts:69](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L69)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### giftCardRepository\_

• `Protected` `Readonly` **giftCardRepository\_**: `Repository`<`GiftCard`\> & { `listGiftCardsAndCount`: (`query`: `ExtendedFindConfig`<`GiftCard`\>, `q?`: `string`) => `Promise`<[`GiftCard`[], `number`]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:60](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L60)
=======
[medusa/src/services/discount.ts:60](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L60)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### newTotalsService\_

• `Protected` `Readonly` **newTotalsService\_**: [`NewTotalsService`](NewTotalsService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:65](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L65)
=======
[medusa/src/services/discount.ts:65](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L65)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### productService\_

• `Protected` `Readonly` **productService\_**: [`ProductService`](ProductService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:66](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L66)
=======
[medusa/src/services/discount.ts:66](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L66)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### regionService\_

• `Protected` `Readonly` **regionService\_**: [`RegionService`](RegionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:67](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L67)
=======
[medusa/src/services/discount.ts:67](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L67)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### totalsService\_

• `Protected` `Readonly` **totalsService\_**: [`TotalsService`](TotalsService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:64](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L64)
=======
[medusa/src/services/discount.ts:64](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L64)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

## Methods

### addRegion

▸ **addRegion**(`discountId`, `regionId`): `Promise`<`Discount`\>

Adds a region to the discount regions array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountId` | `string` | id of discount |
| `regionId` | `string` | id of region to add |

#### Returns

`Promise`<`Discount`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:503](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L503)
=======
[medusa/src/services/discount.ts:503](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L503)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### calculateDiscountForLineItem

▸ **calculateDiscountForLineItem**(`discountId`, `lineItem`, `calculationContextData`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discountId` | `string` |
| `lineItem` | `LineItem` |
| `calculationContextData` | `CalculationContextData` |

#### Returns

`Promise`<`number`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:605](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L605)
=======
[medusa/src/services/discount.ts:605](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L605)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### canApplyForCustomer

▸ **canApplyForCustomer**(`discountRuleId`, `customerId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discountRuleId` | `string` |
| `customerId` | `undefined` \| `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:797](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L797)
=======
[medusa/src/services/discount.ts:797](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L797)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### create

▸ **create**(`discount`): `Promise`<`Discount`\>

Creates a discount with provided data given that the data is validated.
Normalizes discount code to uppercase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discount` | `CreateDiscountInput` | the discount data to create |

#### Returns

`Promise`<`Discount`\>

the result of the create operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:178](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L178)
=======
[medusa/src/services/discount.ts:178](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L178)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### createDynamicCode

▸ **createDynamicCode**(`discountId`, `data`): `Promise`<`Discount`\>

Creates a dynamic code for a discount id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountId` | `string` | the id of the discount to create a code for |
| `data` | `CreateDynamicDiscountInput` | the object containing a code to identify the discount by |

#### Returns

`Promise`<`Discount`\>

the newly created dynamic code

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:431](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L431)
=======
[medusa/src/services/discount.ts:431](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L431)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### delete

▸ **delete**(`discountId`): `Promise`<`void`\>

Deletes a discount idempotently

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountId` | `string` | id of discount to delete |

#### Returns

`Promise`<`void`\>

the result of the delete operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:563](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L563)
=======
[medusa/src/services/discount.ts:563](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L563)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### deleteDynamicCode

▸ **deleteDynamicCode**(`discountId`, `code`): `Promise`<`void`\>

Deletes a dynamic code for a discount id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountId` | `string` | the id of the discount to create a code for |
| `code` | `string` | the code to identify the discount by |

#### Returns

`Promise`<`void`\>

the newly created dynamic code

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:482](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L482)
=======
[medusa/src/services/discount.ts:482](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L482)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### hasCustomersGroupCondition

▸ **hasCustomersGroupCondition**(`discount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `discount` | `Discount` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:750](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L750)
=======
[medusa/src/services/discount.ts:750](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L750)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### hasExpired

▸ **hasExpired**(`discount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `discount` | `Discount` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:766](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L766)
=======
[medusa/src/services/discount.ts:766](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L766)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### hasNotStarted

▸ **hasNotStarted**(`discount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `discount` | `Discount` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:762](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L762)
=======
[medusa/src/services/discount.ts:762](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L762)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### hasReachedLimit

▸ **hasReachedLimit**(`discount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `discount` | `Discount` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:756](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L756)
=======
[medusa/src/services/discount.ts:756](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L756)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### isDisabled

▸ **isDisabled**(`discount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `discount` | `Discount` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:774](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L774)
=======
[medusa/src/services/discount.ts:774](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L774)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### isValidForRegion

▸ **isValidForRegion**(`discount`, `region_id`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discount` | `Discount` |
| `region_id` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:778](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L778)
=======
[medusa/src/services/discount.ts:778](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L778)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### list

▸ **list**(`selector?`, `config?`): `Promise`<`Discount`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `FilterableDiscountProps` | the query object for find |
| `config` | `FindConfig`<`Discount`\> | the config object containing query settings |

#### Returns

`Promise`<`Discount`[]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:125](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L125)
=======
[medusa/src/services/discount.ts:125](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L125)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### listAndCount

▸ **listAndCount**(`selector?`, `config?`): `Promise`<[`Discount`[], `number`]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `FilterableDiscountProps` | the query object for find |
| `config` | `FindConfig`<`Discount`\> | the config object containing query settings |

#### Returns

`Promise`<[`Discount`[], `number`]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:142](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L142)
=======
[medusa/src/services/discount.ts:142](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L142)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### listByCodes

▸ **listByCodes**(`discountCodes`, `config?`): `Promise`<`Discount`[]\>

List all the discounts corresponding to the given codes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountCodes` | `string`[] | discount codes of discounts to retrieve |
| `config` | `FindConfig`<`Discount`\> | the config object containing query settings |

#### Returns

`Promise`<`Discount`[]\>

the discounts

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:307](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L307)
=======
[medusa/src/services/discount.ts:307](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L307)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### removeRegion

▸ **removeRegion**(`discountId`, `regionId`): `Promise`<`Discount`\>

Removes a region from the discount regions array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountId` | `string` | id of discount |
| `regionId` | `string` | id of region to remove |

#### Returns

`Promise`<`Discount`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:538](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L538)
=======
[medusa/src/services/discount.ts:538](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L538)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### retrieve

▸ **retrieve**(`discountId`, `config?`): `Promise`<`Discount`\>

Gets a discount by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountId` | `string` | id of discount to retrieve |
| `config` | `FindConfig`<`Discount`\> | the config object containing query settings |

#### Returns

`Promise`<`Discount`\>

the discount

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:244](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L244)
=======
[medusa/src/services/discount.ts:244](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L244)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### retrieveByCode

▸ **retrieveByCode**(`discountCode`, `config?`): `Promise`<`Discount`\>

Gets the discount by discount code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountCode` | `string` | discount code of discount to retrieve |
| `config` | `FindConfig`<`Discount`\> | the config object containing query settings |

#### Returns

`Promise`<`Discount`\>

the discount

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:278](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L278)
=======
[medusa/src/services/discount.ts:278](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L278)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### update

▸ **update**(`discountId`, `update`): `Promise`<`Discount`\>

Updates a discount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountId` | `string` | discount id of discount to update |
| `update` | `UpdateDiscountInput` | the data to update the discount with |

#### Returns

`Promise`<`Discount`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:338](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L338)
=======
[medusa/src/services/discount.ts:338](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L338)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### validateDiscountForCartOrThrow

▸ **validateDiscountForCartOrThrow**(`cart`, `discount`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cart` | `Cart` |
| `discount` | `Discount` \| `Discount`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:678](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L678)
=======
[medusa/src/services/discount.ts:678](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L678)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### validateDiscountForProduct

▸ **validateDiscountForProduct**(`discountRuleId`, `productId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discountRuleId` | `string` |
| `productId` | `undefined` \| `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:577](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L577)
=======
[medusa/src/services/discount.ts:577](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L577)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### validateDiscountRule\_

▸ **validateDiscountRule_**<`T`\>(`discountRule`): `T`

Creates a discount rule with provided data given that the data is validated.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discountRule` | `T` | the discount rule to create |

#### Returns

`T`

the result of the create operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/services/discount.ts:107](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/discount.ts#L107)
=======
[medusa/src/services/discount.ts:107](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/discount.ts#L107)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`DiscountService`](DiscountService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`DiscountService`](DiscountService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/DiscountService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/DiscountService.md
