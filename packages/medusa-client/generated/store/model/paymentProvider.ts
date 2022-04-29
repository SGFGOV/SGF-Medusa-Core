/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Represents a Payment Provider plugin and holds its installation status.
 */
export interface PaymentProvider {
  /** The id of the payment provider as given by the plugin. */
  id?: string
  /** Whether the plugin is installed in the current version. Plugins that are no longer installed are not deleted by will have this field set to `false`. */
  is_installed?: boolean
}