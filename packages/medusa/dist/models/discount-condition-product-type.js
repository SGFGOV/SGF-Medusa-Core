"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountConditionProductType = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var discount_condition_1 = require("./discount-condition");
var product_type_1 = require("./product-type");
var DiscountConditionProductType = /** @class */ (function () {
    function DiscountConditionProductType() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionProductType.prototype, "product_type_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionProductType.prototype, "condition_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_type_1.ProductType; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "product_type_id" }),
        __metadata("design:type", product_type_1.ProductType)
    ], DiscountConditionProductType.prototype, "product_type", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return discount_condition_1.DiscountCondition; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "condition_id" }),
        __metadata("design:type", discount_condition_1.DiscountCondition)
    ], DiscountConditionProductType.prototype, "discount_condition", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionProductType.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionProductType.prototype, "updated_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], DiscountConditionProductType.prototype, "metadata", void 0);
    DiscountConditionProductType = __decorate([
        (0, typeorm_1.Entity)()
    ], DiscountConditionProductType);
    return DiscountConditionProductType;
}());
exports.DiscountConditionProductType = DiscountConditionProductType;
/**
 * @schema discount_condition_product_type
 * title: "Product Type Discount Condition"
 * description: "Associates a discount condition with a product type"
 * x-resourceId: discount_condition_product
 * required:
 *   - product_type_id
 *   - condition_id
 * properties:
 *   product_type_id:
 *     description: "The ID of the Product Tag"
 *     type: string
 *     example: ptyp_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   condition_id:
 *     description: "The ID of the Discount Condition"
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   product_type:
 *     description: Available if the relation `product_type` is expanded.
 *     $ref: "#/components/schemas/product_type"
 *   discount_condition:
 *     description: Available if the relation `discount_condition` is expanded.
 *     $ref: "#/components/schemas/discount_condition"
 *   created_at:
 *     type: string
 *     description: "The date with timezone at which the resource was created."
 *     format: date-time
 *   updated_at:
 *     type: string
 *     description: "The date with timezone at which the resource was updated."
 *     format: date-time
 *   metadata:
 *     type: object
 *     description: An optional key-value map with additional details
 *     example: {car: "white"}
 */
//# sourceMappingURL=discount-condition-product-type.js.map