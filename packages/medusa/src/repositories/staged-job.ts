import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"
import { dataSource } from "../loaders/database"
import { StagedJob } from "../models"

export const StagedJobRepository = dataSource.getRepository(StagedJob).extend({
  async insertBulk(jobToCreates: QueryDeepPartialEntity<StagedJob>[]) {
    const queryBuilder = this.createQueryBuilder()
      .insert()
      .into(StagedJob)
      .values(jobToCreates)

    if (!queryBuilder.connection.driver.isReturningSqlSupported("insert")) {
      const rawStagedJobs = await queryBuilder.execute()
      return rawStagedJobs.generatedMaps.map((d) => this.create(d))
    }
    /** temporary work around  */
    const rawStagedJobs = await queryBuilder.returning("*").execute()
    return await Promise.all(
      rawStagedJobs.generatedMaps.map(async (d) => {
        this.create(d)
        return await this.save(d)
      })
    )
  },
})

export default StagedJobRepository
