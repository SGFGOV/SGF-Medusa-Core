# Class: CartService

## Hierarchy

- `TransactionBaseService`

  ↳ **`CartService`**

## Constructors

### constructor

• **new CartService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `InjectedDependencies` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:134](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L134)
=======
[medusa/src/services/cart.ts:134](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L134)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### addressRepository\_

• `Protected` `Readonly` **addressRepository\_**: `Repository`<`Address`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:109](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L109)
=======
[medusa/src/services/cart.ts:109](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L109)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### cartRepository\_

• `Protected` `Readonly` **cartRepository\_**: `Repository`<`Cart`\> & { `findOneWithRelations`: (`relations`: `FindOptionsRelations`<`Cart`\>, `optionsWithoutRelations`: `Omit`<`FindManyOptions`<`Cart`\>, ``"relations"``\>) => `Promise`<`Cart`\> ; `findWithRelations`: (`relations`: `FindOptionsRelations`<`Cart`\>, `optionsWithoutRelations`: `Omit`<`FindManyOptions`<`Cart`\>, ``"relations"``\>) => `Promise`<`Cart`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:108](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L108)
=======
[medusa/src/services/cart.ts:108](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L108)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### customShippingOptionService\_

• `Protected` `Readonly` **customShippingOptionService\_**: [`CustomShippingOptionService`](CustomShippingOptionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:127](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L127)
=======
[medusa/src/services/cart.ts:127](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L127)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### customerService\_

• `Protected` `Readonly` **customerService\_**: [`CustomerService`](CustomerService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:120](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L120)
=======
[medusa/src/services/cart.ts:120](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L120)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### discountService\_

• `Protected` `Readonly` **discountService\_**: [`DiscountService`](DiscountService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:122](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L122)
=======
[medusa/src/services/cart.ts:122](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L122)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### eventBus\_

• `Protected` `Readonly` **eventBus\_**: [`EventBusService`](EventBusService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:112](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L112)
=======
[medusa/src/services/cart.ts:112](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L112)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### featureFlagRouter\_

• `Protected` `Readonly` **featureFlagRouter\_**: `FlagRouter`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:130](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L130)
=======
[medusa/src/services/cart.ts:130](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L130)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### giftCardService\_

• `Protected` `Readonly` **giftCardService\_**: [`GiftCardService`](GiftCardService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:123](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L123)
=======
[medusa/src/services/cart.ts:123](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L123)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### lineItemAdjustmentService\_

• `Protected` `Readonly` **lineItemAdjustmentService\_**: [`LineItemAdjustmentService`](LineItemAdjustmentService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:129](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L129)
=======
[medusa/src/services/cart.ts:129](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L129)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### lineItemRepository\_

• `Protected` `Readonly` **lineItemRepository\_**: `Repository`<`LineItem`\> & { `findByReturn`: (`returnId`: `string`) => `Promise`<`LineItem` & { `return_item`: `ReturnItem`  }[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:111](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L111)
=======
[medusa/src/services/cart.ts:111](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L111)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### lineItemService\_

• `Protected` `Readonly` **lineItemService\_**: [`LineItemService`](LineItemService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:118](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L118)
=======
[medusa/src/services/cart.ts:118](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L118)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### newTotalsService\_

• `Protected` `Readonly` **newTotalsService\_**: [`NewTotalsService`](NewTotalsService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:126](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L126)
=======
[medusa/src/services/cart.ts:126](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L126)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### paymentProviderService\_

• `Protected` `Readonly` **paymentProviderService\_**: [`PaymentProviderService`](PaymentProviderService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:119](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L119)
=======
[medusa/src/services/cart.ts:119](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L119)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### paymentSessionRepository\_

• `Protected` `Readonly` **paymentSessionRepository\_**: `Repository`<`PaymentSession`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:110](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L110)
=======
[medusa/src/services/cart.ts:110](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L110)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### priceSelectionStrategy\_

• `Protected` `Readonly` **priceSelectionStrategy\_**: `IPriceSelectionStrategy`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:128](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L128)
=======
[medusa/src/services/cart.ts:128](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L128)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### productService\_

