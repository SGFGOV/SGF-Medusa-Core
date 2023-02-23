import { AbstractBatchJobStrategy, TransactionBaseService } from "../interfaces"
import { EntityManager } from "typeorm"
import { MedusaError } from "medusa-core-utils"
import AbstractAuthStrategy from "../interfaces/authentication-strategy"

type InjectedDependencies = {
  manager: EntityManager
  [key: string]: unknown
}

export default class StrategyResolver extends TransactionBaseService {
  constructor(protected readonly container: InjectedDependencies) {
    super(container)
  }

  resolveBatchJobByType(type: string): AbstractBatchJobStrategy {
    let resolved: AbstractBatchJobStrategy
    try {
      resolved = this.container[`batchType_${type}`] as AbstractBatchJobStrategy
    } catch (e) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `Unable to find a BatchJob strategy with the type ${type}`
      )
    }
    return resolved
  }

  resolveAuthByType<T extends TransactionBaseService>(
    type: string
  ): AbstractAuthStrategy {
    let resolved: AbstractAuthStrategy
    try {
      resolved = this.container[`auth_${type}`] as AbstractAuthStrategy
    } catch (e) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `Unable to find an auth strategy with the type ${type}`
      )
    }
    return resolved
  }
}
