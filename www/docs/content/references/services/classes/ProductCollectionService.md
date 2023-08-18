# Class: ProductCollectionService

Provides layer to manipulate product collections.

## Hierarchy

- `TransactionBaseService`

  ↳ **`ProductCollectionService`**

## Constructors

### constructor

• **new ProductCollectionService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `InjectedDependencies` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:49](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L49)
=======
[medusa/src/services/product-collection.ts:49](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L49)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### eventBus\_

• `Protected` `Readonly` **eventBus\_**: [`EventBusService`](EventBusService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:36](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L36)
=======
[medusa/src/services/product-collection.ts:36](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L36)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### productCollectionRepository\_

• `Protected` `Readonly` **productCollectionRepository\_**: `Repository`<`ProductCollection`\> & { `findAndCountByDiscountConditionId`: (`conditionId`: `string`, `query`: `ExtendedFindConfig`<`ProductCollection`\>) => `Promise`<[`ProductCollection`[], `number`]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:38](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L38)
=======
[medusa/src/services/product-collection.ts:38](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L38)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### productRepository\_

• `Protected` `Readonly` **productRepository\_**: `Repository`<`Product`\> & { `_applyCategoriesQuery`: (`qb`: `SelectQueryBuilder`<`Product`\>, `__namedParameters`: `Object`) => `SelectQueryBuilder`<`Product`\> ; `_findWithRelations`: (`__namedParameters`: { `idsOrOptionsWithoutRelations`: `string`[] \| `FindWithoutRelationsOptions` ; `relations`: `string`[] ; `shouldCount`: `boolean` ; `withDeleted`: `boolean`  }) => `Promise`<[`Product`[], `number`]\> ; `bulkAddToCollection`: (`productIds`: `string`[], `collectionId`: `string`) => `Promise`<`Product`[]\> ; `bulkRemoveFromCollection`: (`productIds`: `string`[], `collectionId`: `string`) => `Promise`<`Product`[]\> ; `findOneWithRelations`: (`relations`: `string`[], `optionsWithoutRelations`: `FindWithoutRelationsOptions`) => `Promise`<`Product`\> ; `findWithRelations`: (`relations`: `string`[], `idsOrOptionsWithoutRelations`: `string`[] \| `FindWithoutRelationsOptions`, `withDeleted`: `boolean`) => `Promise`<`Product`[]\> ; `findWithRelationsAndCount`: (`relations`: `string`[], `idsOrOptionsWithoutRelations`: `FindWithoutRelationsOptions`) => `Promise`<[`Product`[], `number`]\> ; `getFreeTextSearchResultsAndCount`: (`q`: `string`, `options`: `FindWithoutRelationsOptions`, `relations`: `string`[]) => `Promise`<[`Product`[], `number`]\> ; `isProductInSalesChannels`: (`id`: `string`, `salesChannelIds`: `string`[]) => `Promise`<`boolean`\> ; `queryProducts`: (`optionsWithoutRelations`: `FindWithoutRelationsOptions`, `shouldCount`: `boolean`) => `Promise`<[`Product`[], `number`]\> ; `queryProductsWithIds`: (`__namedParameters`: { `entityIds`: `string`[] ; `groupedRelations`: { `[toplevel: string]`: `string`[];  } ; `order?`: { `[column: string]`: ``"ASC"`` \| ``"DESC"``;  } ; `select?`: keyof `Product`[] ; `where?`: `FindOptionsWhere`<`Product`\> ; `withDeleted?`: `boolean`  }) => `Promise`<`Product`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:39](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L39)
=======
[medusa/src/services/product-collection.ts:39](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L39)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### Events

▪ `Static` `Readonly` **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CREATED` | `string` |
| `DELETED` | `string` |
| `PRODUCTS_ADDED` | `string` |
| `PRODUCTS_REMOVED` | `string` |
| `UPDATED` | `string` |

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:41](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L41)
=======
[medusa/src/services/product-collection.ts:41](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L41)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

## Methods

### addProducts

▸ **addProducts**(`collectionId`, `productIds`): `Promise`<`ProductCollection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionId` | `string` |
| `productIds` | `string`[] |

#### Returns

`Promise`<`ProductCollection`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:216](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L216)
=======
[medusa/src/services/product-collection.ts:216](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L216)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### create

▸ **create**(`collection`): `Promise`<`ProductCollection`\>

Creates a product collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `CreateProductCollection` | the collection to create |

#### Returns

`Promise`<`ProductCollection`\>

created collection

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:128](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L128)
=======
[medusa/src/services/product-collection.ts:128](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L128)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### delete

▸ **delete**(`collectionId`): `Promise`<`void`\>

Deletes a product collection idempotently

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionId` | `string` | id of collection to delete |

#### Returns

`Promise`<`void`\>

empty promise

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:192](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L192)
=======
[medusa/src/services/product-collection.ts:192](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L192)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### list

▸ **list**(`selector?`, `config?`): `Promise`<`ProductCollection`[]\>

Lists product collections

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `selector` | `Selector`<`ProductCollection`\> & { `discount_condition_id?`: `string` ; `q?`: `string`  } | `{}` | the query object for find |
| `config` | `Object` | `undefined` | the config to be used for find |
| `config.skip` | `number` | `0` | - |
| `config.take` | `number` | `20` | - |

#### Returns

`Promise`<`ProductCollection`[]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:274](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L274)
=======
[medusa/src/services/product-collection.ts:274](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L274)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### listAndCount

▸ **listAndCount**(`selector?`, `config?`): `Promise`<[`ProductCollection`[], `number`]\>

Lists product collections and add count.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `ListAndCountSelector` | the query object for find |
| `config` | `FindConfig`<`ProductCollection`\> | the config to be used for find |

#### Returns

`Promise`<[`ProductCollection`[], `number`]\>

the result of the find operation

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:291](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L291)
=======
[medusa/src/services/product-collection.ts:291](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L291)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### removeProducts

▸ **removeProducts**(`collectionId`, `productIds`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionId` | `string` |
| `productIds` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:242](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L242)
=======
[medusa/src/services/product-collection.ts:242](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L242)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### retrieve

▸ **retrieve**(`collectionId`, `config?`): `Promise`<`ProductCollection`\>

Retrieves a product collection by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionId` | `string` | the id of the collection to retrieve. |
| `config` | `FindConfig`<`ProductCollection`\> | the config of the collection to retrieve. |

#### Returns

`Promise`<`ProductCollection`\>

the collection.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:68](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L68)
=======
[medusa/src/services/product-collection.ts:68](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L68)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### retrieveByHandle

▸ **retrieveByHandle**(`collectionHandle`, `config?`): `Promise`<`ProductCollection`\>

Retrieves a product collection by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionHandle` | `string` | the handle of the collection to retrieve. |
| `config` | `FindConfig`<`ProductCollection`\> | query config for request |

#### Returns

`Promise`<`ProductCollection`\>

the collection.

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:102](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L102)
=======
[medusa/src/services/product-collection.ts:102](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L102)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### update

▸ **update**(`collectionId`, `update`): `Promise`<`ProductCollection`\>

Updates a product collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionId` | `string` | id of collection to update |
| `update` | `UpdateProductCollection` | update object |

#### Returns

`Promise`<`ProductCollection`\>

update collection

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/services/product-collection.ts:154](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/product-collection.ts#L154)
=======
[medusa/src/services/product-collection.ts:154](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/product-collection.ts#L154)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`ProductCollectionService`](ProductCollectionService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`ProductCollectionService`](ProductCollectionService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/ProductCollectionService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/ProductCollectionService.md