• `Protected` `Readonly` **productService\_**: [`ProductService`](ProductService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:114](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L114)
=======
[medusa/src/services/cart.ts:114](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L114)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### productVariantInventoryService\_

• `Protected` `Readonly` **productVariantInventoryService\_**: [`ProductVariantInventoryService`](ProductVariantInventoryService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:132](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L132)
=======
[medusa/src/services/cart.ts:132](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L132)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### productVariantService\_

• `Protected` `Readonly` **productVariantService\_**: [`ProductVariantService`](ProductVariantService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:113](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L113)
=======
[medusa/src/services/cart.ts:113](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L113)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### regionService\_

• `Protected` `Readonly` **regionService\_**: [`RegionService`](RegionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:117](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L117)
=======
[medusa/src/services/cart.ts:117](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L117)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### salesChannelService\_

• `Protected` `Readonly` **salesChannelService\_**: [`SalesChannelService`](SalesChannelService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:116](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L116)
=======
[medusa/src/services/cart.ts:116](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L116)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### shippingMethodRepository\_

• `Protected` `Readonly` **shippingMethodRepository\_**: `Repository`<`ShippingMethod`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:107](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L107)
=======
[medusa/src/services/cart.ts:107](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L107)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### shippingOptionService\_

• `Protected` `Readonly` **shippingOptionService\_**: [`ShippingOptionService`](ShippingOptionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:121](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L121)
=======
[medusa/src/services/cart.ts:121](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L121)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### storeService\_

• `Protected` `Readonly` **storeService\_**: [`StoreService`](StoreService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:115](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L115)
=======
[medusa/src/services/cart.ts:115](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L115)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### taxProviderService\_

• `Protected` `Readonly` **taxProviderService\_**: [`TaxProviderService`](TaxProviderService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:124](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L124)
=======
[medusa/src/services/cart.ts:124](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L124)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### totalsService\_

• `Protected` `Readonly` **totalsService\_**: [`TotalsService`](TotalsService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:125](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L125)
=======
[medusa/src/services/cart.ts:125](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L125)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### Events

▪ `Static` `Readonly` **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CREATED` | `string` |
| `CUSTOMER_UPDATED` | `string` |
| `UPDATED` | `string` |

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:101](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L101)
=======
[medusa/src/services/cart.ts:101](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L101)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

## Methods

### addLineItem

▸ **addLineItem**(`cartId`, `lineItem`, `config?`): `Promise`<`void`\>

Adds a line item to the cart.

**`Deprecated`**

Use [addOrUpdateLineItems](CartService.md#addorupdatelineitems) instead.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cartId` | `string` | `undefined` | the id of the cart that we will add to |
| `lineItem` | `LineItem` | `undefined` | the line item to add. |
| `config` | `Object` | `undefined` | validateSalesChannels - should check if product belongs to the same sales chanel as cart                            (if cart has associated sales channel) |
| `config.validateSalesChannels` | `boolean` | `true` | - |

#### Returns

`Promise`<`void`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:617](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L617)
=======
[medusa/src/services/cart.ts:610](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L610)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### addOrUpdateLineItems

▸ **addOrUpdateLineItems**(`cartId`, `lineItems`, `config?`): `Promise`<`void`\>

Adds or update one or multiple line items to the cart. It also update all existing items in the cart
to have has_shipping to false. Finally, the adjustments will be updated.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cartId` | `string` | `undefined` | the id of the cart that we will add to |
| `lineItems` | `LineItem` \| `LineItem`[] | `undefined` | the line items to add. |
| `config` | `Object` | `undefined` | validateSalesChannels - should check if product belongs to the same sales chanel as cart                            (if cart has associated sales channel) |
| `config.validateSalesChannels` | `boolean` | `true` | - |

#### Returns

`Promise`<`void`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:750](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L750)
=======
[medusa/src/services/cart.ts:741](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L741)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### addShippingMethod

▸ **addShippingMethod**(`cartOrId`, `optionId`, `data?`): `Promise`<`Cart`\>

Adds the shipping method to the list of shipping methods associated with
the cart. Shipping Methods are the ways that an order is shipped, whereas a
Shipping Option is a possible way to ship an order. Shipping Methods may
also have additional details in the data field such as an id for a package
shop.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartOrId` | `string` \| `Cart` | the id of the cart to add shipping method to |
| `optionId` | `string` | id of shipping option to add as valid method |
| `data` | `Record`<`string`, `unknown`\> | the fulmillment data for the method |

