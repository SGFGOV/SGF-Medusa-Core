/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */

export type GetProductsParams = {
  q?: string
  id?: string
  status?: string[]
  collection_id?: string[]
  tags?: string[]
  title?: string
  description?: string
  handle?: string
  is_giftcard?: string
  type?: string
  order?: string
  deleted_at?: { [key: string]: any }
  created_at?: { [key: string]: any }
  updated_at?: { [key: string]: any }
  offset?: string
  limit?: string
  expand?: string
  fields?: string
}