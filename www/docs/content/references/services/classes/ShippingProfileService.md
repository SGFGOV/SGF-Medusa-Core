# Class: ShippingProfileService

Provides layer to manipulate profiles.

**`Implements`**

## Hierarchy

- `TransactionBaseService`

  ↳ **`ShippingProfileService`**

## Constructors

### constructor

• **new ShippingProfileService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `InjectedDependencies` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:45](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L45)
=======
[medusa/src/services/shipping-profile.ts:45](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L45)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### customShippingOptionService\_

• `Protected` `Readonly` **customShippingOptionService\_**: [`CustomShippingOptionService`](CustomShippingOptionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:40](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L40)
=======
[medusa/src/services/shipping-profile.ts:40](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L40)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### productRepository\_

• `Protected` `Readonly` **productRepository\_**: `Repository`<`Product`\> & { `_applyCategoriesQuery`: (`qb`: `SelectQueryBuilder`<`Product`\>, `__namedParameters`: `Object`) => `SelectQueryBuilder`<`Product`\> ; `_findWithRelations`: (`__namedParameters`: { `idsOrOptionsWithoutRelations`: `string`[] \| `FindWithoutRelationsOptions` ; `relations`: `string`[] ; `shouldCount`: `boolean` ; `withDeleted`: `boolean`  }) => `Promise`<[`Product`[], `number`]\> ; `bulkAddToCollection`: (`productIds`: `string`[], `collectionId`: `string`) => `Promise`<`Product`[]\> ; `bulkRemoveFromCollection`: (`productIds`: `string`[], `collectionId`: `string`) => `Promise`<`Product`[]\> ; `findOneWithRelations`: (`relations`: `string`[], `optionsWithoutRelations`: `FindWithoutRelationsOptions`) => `Promise`<`Product`\> ; `findWithRelations`: (`relations`: `string`[], `idsOrOptionsWithoutRelations`: `string`[] \| `FindWithoutRelationsOptions`, `withDeleted`: `boolean`) => `Promise`<`Product`[]\> ; `findWithRelationsAndCount`: (`relations`: `string`[], `idsOrOptionsWithoutRelations`: `FindWithoutRelationsOptions`) => `Promise`<[`Product`[], `number`]\> ; `getFreeTextSearchResultsAndCount`: (`q`: `string`, `options`: `FindWithoutRelationsOptions`, `relations`: `string`[]) => `Promise`<[`Product`[], `number`]\> ; `isProductInSalesChannels`: (`id`: `string`, `salesChannelIds`: `string`[]) => `Promise`<`boolean`\> ; `queryProducts`: (`optionsWithoutRelations`: `FindWithoutRelationsOptions`, `shouldCount`: `boolean`) => `Promise`<[`Product`[], `number`]\> ; `queryProductsWithIds`: (`__namedParameters`: { `entityIds`: `string`[] ; `groupedRelations`: { `[toplevel: string]`: `string`[];  } ; `order?`: { `[column: string]`: ``"ASC"`` \| ``"DESC"``;  } ; `select?`: keyof `Product`[] ; `where?`: `FindOptionsWhere`<`Product`\> ; `withDeleted?`: `boolean`  }) => `Promise`<`Product`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:43](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L43)
=======
[medusa/src/services/shipping-profile.ts:43](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L43)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### productService\_

• `Protected` `Readonly` **productService\_**: [`ProductService`](ProductService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:38](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L38)
=======
[medusa/src/services/shipping-profile.ts:38](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L38)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### shippingOptionService\_

• `Protected` `Readonly` **shippingOptionService\_**: [`ShippingOptionService`](ShippingOptionService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:39](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L39)
=======
[medusa/src/services/shipping-profile.ts:39](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L39)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### shippingProfileRepository\_

• `Protected` `Readonly` **shippingProfileRepository\_**: `Repository`<`ShippingProfile`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:42](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L42)
=======
[medusa/src/services/shipping-profile.ts:42](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L42)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

## Methods

### addProduct

▸ **addProduct**(`profileId`, `productId`): `Promise`<`ShippingProfile`\>

**`Deprecated`**

use [addProducts](ShippingProfileService.md#addproducts) instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `profileId` | `string` |
| `productId` | `string` \| `string`[] |

#### Returns

`Promise`<`ShippingProfile`\>

#### Defined in

[medusa/src/services/shipping-profile.ts:345](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L345)

___

### addProducts

▸ **addProducts**(`profileId`, `productId`): `Promise`<`ShippingProfile`\>

Adds a product or an array of products to the profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId` | `string` | the profile to add the products to. |
| `productId` | `string` \| `string`[] | the ID of the product or multiple products to add. |

#### Returns

`Promise`<`ShippingProfile`\>

the result of update

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:355](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L355)
=======
[medusa/src/services/shipping-profile.ts:358](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L358)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### addShippingOption

▸ **addShippingOption**(`profileId`, `optionId`): `Promise`<`ShippingProfile`\>

Adds a shipping option to the profile. The shipping option can be used to
fulfill the products in the products field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId` | `string` | the profile to apply the shipping option to |
| `optionId` | `string` \| `string`[] | the ID of the option or multiple options to add to the profile |

#### Returns

`Promise`<`ShippingProfile`\>

the result of the model update operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:385](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L385)
=======
[medusa/src/services/shipping-profile.ts:401](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L401)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### create

