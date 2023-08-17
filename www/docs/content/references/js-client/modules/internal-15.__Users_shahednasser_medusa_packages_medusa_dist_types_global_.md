# Namespace: "/home/runner/work/medusa/medusa/packages/medusa/dist/types/global"

<<<<<<< HEAD:docs/content/references/js-client/modules/internal-15.__Users_shahednasser_medusa_packages_medusa_dist_types_global_.md
[internal](internal-15.md)."/Users/shahednasser/medusa/packages/medusa/dist/types/global"
=======
[internal](internal-7.md)."/home/runner/work/medusa/medusa/packages/medusa/dist/types/global"
>>>>>>> 4542906619ed9135ae7ed0f2ebfc118241d3e297:docs/content/references/js-client/modules/internal-7.__home_runner_work_medusa_medusa_packages_medusa_dist_types_global_.md

## Type Aliases

### ClassConstructor

Ƭ **ClassConstructor**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

medusa/dist/types/global.d.ts:27

___

### ConfigModule

Ƭ **ConfigModule**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `featureFlags` | `Record`<`string`, `boolean` \| `string`\> |
| `plugins` | ({ `options`: `Record`<`string`, `unknown`\> ; `resolve`: `string`  } \| `string`)[] |
| `projectConfig` | { `admin_cors?`: `string` ; `cookie_secret?`: `string` ; `database_database?`: `string` ; `database_extra?`: `Record`<`string`, `unknown`\> & { `ssl`: { `rejectUnauthorized`: ``false``  }  } ; `database_logging`: `LoggerOptions` ; `database_type`: `string` ; `database_url?`: `string` ; `jwt_secret?`: `string` ; `redis_url?`: `string` ; `store_cors?`: `string`  } |
| `projectConfig.admin_cors?` | `string` |
| `projectConfig.cookie_secret?` | `string` |
| `projectConfig.database_database?` | `string` |
| `projectConfig.database_extra?` | `Record`<`string`, `unknown`\> & { `ssl`: { `rejectUnauthorized`: ``false``  }  } |
| `projectConfig.database_logging` | `LoggerOptions` |
| `projectConfig.database_type` | `string` |
| `projectConfig.database_url?` | `string` |
| `projectConfig.jwt_secret?` | `string` |
| `projectConfig.redis_url?` | `string` |
| `projectConfig.store_cors?` | `string` |

#### Defined in

medusa/dist/types/global.d.ts:38

___

### ExtendedRequest

Ƭ **ExtendedRequest**<`TEntity`\>: `Request` & { `resource`: `TEntity`  }

#### Type parameters

| Name |
| :------ |
| `TEntity` |

#### Defined in

medusa/dist/types/global.d.ts:24

___

### Logger

Ƭ **Logger**: `_Logger` & { `info`: (`msg`: `string`) => `void` ; `progress`: (`activityId`: `string`, `msg`: `string`) => `void` ; `warn`: (`msg`: `string`) => `void`  }

#### Defined in

medusa/dist/types/global.d.ts:33

___

### MedusaContainer

<<<<<<< HEAD:docs/content/references/js-client/modules/internal-15.__Users_shahednasser_medusa_packages_medusa_dist_types_global_.md
Ƭ **MedusaContainer**: `AwilixContainer` & { `registerAdd`: <T\>(`name`: `string`, `registration`: `T`) => [`MedusaContainer`](internal-15.__Users_shahednasser_medusa_packages_medusa_dist_types_global_.md#medusacontainer)  }
=======
Ƭ **MedusaContainer**: `AwilixContainer` & { `registerAdd`: <T\>(`name`: `string`, `registration`: `T`) => [`MedusaContainer`](internal-7.__home_runner_work_medusa_medusa_packages_medusa_dist_types_global_.md#medusacontainer)  }
>>>>>>> 4542906619ed9135ae7ed0f2ebfc118241d3e297:docs/content/references/js-client/modules/internal-7.__home_runner_work_medusa_medusa_packages_medusa_dist_types_global_.md

#### Defined in

medusa/dist/types/global.d.ts:30
