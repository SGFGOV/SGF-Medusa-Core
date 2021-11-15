import {
  defaultAdminOrdersRelations,
  defaultAdminOrdersFields,
  filterableAdminOrdersFields,
} from "."
import { MedusaError, Validator } from "medusa-core-utils"
import { validator } from "../../../../utils/validator"
import {
  IsArray,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator"
import { DateComparisonOperator } from "../../../../types/common"
import { Type } from "class-transformer"
import _ from "lodash"
import { IsType } from "../../../../utils/is-type"

/**
 * @oas [get] /orders
 * operationId: "GetOrders"
 * summary: "List Orders"
 * description: "Retrieves a list of Orders"
 * x-authenticated: true
 * tags:
 *   - Order
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             orders:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/order"
 */
export default async (req, res) => {
  const value = await validator(AdminGetOrdersReq, req.query)
  // const schema = Validator.orderFilter()

  // const { value, error } = schema.validate(req.query)

  // if (error) {
  //   throw new MedusaError(MedusaError.Types.INVALID_DATA, error.details)
  // }

  const orderService = req.scope.resolve("orderService")

  const limit = parseInt(req.query.limit) || 50
  const offset = parseInt(req.query.offset) || 0

  const selector: Selector = _.pick(
    value,
    Object.getOwnPropertyNames(new Selector())
  )

  if ("q" in req.query) {
    selector.q = req.query.q
  }

  let includeFields: string[] = []
  if (value.fields) {
    includeFields = value.fields.split(",")
    // Ensure created_at is included, since we are sorting on this
    includeFields.push("created_at")
  }

  let expandFields: string[] = []
  if (value.expand) {
    expandFields = value.expand.split(",")
  }

  // for (const k of filterableAdminOrdersFields) {
  //   if (k in value) {
  //     selector[k] = value[k]
  //   }
  // }

  const listConfig = {
    select: includeFields.length ? includeFields : defaultAdminOrdersFields,
    relations: expandFields.length ? expandFields : defaultAdminOrdersRelations,
    skip: offset,
    take: limit,
    order: { created_at: "DESC" },
  }

  const [orders, count] = await orderService.listAndCount(selector, listConfig)

  let data = orders

  const fields = [...includeFields, ...expandFields]
  if (fields.length) {
    data = orders.map((o) => _.pick(o, fields))
  }

  res.json({ orders: data, count, offset, limit })
}

enum OrderStatus {
  pending = "pending",
  completed = "completed",
  archived = "archived",
  canceled = "canceled",
  requires_action = "requires_action",
}

enum FulfillmentStatus {
  not_fulfilled = "not_fulfilled",
  fulfilled = "fulfilled",
  partially_fulfilled = "partially_fulfilled",
  shipped = "shipped",
  partially_shipped = "partially_shipped",
  canceled = "canceled",
  returned = "returned",
  partially_returned = "partially_returned",
  requires_action = "requires_action",
}

enum PaymentStatus {
  captured = "captured",
  awaiting = "awaiting",
  not_paid = "not_paid",
  refunded = "refunded",
  partially_refunded = "partially_refunded",
  canceled = "canceled",
  requires_action = "requires_action",
}

export class FilterableAdminOrdersFields {
  @IsString()
  @IsOptional()
  id?: string

  @IsArray()
  @IsEnum(OrderStatus, { each: true })
  @IsOptional()
  status?: string

  @IsArray()
  @IsEnum(FulfillmentStatus, { each: true })
  @IsOptional()
  fulfillment_status?: string

  @IsArray()
  @IsEnum(PaymentStatus)
  @IsOptional()
  payment_status?: string

  @IsString()
  @IsOptional()
  display_id?: string

  @IsString()
  @IsOptional()
  cart_id?: string

  @IsString()
  @IsOptional()
  customer_id?: string

  @IsString()
  @IsOptional()
  email?: string

  @IsString()
  @IsOptional()
  region_id?: string

  @IsString()
  @IsOptional()
  currency_code?: string

  @IsString()
  @IsOptional()
  tax_rate?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => DateComparisonOperator)
  canceled_at?: DateComparisonOperator

  @IsOptional()
  @ValidateNested()
  @Type(() => DateComparisonOperator)
  created_at?: DateComparisonOperator

  @IsOptional()
  @ValidateNested()
  @Type(() => DateComparisonOperator)
  updated_at?: DateComparisonOperator
}

export class AdminGetOrdersReq extends FilterableAdminOrdersFields {
  @IsString()
  @IsOptional()
  q: string

  @IsString()
  @IsOptional()
  offset: string

  @IsString()
  @IsOptional()
  limit: string

  @IsString()
  @IsOptional()
  expand: string

  @IsString()
  @IsOptional()
  fields: string
}

export class Selector extends FilterableAdminOrdersFields {
  q?: string
}
