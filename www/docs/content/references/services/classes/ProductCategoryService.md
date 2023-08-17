# Class: ProductCategoryService

Provides layer to manipulate product categories.

## Hierarchy

- `TransactionBaseService`

  ↳ **`ProductCategoryService`**

## Constructors

### constructor

• **new ProductCategoryService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `InjectedDependencies` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:40](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L40)
=======
[medusa/src/services/product-category.ts:40](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L40)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### eventBusService\_

• `Protected` `Readonly` **eventBusService\_**: [`EventBusService`](EventBusService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:32](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L32)
=======
[medusa/src/services/product-category.ts:32](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L32)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### productCategoryRepo\_

• `Protected` `Readonly` **productCategoryRepo\_**: `TreeRepository`<`ProductCategory`\> & { `addProducts`: (`productCategoryId`: `string`, `productIds`: `string`[]) => `Promise`<`void`\> ; `findOneWithDescendants`: (`query`: `FindOneOptions`<`ProductCategory`\>, `treeScope`: `QuerySelector`<`ProductCategory`\>) => `Promise`<``null`` \| `ProductCategory`\> ; `getFreeTextSearchResultsAndCount`: (`options`: `ExtendedFindConfig`<`ProductCategory`\>, `q?`: `string`, `treeScope`: `QuerySelector`<`ProductCategory`\>, `includeTree`: `boolean`) => `Promise`<[`ProductCategory`[], `number`]\> ; `removeProducts`: (`productCategoryId`: `string`, `productIds`: `string`[]) => `Promise`<`DeleteResult`\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:31](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L31)
=======
[medusa/src/services/product-category.ts:31](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L31)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:34](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L34)
=======
[medusa/src/services/product-category.ts:34](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L34)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

## Methods

### addProducts

▸ **addProducts**(`productCategoryId`, `productIds`): `Promise`<`void`\>

Add a batch of product to a product category

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productCategoryId` | `string` | The id of the product category on which to add the products |
| `productIds` | `string`[] | The products ids to attach to the product category |

#### Returns

`Promise`<`void`\>

the product category on which the products have been added

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:314](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L314)
=======
[medusa/src/services/product-category.ts:314](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L314)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### create

▸ **create**(`productCategoryInput`): `Promise`<`ProductCategory`\>

Creates a product category

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productCategoryInput` | `CreateProductCategoryInput` | parameters to create a product category |

#### Returns

`Promise`<`ProductCategory`\>

created product category

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:187](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L187)
=======
[medusa/src/services/product-category.ts:187](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L187)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### delete

▸ **delete**(`productCategoryId`): `Promise`<`void`\>

Deletes a product category

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productCategoryId` | `string` | is the id of the product category to delete |

#### Returns

`Promise`<`void`\>

a promise

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:268](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L268)
=======
[medusa/src/services/product-category.ts:268](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L268)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### fetchReorderConditions

▸ `Protected` **fetchReorderConditions**(`productCategory`, `input`, `shouldDeleteElement?`): `ReorderConditions`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `productCategory` | `ProductCategory` | `undefined` |
| `input` | `UpdateProductCategoryInput` | `undefined` |
| `shouldDeleteElement` | `boolean` | `false` |

#### Returns

`ReorderConditions`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:349](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L349)
=======
[medusa/src/services/product-category.ts:349](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L349)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### listAndCount

▸ **listAndCount**(`selector`, `config?`, `treeSelector?`): `Promise`<[`ProductCategory`[], `number`]\>

Lists product category based on the provided parameters and includes the count of
product category that match the query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `TreeQuerySelector`<`ProductCategory`\> | Filter options for product category. |
| `config` | `FindConfig`<`ProductCategory`\> | Configuration for query. |
| `treeSelector` | `QuerySelector`<`ProductCategory`\> | Filter options for product category tree relations |

#### Returns

`Promise`<[`ProductCategory`[], `number`]\>

an array containing the product category as
  the first element and the total count of product category that matches the query
  as the second element.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:61](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L61)
=======
[medusa/src/services/product-category.ts:61](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L61)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### performReordering

▸ `Protected` **performReordering**(`repository`, `conditions`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `repository` | `TreeRepository`<`ProductCategory`\> & { `addProducts`: (`productCategoryId`: `string`, `productIds`: `string`[]) => `Promise`<`void`\> ; `findOneWithDescendants`: (`query`: `FindOneOptions`<`ProductCategory`\>, `treeScope`: `QuerySelector`<`ProductCategory`\>) => `Promise`<``null`` \| `ProductCategory`\> ; `getFreeTextSearchResultsAndCount`: (`options`: `ExtendedFindConfig`<`ProductCategory`\>, `q?`: `string`, `treeScope`: `QuerySelector`<`ProductCategory`\>, `includeTree`: `boolean`) => `Promise`<[`ProductCategory`[], `number`]\> ; `removeProducts`: (`productCategoryId`: `string`, `productIds`: `string`[]) => `Promise`<`DeleteResult`\>  } |
| `conditions` | `ReorderConditions` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:377](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L377)
=======
[medusa/src/services/product-category.ts:377](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L377)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### removeProducts

▸ **removeProducts**(`productCategoryId`, `productIds`): `Promise`<`void`\>

Remove a batch of product from a product category

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productCategoryId` | `string` | The id of the product category on which to remove the products |
| `productIds` | `string`[] | The products ids to remove from the product category |