#### Returns

`Promise`<`Cart`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2097](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2097)
=======
[medusa/src/services/cart.ts:2071](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2071)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### adjustFreeShipping\_

▸ `Protected` **adjustFreeShipping_**(`cart`, `shouldAdd`): `Promise`<`void`\>

Ensures shipping total on cart is correct in regards to a potential free
shipping discount
If a free shipping is present, we set shipping methods price to 0
if a free shipping was present, we set shipping methods to original amount

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to adjust free shipping for |
| `shouldAdd` | `boolean` | flag to indicate, if we should add or remove |

#### Returns

`Promise`<`void`\>

void

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1011](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1011)
=======
[medusa/src/services/cart.ts:998](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L998)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### applyDiscount

▸ **applyDiscount**(`cart`, `discountCode`): `Promise`<`void`\>

Updates the cart's discounts.
If discount besides free shipping is already applied, this
will be overwritten
Throws if discount regions does not include the cart region

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to update |
| `discountCode` | `string` | the discount code |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1431](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1431)
=======
[medusa/src/services/cart.ts:1416](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1416)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### applyDiscounts

▸ **applyDiscounts**(`cart`, `discountCodes`): `Promise`<`void`\>

Updates the cart's discounts.
If discount besides free shipping is already applied, this
will be overwritten
Throws if discount regions does not include the cart region

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to update |
| `discountCodes` | `string`[] | the discount code(s) to apply |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1443](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1443)
=======
[medusa/src/services/cart.ts:1428](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1428)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### applyGiftCard\_

▸ `Protected` **applyGiftCard_**(`cart`, `code`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cart` | `Cart` |
| `code` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1396](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1396)
=======
[medusa/src/services/cart.ts:1381](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1381)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### authorizePayment

▸ **authorizePayment**(`cartId`, `context?`): `Promise`<`Cart`\>

Authorizes a payment for a cart.
Will authorize with chosen payment provider. This will return
a payment object, that we will use to update our cart payment with.
Additionally, if the payment does not require more or fails, we will
set the payment on the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to authorize payment for |
| `context` | `Record`<`string`, `unknown`\> & { `cart_id`: `string`  } | object containing whatever is relevant for    authorizing the payment with the payment provider. As an example,    this could be IP address or similar for fraud handling. |

#### Returns

`Promise`<`Cart`\>

the resulting cart

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1612](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1612)
=======
[medusa/src/services/cart.ts:1595](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1595)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### create

▸ **create**(`data`): `Promise`<`Cart`\>

Creates a cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `CartCreateProps` | the data to create the cart with |

#### Returns

`Promise`<`Cart`\>

the result of the create operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:309](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L309)
=======
[medusa/src/services/cart.ts:309](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L309)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### createOrFetchGuestCustomerFromEmail\_

▸ `Protected` **createOrFetchGuestCustomerFromEmail_**(`email`): `Promise`<`Customer`\>

Creates or fetches a user based on an email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `email` | `string` | the email to use |

#### Returns

`Promise`<`Customer`\>

the resultign customer object

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1282](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1282)
=======
[medusa/src/services/cart.ts:1267](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1267)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### createTaxLines

▸ **createTaxLines**(`cartOrId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cartOrId` | `string` \| `Cart` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2529](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2529)
=======
[medusa/src/services/cart.ts:2499](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2499)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### decorateTotals

▸ **decorateTotals**(`cart`, `totalsConfig?`): `Promise`<`WithRequiredProperty`<`Cart`, ``"total"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cart` | `Cart` |
| `totalsConfig` | `TotalsConfig` |

#### Returns

`Promise`<`WithRequiredProperty`<`Cart`, ``"total"``\>\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2583](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2583)
=======
[medusa/src/services/cart.ts:2551](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2551)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### decorateTotals\_

▸ `Protected` **decorateTotals_**(`cart`, `totalsToSelect`, `options?`): `Promise`<`Cart`\>