▸ **create**(`profile`): `Promise`<`ShippingProfile`\>

Creates a new shipping profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profile` | `CreateShippingProfile` | the shipping profile to create from |

#### Returns

`Promise`<`ShippingProfile`\>

the result of the create operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:249](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L249)
=======
[medusa/src/services/shipping-profile.ts:249](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L249)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### createDefault

▸ **createDefault**(): `Promise`<`ShippingProfile`\>

Creates a default shipping profile, if this does not already exist.

#### Returns

`Promise`<`ShippingProfile`\>

the shipping profile

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:179](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L179)
=======
[medusa/src/services/shipping-profile.ts:179](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L179)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### createGiftCardDefault

▸ **createGiftCardDefault**(): `Promise`<`ShippingProfile`\>

Creates a default shipping profile, for gift cards if unless it already
exists.

#### Returns

`Promise`<`ShippingProfile`\>

the shipping profile

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:223](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L223)
=======
[medusa/src/services/shipping-profile.ts:223](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L223)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### delete

▸ **delete**(`profileId`): `Promise`<`void`\>

Deletes a profile with a given profile id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId` | `string` | the id of the profile to delete. Must be   castable as an ObjectId |

#### Returns

`Promise`<`void`\>

the result of the delete operation.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:330](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L330)
=======
[medusa/src/services/shipping-profile.ts:323](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L323)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### fetchCartOptions

▸ **fetchCartOptions**(`cart`): `Promise`<`ShippingOption`[]\>

Finds all the shipping profiles that cover the products in a cart, and
validates all options that are available for the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `any` | the cart object to find shipping options for |

#### Returns

`Promise`<`ShippingOption`[]\>

a list of the available shipping options

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:415](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L415)
=======
[medusa/src/services/shipping-profile.ts:426](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L426)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### fetchOptionsByProductIds

▸ **fetchOptionsByProductIds**(`productIds`, `filter`): `Promise`<`ShippingOption`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `productIds` | `string`[] |
| `filter` | `Selector`<`ShippingOption`\> |

#### Returns

`Promise`<`ShippingOption`[]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:82](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L82)
=======
[medusa/src/services/shipping-profile.ts:82](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L82)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### getProfilesInCart

▸ `Protected` **getProfilesInCart**(`cart`): `string`[]

Returns a list of all the productIds in the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart` | `Cart` | the cart to extract products from |

#### Returns

`string`[]

a list of product ids

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:481](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L481)
=======
[medusa/src/services/shipping-profile.ts:492](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L492)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### list

▸ **list**(`selector?`, `config?`): `Promise`<`ShippingProfile`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `Selector`<`ShippingProfile`\> | the query object for find |
| `config` | `FindConfig`<`ShippingProfile`\> | the config object for find |

#### Returns

`Promise`<`ShippingProfile`[]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:67](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L67)
=======
[medusa/src/services/shipping-profile.ts:67](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L67)

___

### removeProducts

▸ **removeProducts**(`profileId`, `productId`): `Promise`<`void` \| `ShippingProfile`\>

Removes a product or an array of products from the profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId` | ``null`` \| `string` | the profile to add the products to. |
| `productId` | `string` \| `string`[] | the ID of the product or multiple products to add. |

#### Returns

`Promise`<`void` \| `ShippingProfile`\>

the result of update

#### Defined in

[medusa/src/services/shipping-profile.ts:380](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L380)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### retrieve

▸ **retrieve**(`profileId`, `options?`): `Promise`<`ShippingProfile`\>

Gets a profile by id.
Throws in case of DB Error and if profile was not found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId` | `string` | the id of the profile to get. |
| `options` | `FindConfig`<`ShippingProfile`\> | options opf the query. |

#### Returns

`Promise`<`ShippingProfile`\>

the profile document.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:134](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L134)
=======
[medusa/src/services/shipping-profile.ts:134](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L134)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### retrieveDefault

▸ **retrieveDefault**(): `Promise`<``null`` \| `ShippingProfile`\>

#### Returns

`Promise`<``null`` \| `ShippingProfile`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:163](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L163)
=======
[medusa/src/services/shipping-profile.ts:163](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L163)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### retrieveGiftCardDefault

▸ **retrieveGiftCardDefault**(): `Promise`<``null`` \| `ShippingProfile`\>

Retrieves the default gift card profile

#### Returns

`Promise`<``null`` \| `ShippingProfile`\>

the shipping profile for gift cards

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:206](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L206)
=======
[medusa/src/services/shipping-profile.ts:206](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L206)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### update

▸ **update**(`profileId`, `update`): `Promise`<`ShippingProfile`\>

Updates a profile. Metadata updates and product updates should use
dedicated methods, e.g. `setMetadata`, `addProduct`, etc. The function
will throw errors if metadata or product updates are attempted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId` | `string` | the id of the profile. Must be a string that   can be casted to an ObjectId |
| `update` | `UpdateShippingProfile` | an object with the update values. |

#### Returns

`Promise`<`ShippingProfile`\>

resolves to the update result.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/services/shipping-profile.ts:284](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/shipping-profile.ts#L284)
=======
[medusa/src/services/shipping-profile.ts:284](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/shipping-profile.ts#L284)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`ShippingProfileService`](ShippingProfileService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`ShippingProfileService`](ShippingProfileService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ShippingProfileService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ShippingProfileService.md