#### Returns

`Promise`<`void`\>

the product category on which the products have been removed

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:333](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L333)
=======
[medusa/src/services/product-category.ts:333](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L333)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### retrieve

▸ **retrieve**(`productCategoryId`, `config?`, `selector?`, `treeSelector?`): `Promise`<`ProductCategory`\>

Retrieves a product category by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productCategoryId` | `string` | the id of the product category to retrieve. |
| `config` | `FindConfig`<`ProductCategory`\> | the config of the product category to retrieve. |
| `selector` | `Selector`<`ProductCategory`\> |  |
| `treeSelector` | `QuerySelector`<`ProductCategory`\> |  |

#### Returns

`Promise`<`ProductCategory`\>

the product category.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:139](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L139)
=======
[medusa/src/services/product-category.ts:139](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L139)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### retrieveByHandle

▸ **retrieveByHandle**(`handle`, `config?`, `selector?`, `treeSelector?`): `Promise`<`ProductCategory`\>

Retrieves a product category by handle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | `string` | the handle of the category |
| `config` | `FindConfig`<`ProductCategory`\> | the config of the product category to retrieve. |
| `selector` | `Selector`<`ProductCategory`\> |  |
| `treeSelector` | `QuerySelector`<`ProductCategory`\> |  |

#### Returns

`Promise`<`ProductCategory`\>

the product category.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:165](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L165)
=======
[medusa/src/services/product-category.ts:165](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L165)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### retrieve\_

▸ `Protected` **retrieve_**(`config?`, `selector?`, `treeSelector?`): `Promise`<`ProductCategory`\>

A generic retrieve for fining product categories by different attributes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `FindConfig`<`ProductCategory`\> | the config of the product category to retrieve. |
| `selector` | `Selector`<`ProductCategory`\> |  |
| `treeSelector` | `QuerySelector`<`ProductCategory`\> |  |

#### Returns

`Promise`<`ProductCategory`\>

the product category.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:102](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L102)
=======
[medusa/src/services/product-category.ts:102](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L102)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### shiftSiblings

▸ `Protected` **shiftSiblings**(`repository`, `conditions`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `repository` | `TreeRepository`<`ProductCategory`\> & { `addProducts`: (`productCategoryId`: `string`, `productIds`: `string`[]) => `Promise`<`void`\> ; `findOneWithDescendants`: (`query`: `FindOneOptions`<`ProductCategory`\>, `treeScope`: `QuerySelector`<`ProductCategory`\>) => `Promise`<``null`` \| `ProductCategory`\> ; `getFreeTextSearchResultsAndCount`: (`options`: `ExtendedFindConfig`<`ProductCategory`\>, `q?`: `string`, `treeScope`: `QuerySelector`<`ProductCategory`\>, `includeTree`: `boolean`) => `Promise`<[`ProductCategory`[], `number`]\> ; `removeProducts`: (`productCategoryId`: `string`, `productIds`: `string`[]) => `Promise`<`DeleteResult`\>  } |
| `conditions` | `ReorderConditions` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:415](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L415)
=======
[medusa/src/services/product-category.ts:415](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L415)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### transformParentIdToEntity

▸ `Protected` **transformParentIdToEntity**(`productCategoryInput`): `Promise`<`CreateProductCategoryInput` \| `UpdateProductCategoryInput`\>

Accepts an input object and transforms product_category_id
into product_category entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productCategoryInput` | `CreateProductCategoryInput` \| `UpdateProductCategoryInput` | params used to create/update |

#### Returns

`Promise`<`CreateProductCategoryInput` \| `UpdateProductCategoryInput`\>

transformed productCategoryInput

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:513](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L513)
=======
[medusa/src/services/product-category.ts:513](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L513)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### update

▸ **update**(`productCategoryId`, `productCategoryInput`): `Promise`<`ProductCategory`\>

Updates a product category

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productCategoryId` | `string` | id of product category to update |
| `productCategoryInput` | `UpdateProductCategoryInput` | parameters to update in product category |

#### Returns

`Promise`<`ProductCategory`\>

updated product category

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/services/product-category.ts:221](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-category.ts#L221)
=======
[medusa/src/services/product-category.ts:221](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-category.ts#L221)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`ProductCategoryService`](ProductCategoryService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`ProductCategoryService`](ProductCategoryService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCategoryService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCategoryService.md