**`Deprecated`**

Use decorateTotals instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `cart` | `Cart` |
| `totalsToSelect` | `TotalField`[] |
| `options` | `TotalsConfig` |

#### Returns

`Promise`<`Cart`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2758](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2758)
=======
[medusa/src/services/cart.ts:2726](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2726)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### delete

▸ **delete**(`cartId`): `Promise`<`Cart`\>

Deletes a cart from the database. Completed carts cannot be deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to delete |

#### Returns

`Promise`<`Cart`\>

the deleted cart or undefined if the cart was not found.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2446](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2446)
=======
[medusa/src/services/cart.ts:2418](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2418)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### deletePaymentSession

▸ **deletePaymentSession**(`cartId`, `providerId`): `Promise`<`void`\>

Removes a payment session from the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to remove from |
| `providerId` | `string` | the id of the provider whoose payment session    should be removed. |

#### Returns

`Promise`<`void`\>

the resulting cart.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1990](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1990)
=======
[medusa/src/services/cart.ts:1964](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1964)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### deleteTaxLines

▸ **deleteTaxLines**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2563](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2563)
=======
[medusa/src/services/cart.ts:2531](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2531)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### findCustomShippingOption

▸ **findCustomShippingOption**(`cartCustomShippingOptions`, `optionId`): `undefined` \| `CustomShippingOption`

Finds the cart's custom shipping options based on the passed option id.
throws if custom options is not empty and no shipping option corresponds to optionId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartCustomShippingOptions` | `CustomShippingOption`[] | the cart's custom shipping options |
| `optionId` | `string` | id of the normal or custom shipping option to find in the cartCustomShippingOptions |

#### Returns

`undefined` \| `CustomShippingOption`

custom shipping option

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2209](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2209)
=======
[medusa/src/services/cart.ts:2181](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2181)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### getTotalsRelations

▸ `Private` **getTotalsRelations**(`config`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `FindConfig`<`Cart`\> |

#### Returns

`string`[]

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2809](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2809)
=======
[medusa/src/services/cart.ts:2777](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2777)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### getValidatedSalesChannel

▸ `Protected` **getValidatedSalesChannel**(`salesChannelId?`): `Promise`<`SalesChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `salesChannelId?` | `string` |

#### Returns

`Promise`<`SalesChannel`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:447](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L447)
=======
[medusa/src/services/cart.ts:447](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L447)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### list

▸ **list**(`selector`, `config?`): `Promise`<`Cart`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `FilterableCartProps` | the query object for find |
| `config` | `FindConfig`<`Cart`\> | config object |

#### Returns

`Promise`<`Cart`[]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:196](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L196)
=======
[medusa/src/services/cart.ts:196](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L196)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### onSalesChannelChange

▸ `Protected` **onSalesChannelChange**(`cart`, `newSalesChannelId`): `Promise`<`void`\>

Remove the cart line item that does not belongs to the newly assigned sales channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | The cart being updated |
| `newSalesChannelId` | `string` | The new sales channel being assigned to the cart |

#### Returns

`Promise`<`void`\>

void

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1228](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1228)
=======
[medusa/src/services/cart.ts:1213](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1213)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### refreshAdjustments\_

