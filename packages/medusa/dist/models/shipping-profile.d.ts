import { Product } from "./product";
import { ShippingOption } from "./shipping-option";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare enum ShippingProfileType {
    DEFAULT = "default",
    GIFT_CARD = "gift_card",
    CUSTOM = "custom"
}
export declare class ShippingProfile extends SoftDeletableEntity {
    name: string;
    type: ShippingProfileType;
    products: Product[];
    shipping_options: ShippingOption[];
    metadata: Record<string, unknown>;
    private beforeInsert;
}
/**
 * @schema shipping_profile
 * title: "Shipping Profile"
 * description: "Shipping Profiles have a set of defined Shipping Options that can be used to fulfill a given set of Products."
 * x-resourceId: shipping_profile
 * required:
 *   - name
 *   - type
 * properties:
 *   id:
 *     type: string
 *     description: The shipping profile's ID
 *     example: sp_01G1G5V239ENSZ5MV4JAR737BM
 *   name:
 *     description: "The name given to the Shipping profile - this may be displayed to the Customer."
 *     type: string
 *     example: Default Shipping Profile
 *   type:
 *     description: "The type of the Shipping Profile, may be `default`, `gift_card` or `custom`."
 *     type: string
 *     enum:
 *       - default
 *       - gift_card
 *       - custom
 *     example: default
 *   products:
 *     description: The Products that the Shipping Profile defines Shipping Options for. Available if the relation `products` is expanded.
 *     type: array
 *     items:
 *       type: object
 *       description: A product object.
 *   shipping_options:
 *     description: The Shipping Options that can be used to fulfill the Products in the Shipping Profile. Available if the relation `shipping_options` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/shipping_option"
 *   created_at:
 *     type: string
 *     description: "The date with timezone at which the resource was created."
 *     format: date-time
 *   updated_at:
 *     type: string
 *     description: "The date with timezone at which the resource was updated."
 *     format: date-time
 *   deleted_at:
 *     type: string
 *     description: "The date with timezone at which the resource was deleted."
 *     format: date-time
 *   metadata:
 *     type: object
 *     description: An optional key-value map with additional details
 *     example: {car: "white"}
 */
