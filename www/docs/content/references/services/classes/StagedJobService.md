# Class: StagedJobService

Provides layer to manipulate users.

## Hierarchy

- `TransactionBaseService`

  ↳ **`StagedJobService`**

## Constructors

### constructor

• **new StagedJobService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `StagedJobServiceProps` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/services/staged-job.ts:22](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/staged-job.ts#L22)
=======
[medusa/src/services/staged-job.ts:22](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/staged-job.ts#L22)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### stagedJobRepository\_

• `Protected` **stagedJobRepository\_**: `Repository`<`StagedJob`\> & { `insertBulk`: (`jobToCreates`: `_QueryDeepPartialEntity`<`StagedJob`\>[]) => `Promise`<`StagedJob`[]\>  }

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/services/staged-job.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/staged-job.ts#L20)
=======
[medusa/src/services/staged-job.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/staged-job.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### create

▸ **create**(`data`): `Promise`<`StagedJob`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `EmitData`<`unknown`\> \| `EmitData`<`unknown`\>[] |

#### Returns

`Promise`<`StagedJob`[]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/services/staged-job.ts:45](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/staged-job.ts#L45)
=======
[medusa/src/services/staged-job.ts:45](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/staged-job.ts#L45)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### delete

▸ **delete**(`stagedJobIds`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stagedJobIds` | `string` \| `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/services/staged-job.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/staged-job.ts#L37)
=======
[medusa/src/services/staged-job.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/staged-job.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### list

▸ **list**(`config`): `Promise`<`StagedJob`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `FindConfig`<`StagedJob`\> |

#### Returns

`Promise`<`StagedJob`[]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/services/staged-job.ts:29](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/staged-job.ts#L29)
=======
[medusa/src/services/staged-job.ts:29](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/staged-job.ts#L29)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`StagedJobService`](StagedJobService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`StagedJobService`](StagedJobService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/StagedJobService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/StagedJobService.md