▸ `Protected` **refreshAdjustments_**(`cart`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cart` | `Cart` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2682](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2682)
=======
[medusa/src/services/cart.ts:2650](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2650)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### refreshPaymentSession

▸ **refreshPaymentSession**(`cartId`, `providerId`): `Promise`<`void`\>

Refreshes a payment session on a cart

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to remove from |
| `providerId` | `string` | the id of the provider whoose payment session    should be removed. |

#### Returns

`Promise`<`void`\>

the resulting cart.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2042](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2042)
=======
[medusa/src/services/cart.ts:2016](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2016)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### removeDiscount

▸ **removeDiscount**(`cartId`, `discountCode`): `Promise`<`Cart`\>

Removes a discount based on a discount code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to remove from |
| `discountCode` | `string` | the discount code to remove |

#### Returns

`Promise`<`Cart`\>

the resulting cart

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1521](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1521)
=======
[medusa/src/services/cart.ts:1506](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1506)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### removeLineItem

▸ **removeLineItem**(`cartId`, `lineItemId`): `Promise`<`Cart`\>

Removes a line item from the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart that we will remove from |
| `lineItemId` | `string` | the line item to remove. |

#### Returns

`Promise`<`Cart`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:479](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L479)
=======
[medusa/src/services/cart.ts:479](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L479)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### retrieve

▸ **retrieve**(`cartId`, `options?`, `totalsConfig?`): `Promise`<`Cart`\>

Gets a cart by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to get. |
| `options` | `FindConfig`<`Cart`\> | the options to get a cart |
| `totalsConfig` | `TotalsConfig` |  |

#### Returns

`Promise`<`Cart`\>

the cart document.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:213](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L213)
=======
[medusa/src/services/cart.ts:213](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L213)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### retrieveLegacy

▸ `Protected` **retrieveLegacy**(`cartId`, `options?`, `totalsConfig?`): `Promise`<`Cart`\>

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `cartId` | `string` |
| `options` | `FindConfig`<`Cart`\> |
| `totalsConfig` | `TotalsConfig` |

#### Returns

`Promise`<`Cart`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:261](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L261)
=======
[medusa/src/services/cart.ts:261](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L261)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### retrieveWithTotals

▸ **retrieveWithTotals**(`cartId`, `options?`, `totalsConfig?`): `Promise`<`WithRequiredProperty`<`Cart`, ``"total"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cartId` | `string` |
| `options` | `FindConfig`<`Cart`\> |
| `totalsConfig` | `TotalsConfig` |

#### Returns

`Promise`<`WithRequiredProperty`<`Cart`, ``"total"``\>\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:289](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L289)
=======
[medusa/src/services/cart.ts:289](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L289)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### setMetadata

▸ **setMetadata**(`cartId`, `key`, `value`): `Promise`<`Cart`\>

Dedicated method to set metadata for a cart.
To ensure that plugins does not overwrite each
others metadata fields, setMetadata is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the cart to apply metadata to. |
| `key` | `string` | key for metadata field |
| `value` | `string` \| `number` | value for metadata field. |

#### Returns

`Promise`<`Cart`\>

resolves to the updated result.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2489](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2489)
=======
[medusa/src/services/cart.ts:2459](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2459)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### setPaymentSession

▸ **setPaymentSession**(`cartId`, `providerId`): `Promise`<`void`\>

Selects a payment session for a cart and creates a payment object in the external provider system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to add payment method to |
| `providerId` | `string` | the id of the provider to be set to the cart |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1691](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1691)
=======
[medusa/src/services/cart.ts:1669](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1669)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### setPaymentSessions

▸ **setPaymentSessions**(`cartOrCartId`): `Promise`<`void`\>

Creates, updates and sets payment sessions associated with the cart. The
first time the method is called payment sessions will be created for each
provider. Additional calls will ensure that payment sessions have correct
amounts, currencies, etc. as well as make sure to filter payment sessions
that are not available for the cart's region.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartOrCartId` | `string` \| `Cart` | the id of the cart to set payment session for |

#### Returns

`Promise`<`void`\>

the result of the update operation.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1809](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1809)
=======
[medusa/src/services/cart.ts:1785](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1785)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### setRegion\_

▸ `Protected` **setRegion_**(`cart`, `regionId`, `countryCode`): `Promise`<`void`\>

Set's the region of a cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to set region on |
| `regionId` | `string` | the id of the region to set the region to |
| `countryCode` | ``null`` \| `string` | the country code to set the country to |

#### Returns

`Promise`<`void`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2307](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2307)
=======
[medusa/src/services/cart.ts:2279](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2279)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### transformQueryForTotals\_

