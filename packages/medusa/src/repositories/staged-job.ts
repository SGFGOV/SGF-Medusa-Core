import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"
import { dataSource } from "../loaders/database"
import { StagedJob } from "../models"

export const StagedJobRepository = dataSource.getRepository(StagedJob).extend({
  async insertBulk(jobToCreates: QueryDeepPartialEntity<StagedJob>[]) {
    const queryBuilder = this.createQueryBuilder()
      .insert()
      .into(StagedJob)
      .values(jobToCreates)

    /** temporary work around  
     *  return await Promise.all(
        rawStagedJobs.generatedMaps.map(async (d) => {
          this.create(d)
          return await this.save(d)
        })
      )
     * 
    */

    try {
      if (!queryBuilder.connection.driver.isReturningSqlSupported("insert")) {
        const rawStagedJobs = await queryBuilder.execute()
        return await Promise.all(
          rawStagedJobs.generatedMaps.map(async (d) => {
            this.create(d)
            return await this.save(d)
          })
        )
      }

      const rawStagedJobs = await queryBuilder.returning("*").execute()
      return await Promise.all(
        rawStagedJobs.generatedMaps.map(async (d) => {
          this.create(d)
          return await this.save(d)
        })
      )
    } catch (e) {
      return []
    }
  },
})

export default StagedJobRepository
