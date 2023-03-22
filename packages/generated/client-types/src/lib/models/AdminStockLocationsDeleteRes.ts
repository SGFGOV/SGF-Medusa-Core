/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRelation, Merge } from "../core/ModelUtils"

export interface AdminStockLocationsDeleteRes {
  /**
   * The ID of the deleted Stock Location.
   */
  id: string
  /**
   * The type of the object that was deleted.
   */
  object: string
  /**
   * Whether or not the items were deleted.
   */
  deleted: boolean
}
