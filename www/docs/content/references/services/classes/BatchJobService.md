# Class: BatchJobService

## Hierarchy

- `TransactionBaseService`

  ↳ **`BatchJobService`**

## Constructors

### constructor

• **new BatchJobService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `InjectedDependencies` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:91](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L91)
=======
[medusa/src/services/batch-job.ts:91](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L91)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### batchJobRepository\_

• `Protected` `Readonly` **batchJobRepository\_**: `Repository`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:39](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L39)
=======
[medusa/src/services/batch-job.ts:39](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L39)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### batchJobStatusMapToProps

• `Protected` **batchJobStatusMapToProps**: `Map`<`BatchJobStatus`, { `entityColumnName`: `string` ; `eventType`: `string`  }\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:43](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L43)
=======
[medusa/src/services/batch-job.ts:43](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L43)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### eventBus\_

• `Protected` `Readonly` **eventBus\_**: [`EventBusService`](EventBusService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:40](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L40)
=======
[medusa/src/services/batch-job.ts:40](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L40)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### strategyResolver\_

• `Protected` `Readonly` **strategyResolver\_**: [`StrategyResolverService`](StrategyResolverService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:41](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L41)
=======
[medusa/src/services/batch-job.ts:41](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L41)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### Events

▪ `Static` `Readonly` **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CANCELED` | `string` |
| `COMPLETED` | `string` |
| `CONFIRMED` | `string` |
| `CREATED` | `string` |
| `FAILED` | `string` |
| `PRE_PROCESSED` | `string` |
| `PROCESSING` | `string` |
| `UPDATED` | `string` |

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:28](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L28)
=======
[medusa/src/services/batch-job.ts:28](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L28)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### cancel

▸ **cancel**(`batchJobOrId`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:270](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L270)
=======
[medusa/src/services/batch-job.ts:270](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L270)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### complete

▸ **complete**(`batchJobOrId`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:252](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L252)
=======
[medusa/src/services/batch-job.ts:252](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L252)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### confirm

▸ **confirm**(`batchJobOrId`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:234](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L234)
=======
[medusa/src/services/batch-job.ts:234](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L234)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### create

▸ **create**(`data`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BatchJobCreateProps` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:144](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L144)
=======
[medusa/src/services/batch-job.ts:144](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L144)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### listAndCount

▸ **listAndCount**(`selector?`, `config?`): `Promise`<[`BatchJob`[], `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FilterableBatchJobProps` |
| `config` | `FindConfig`<`BatchJob`\> |

#### Returns

`Promise`<[`BatchJob`[], `number`]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:132](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L132)
=======
[medusa/src/services/batch-job.ts:132](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L132)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### prepareBatchJobForProcessing

▸ **prepareBatchJobForProcessing**(`data`, `req`): `Promise`<`CreateBatchJobInput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CreateBatchJobInput` |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`CreateBatchJobInput`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:367](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L367)
=======
[medusa/src/services/batch-job.ts:367](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L367)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### retrieve

▸ **retrieve**(`batchJobId`, `config?`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobId` | `string` |
| `config` | `FindConfig`<`BatchJob`\> |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:104](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L104)
=======
[medusa/src/services/batch-job.ts:104](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L104)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### setFailed

▸ **setFailed**(`batchJobOrId`, `error?`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |
| `error?` | `string` \| `BatchJobResultError` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:341](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L341)
=======
[medusa/src/services/batch-job.ts:341](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L341)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### setPreProcessingDone

▸ **setPreProcessingDone**(`batchJobOrId`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:288](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L288)
=======
[medusa/src/services/batch-job.ts:288](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L288)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### setProcessing

▸ **setProcessing**(`batchJobOrId`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:321](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L321)
=======
[medusa/src/services/batch-job.ts:321](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L321)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### update

▸ **update**(`batchJobOrId`, `data`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |
| `data` | `Partial`<`Pick`<`BatchJob`, ``"context"`` \| ``"result"``\>\> |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:161](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L161)
=======
[medusa/src/services/batch-job.ts:161](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L161)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### updateStatus

▸ `Protected` **updateStatus**(`batchJobOrId`, `status`): `Promise`<`BatchJob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchJobOrId` | `string` \| `BatchJob` |
| `status` | `BatchJobStatus` |

#### Returns

`Promise`<`BatchJob`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/services/batch-job.ts:200](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/batch-job.ts#L200)
=======
[medusa/src/services/batch-job.ts:200](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/batch-job.ts#L200)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`BatchJobService`](BatchJobService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`BatchJobService`](BatchJobService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/BatchJobService.md
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
=======
[medusa/src/interfaces/transaction-base-service.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/BatchJobService.md
