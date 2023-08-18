# Class: MiddlewareService

Orchestrates dynamic middleware registered through the Medusa Middleware API

## Constructors

### constructor

• **new MiddlewareService**()

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:22](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L22)
=======
[medusa/src/services/middleware.ts:22](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L22)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

## Properties

### postAuthentication\_

• `Protected` `Readonly` **postAuthentication\_**: `middlewareType`[]

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:17](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L17)
=======
[medusa/src/services/middleware.ts:17](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L17)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### preAuthentication\_

• `Protected` `Readonly` **preAuthentication\_**: `middlewareType`[]

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:18](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L18)
=======
[medusa/src/services/middleware.ts:18](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L18)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### preCartCreation\_

• `Protected` `Readonly` **preCartCreation\_**: `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>[]

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:19](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L19)
=======
[medusa/src/services/middleware.ts:19](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L19)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### routers

• `Protected` `Readonly` **routers**: `Record`<`string`, `Router`[]\>

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:20](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L20)
=======
[medusa/src/services/middleware.ts:20](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L20)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

## Methods

### addPostAuthentication

▸ **addPostAuthentication**(`middleware`, `options`): `void`

Adds a middleware function to be called after authentication is completed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `middleware` | `middlewareHandlerType` | the middleware function. Should return a   middleware function. |
| `options` | `Record`<`string`, `unknown`\> | the arguments that will be passed to the   middleware |

#### Returns

`void`

void

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:60](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L60)
=======
[medusa/src/services/middleware.ts:60](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L60)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### addPreAuthentication

▸ **addPreAuthentication**(`middleware`, `options`): `void`

Adds a middleware function to be called before authentication is completed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `middleware` | `middlewareHandlerType` | the middleware function. Should return a   middleware function. |
| `options` | `Record`<`string`, `unknown`\> | the arguments that will be passed to the   middleware |

#### Returns

`void`

void

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:79](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L79)
=======
[medusa/src/services/middleware.ts:79](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L79)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### addPreCartCreation

▸ **addPreCartCreation**(`middleware`): `void`

Adds a middleware function to be called before cart creation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `middleware` | `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | the middleware function. Should return a   middleware function. |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:96](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L96)
=======
[medusa/src/services/middleware.ts:96](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L96)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### addRouter

▸ **addRouter**(`path`, `router`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `router` | `Router` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:29](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L29)
=======
[medusa/src/services/middleware.ts:29](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L29)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### getRouters

▸ **getRouters**(`path`): `Router`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Router`[]

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:34](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L34)
=======
[medusa/src/services/middleware.ts:34](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L34)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### usePostAuthentication

▸ **usePostAuthentication**(`app`): `void`

Adds post authentication middleware to an express app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Router` | the express app to add the middleware to |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:106](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L106)
=======
[medusa/src/services/middleware.ts:106](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L106)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### usePreAuthentication

▸ **usePreAuthentication**(`app`): `void`

Adds pre authentication middleware to an express app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Router` | the express app to add the middleware to |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:117](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L117)
=======
[medusa/src/services/middleware.ts:117](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L117)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### usePreCartCreation

▸ **usePreCartCreation**(): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>[]

#### Returns

`RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>[]

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:123](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L123)
=======
[medusa/src/services/middleware.ts:123](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L123)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md

___

### validateMiddleware\_

▸ **validateMiddleware_**(`fn`): `void`

Validates a middleware function, throws if fn is not of type function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `unknown` | the middleware function to validate. |

#### Returns

`void`

nothing if the middleware is a function

#### Defined in

<<<<<<< HEAD:docs/content/references/services/classes/MiddlewareService.md
[medusa/src/services/middleware.ts:43](https://github.com/medusajs/medusa/blob/95c538c67/packages/medusa/src/services/middleware.ts#L43)
=======
[medusa/src/services/middleware.ts:43](https://github.com/medusajs/medusa/blob/755f9cf30/packages/medusa/src/services/middleware.ts#L43)
>>>>>>> 9cc0bc6c9dff3e87f501dadc9eb77aaeea8029ca:www/docs/content/references/services/classes/MiddlewareService.md