▸ `Protected` **transformQueryForTotals_**(`config`): `FindConfig`<`Cart`\> & { `totalsToSelect`: `TotalField`[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `FindConfig`<`Cart`\> |

#### Returns

`FindConfig`<`Cart`\> & { `totalsToSelect`: `TotalField`[]  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2700](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2700)
=======
[medusa/src/services/cart.ts:2668](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2668)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### update

▸ **update**(`cartId`, `data`): `Promise`<`Cart`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cartId` | `string` |
| `data` | `CartUpdateProps` |

#### Returns

`Promise`<`Cart`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1052](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1052)
=======
[medusa/src/services/cart.ts:1039](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1039)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### updateBillingAddress\_

▸ `Protected` **updateBillingAddress_**(`cart`, `addressOrId`, `addrRepo`): `Promise`<`void`\>

Updates the cart's billing address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to update |
| `addressOrId` | `string` \| `AddressPayload` \| `Partial`<`Address`\> | the value to set the billing address to |
| `addrRepo` | `Repository`<`Address`\> | the repository to use for address updates |

#### Returns

`Promise`<`void`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1309](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1309)
=======
[medusa/src/services/cart.ts:1294](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1294)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### updateCustomerId\_

▸ `Protected` **updateCustomerId_**(`cart`, `customerId`): `Promise`<`void`\>

Sets the customer id of a cart

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to add email to |
| `customerId` | `string` | the customer to add to cart |

#### Returns

`Promise`<`void`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1264](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1264)
=======
[medusa/src/services/cart.ts:1249](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1249)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### updateLineItem

▸ **updateLineItem**(`cartId`, `lineItemId`, `lineItemUpdate`): `Promise`<`Cart`\>

Updates a cart's existing line item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to update |
| `lineItemId` | `string` | the id of the line item to update. |
| `lineItemUpdate` | `LineItemUpdate` | the line item to update. Must include an id field. |

#### Returns

`Promise`<`Cart`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:927](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L927)
=======
[medusa/src/services/cart.ts:916](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L916)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### updatePaymentSession

▸ **updatePaymentSession**(`cartId`, `update`): `Promise`<`Cart`\>

Updates the currently selected payment session.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cartId` | `string` | the id of the cart to update the payment session for |
| `update` | `Record`<`string`, `unknown`\> | the data to update the payment session with |

#### Returns

`Promise`<`Cart`\>

the resulting cart

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1574](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1574)
=======
[medusa/src/services/cart.ts:1557](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1557)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### updateShippingAddress\_

▸ `Protected` **updateShippingAddress_**(`cart`, `addressOrId`, `addrRepo`): `Promise`<`void`\>

Updates the cart's shipping address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to update |
| `addressOrId` | `string` \| `AddressPayload` \| `Partial`<`Address`\> | the value to set the shipping address to |
| `addrRepo` | `Repository`<`Address`\> | the repository to use for address updates |

#### Returns

`Promise`<`void`\>

the result of the update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:1347](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L1347)
=======
[medusa/src/services/cart.ts:1332](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L1332)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### updateUnitPrices\_

▸ `Protected` **updateUnitPrices_**(`cart`, `regionId?`, `customer_id?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cart` | `Cart` |
| `regionId?` | `string` |
| `customer_id?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:2228](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L2228)
=======
[medusa/src/services/cart.ts:2200](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L2200)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### validateLineItem

▸ `Protected` **validateLineItem**(`sales_channel_id`, `lineItem`): `Promise`<`boolean`\>

Check if line item's variant belongs to the cart's sales channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sales_channel_id` | `Object` | the cart for the line item |
| `sales_channel_id.sales_channel_id` | ``null`` \| `string` | - |
| `lineItem` | `LineItemValidateData` | the line item being added |

#### Returns

`Promise`<`boolean`\>

a boolean indicating validation result

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:583](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L583)
=======
[medusa/src/services/cart.ts:576](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L576)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### validateLineItemShipping\_

▸ `Protected` **validateLineItemShipping_**(`shippingMethods`, `lineItem`): `boolean`

Checks if a given line item has a shipping method that can fulfill it.
Returns true if all products in the cart can be fulfilled with the current
shipping methods.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shippingMethods` | `ShippingMethod`[] | the set of shipping methods to check from |
| `lineItem` | `LineItem` | the line item |

#### Returns

`boolean`

boolean representing whether shipping method is validated

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/services/cart.ts:552](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/cart.ts#L552)
=======
[medusa/src/services/cart.ts:545](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/cart.ts#L545)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`CartService`](CartService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`CartService`](CartService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/CartService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/CartService.md
