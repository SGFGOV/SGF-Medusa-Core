# Class: EventBusService

Can keep track of multiple subscribers to different events and run the
subscribers when events happen. Events will run asynchronously.

## Hierarchy

- `TransactionBaseService`

  ↳ **`EventBusService`**

## Implements

- `IEventBusService`

## Constructors

### constructor

• **new EventBusService**(`__namedParameters`, `config`, `isSingleton?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | `InjectedDependencies` | `undefined` |
| `config` | `any` | `undefined` |
| `isSingleton` | `boolean` | `true` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:32](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L32)
=======
[medusa/src/services/event-bus.ts:32](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L32)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
=======
[medusa/src/interfaces/transaction-base-service.ts:14](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L14)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
=======
[medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### \_\_moduleDeclaration\_\_

• `Protected` `Optional` `Readonly` **\_\_moduleDeclaration\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_moduleDeclaration\_\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
=======
[medusa/src/interfaces/transaction-base-service.ts:15](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L15)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### config\_

• `Protected` `Readonly` **config\_**: `ConfigModule`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:24](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L24)
=======
[medusa/src/services/event-bus.ts:24](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L24)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### enqueue\_

• `Protected` **enqueue\_**: `Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:30](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L30)
=======
[medusa/src/services/event-bus.ts:30](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L30)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### eventBusModuleService\_

• `Protected` `Readonly` **eventBusModuleService\_**: `IEventBusModuleService`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:27](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L27)
=======
[medusa/src/services/event-bus.ts:27](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L27)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Inherited from

TransactionBaseService.manager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
=======
[medusa/src/interfaces/transaction-base-service.ts:5](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L5)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### shouldEnqueuerRun

• `Protected` **shouldEnqueuerRun**: `boolean`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:29](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L29)
=======
[medusa/src/services/event-bus.ts:29](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L29)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### stagedJobService\_

• `Protected` `Readonly` **stagedJobService\_**: [`StagedJobService`](StagedJobService.md)

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:25](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L25)
=======
[medusa/src/services/event-bus.ts:25](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L25)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Inherited from

TransactionBaseService.transactionManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
=======
[medusa/src/interfaces/transaction-base-service.ts:6](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L6)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

## Accessors

### activeManager\_

• `Protected` `get` **activeManager_**(): `EntityManager`

#### Returns

`EntityManager`

#### Inherited from

TransactionBaseService.activeManager\_

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
=======
[medusa/src/interfaces/transaction-base-service.ts:8](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L8)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
=======
[medusa/src/interfaces/transaction-base-service.ts:56](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L56)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### emit

▸ **emit**<`T`\>(`data`): `Promise`<`void` \| `StagedJob`[]\>

Calls all subscribers when an event occurs.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `EmitData`<`T`\>[] | The data to use to process the events |

#### Returns

`Promise`<`void` \| `StagedJob`[]\>

the jobs from our queue

#### Implementation of

EventBusTypes.IEventBusService.emit

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:112](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L112)
=======
[medusa/src/services/event-bus.ts:112](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L112)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

▸ **emit**<`T`\>(`eventName`, `data`, `options?`): `Promise`<`void` \| `StagedJob`\>

Calls all subscribers when an event occurs.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | the name of the event to be process. |
| `data` | `T` | the data to send to the subscriber. |
| `options?` | `Record`<`string`, `unknown`\> | options to add the job with |

#### Returns

`Promise`<`void` \| `StagedJob`\>

the job from our queue

#### Implementation of

EventBusTypes.IEventBusService.emit

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:121](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L121)
=======
[medusa/src/services/event-bus.ts:121](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L121)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### enqueuer\_

▸ **enqueuer_**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:185](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L185)
=======
[medusa/src/services/event-bus.ts:185](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L185)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

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

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
=======
[medusa/src/interfaces/transaction-base-service.ts:37](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/interfaces/transaction-base-service.ts#L37)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### startEnqueuer

▸ **startEnqueuer**(): `void`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:175](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L175)
=======
[medusa/src/services/event-bus.ts:175](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L175)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### stopEnqueuer

▸ **stopEnqueuer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:180](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L180)
=======
[medusa/src/services/event-bus.ts:180](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L180)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### subscribe

▸ **subscribe**(`event`, `subscriber`, `context?`): [`EventBusService`](EventBusService.md)

Adds a function to a list of event subscribers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | the event that the subscriber will listen for. |
| `subscriber` | `Subscriber`<`unknown`\> | the function to be called when a certain event happens. Subscribers must return a Promise. |
| `context?` | `SubscriberContext` | subscriber context |

#### Returns

[`EventBusService`](EventBusService.md)

this

#### Implementation of

EventBusTypes.IEventBusService.subscribe

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:78](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L78)
=======
[medusa/src/services/event-bus.ts:78](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L78)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### unsubscribe

▸ **unsubscribe**(`event`, `subscriber`, `context`): [`EventBusService`](EventBusService.md)

Removes function from the list of event subscribers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | the event of the subcriber. |
| `subscriber` | `Subscriber`<`unknown`\> | the function to be removed |
| `context` | `SubscriberContext` | subscriber context |

#### Returns

[`EventBusService`](EventBusService.md)

this

#### Implementation of

EventBusTypes.IEventBusService.unsubscribe

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:98](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L98)
=======
[medusa/src/services/event-bus.ts:98](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L98)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`EventBusService`](EventBusService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`EventBusService`](EventBusService.md)

#### Implementation of

EventBusTypes.IEventBusService.withTransaction

#### Overrides

TransactionBaseService.withTransaction

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/EventBusService.md
[medusa/src/services/event-bus.ts:49](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/event-bus.ts#L49)
=======
[medusa/src/services/event-bus.ts:49](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/event-bus.ts#L49)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/EventBusService.md
