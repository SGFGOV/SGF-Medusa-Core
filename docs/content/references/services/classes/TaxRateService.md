# Class: TaxRateService

## Hierarchy

- `TransactionBaseService`

  ↳ **`TaxRateService`**

## Constructors

### constructor

• **new TaxRateService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

[packages/medusa/src/services/tax-rate.ts:28](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L28)

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

[packages/medusa/src/interfaces/transaction-base-service.ts:10](https://github.com/medusajs/medusa/blob/35df4962f/packages/medusa/src/interfaces/transaction-base-service.ts#L10)

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

[packages/medusa/src/interfaces/transaction-base-service.ts:9](https://github.com/medusajs/medusa/blob/35df4962f/packages/medusa/src/interfaces/transaction-base-service.ts#L9)

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Overrides

TransactionBaseService.manager\_

#### Defined in

[packages/medusa/src/services/tax-rate.ts:22](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L22)

___

### productService\_

• `Protected` `Readonly` **productService\_**: [`ProductService`](ProductService.md)

#### Defined in

[packages/medusa/src/services/tax-rate.ts:23](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L23)

___

### productTypeService\_

• `Protected` `Readonly` **productTypeService\_**: [`ProductTypeService`](ProductTypeService.md)

#### Defined in

[packages/medusa/src/services/tax-rate.ts:24](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L24)

___

### shippingOptionService\_

• `Protected` `Readonly` **shippingOptionService\_**: [`ShippingOptionService`](ShippingOptionService.md)

#### Defined in

[packages/medusa/src/services/tax-rate.ts:25](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L25)

___

### taxRateRepository\_

• `Protected` `Readonly` **taxRateRepository\_**: typeof `TaxRateRepository`

#### Defined in

[packages/medusa/src/services/tax-rate.ts:26](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L26)

## Methods

### addToProduct

▸ **addToProduct**(`id`, `productIds`, `replace?`): `Promise`<`ProductTaxRate` \| `ProductTaxRate`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `productIds` | `string` \| `string`[] | `undefined` |
| `replace` | `boolean` | `false` |

#### Returns

`Promise`<`ProductTaxRate` \| `ProductTaxRate`[]\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:197](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L197)

___

### addToProductType

▸ **addToProductType**(`id`, `productTypeIds`, `replace?`): `Promise`<`ProductTypeTaxRate`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `productTypeIds` | `string` \| `string`[] | `undefined` |
| `replace` | `boolean` | `false` |

#### Returns

`Promise`<`ProductTypeTaxRate`[]\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:233](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L233)

___

### addToShippingOption

▸ **addToShippingOption**(`id`, `optionIds`, `replace?`): `Promise`<`ShippingTaxRate`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `optionIds` | `string` \| `string`[] | `undefined` |
| `replace` | `boolean` | `false` |

#### Returns

`Promise`<`ShippingTaxRate`[]\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:257](https://github.com/medusajs/medusa/blob/35df4962f/packages/medusa/src/services/tax-rate.ts#L257)

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

[packages/medusa/src/services/tax-rate.ts:273](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L273)

___

### create

▸ **create**(`data`): `Promise`<`TaxRate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CreateTaxRateInput` |

#### Returns

`Promise`<`TaxRate`\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:104](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L104)

___

### delete

▸ **delete**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:135](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L135)

___

### list

▸ **list**(`selector`, `config?`): `Promise`<`TaxRate`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FilterableTaxRateProps` |
| `config` | `FindConfig`<`TaxRate`\> |

#### Returns

`Promise`<`TaxRate`[]\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:63](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L63)

___

### listAndCount

▸ **listAndCount**(`selector`, `config?`): `Promise`<[`TaxRate`[], `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FilterableTaxRateProps` |
| `config` | `FindConfig`<`TaxRate`\> |

#### Returns

`Promise`<[`TaxRate`[], `number`]\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:74](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L74)

___

### listByProduct

▸ **listByProduct**(`productId`, `config`): `Promise`<`TaxRate`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `productId` | `string` |
| `config` | `TaxRateListByConfig` |

#### Returns

`Promise`<`TaxRate`[]\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:321](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L321)

___

### listByShippingOption

▸ **listByShippingOption**(`shippingOptionId`): `Promise`<`TaxRate`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shippingOptionId` | `string` |

#### Returns

`Promise`<`TaxRate`[]\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:331](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L331)

___

### removeFromProduct

▸ **removeFromProduct**(`id`, `productIds`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `productIds` | `string` \| `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:143](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L143)

___

### removeFromProductType

▸ **removeFromProductType**(`id`, `typeIds`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `typeIds` | `string` \| `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:161](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L161)

___

### removeFromShippingOption

▸ **removeFromShippingOption**(`id`, `optionIds`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `optionIds` | `string` \| `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:179](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L179)

___

### retrieve

▸ **retrieve**(`id`, `config?`): `Promise`<`TaxRate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `FindConfig`<`TaxRate`\> |

#### Returns

`Promise`<`TaxRate`\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:85](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L85)

___

### update

▸ **update**(`id`, `data`): `Promise`<`TaxRate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `UpdateTaxRateInput` |

#### Returns

`Promise`<`TaxRate`\>

#### Defined in

[packages/medusa/src/services/tax-rate.ts:120](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L120)

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`TaxRateService`](TaxRateService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`TaxRateService`](TaxRateService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

[packages/medusa/src/services/tax-rate.ts:44](https://github.com/medusajs/medusa/blob/6225aa57b/packages/medusa/src/services/tax-rate.ts#L44)
