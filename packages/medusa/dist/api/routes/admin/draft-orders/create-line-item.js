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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostDraftOrdersDraftOrderLineItemsReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var medusa_core_utils_1 = require("medusa-core-utils");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /draft-orders/{id}/line-items
 * operationId: "PostDraftOrdersDraftOrderLineItems"
 * summary: "Create a Line Item"
 * description: "Creates a Line Item for the Draft Order"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Draft Order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         required:
 *           - quantity
 *         properties:
 *           variant_id:
 *             description: The ID of the Product Variant to generate the Line Item from.
 *             type: string
 *           unit_price:
 *             description: The potential custom price of the item.
 *             type: integer
 *           title:
 *             description: The potential custom title of the item.
 *             type: string
 *             default: "Custom item"
 *           quantity:
 *             description: The quantity of the Line Item.
 *             type: integer
 *           metadata:
 *             description: The optional key-value map with additional details about the Line Item.
 *             type: object
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.addLineItem(draft_order_id, {
 *         quantity: 1
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/draft-orders/{id}/line-items' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "quantity": 1
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Draft Order
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             draft_order:
 *               $ref: "#/components/schemas/draft-order"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, validated, draftOrderService, cartService, lineItemService, entityManager;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostDraftOrdersDraftOrderLineItemsReq, req.body)];
            case 1:
                validated = _a.sent();
                draftOrderService = req.scope.resolve("draftOrderService");
                cartService = req.scope.resolve("cartService");
                lineItemService = req.scope.resolve("lineItemService");
                entityManager = req.scope.resolve("manager");
                return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var draftOrder, line, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, draftOrderService
                                        .withTransaction(manager)
                                        .retrieve(id, {
                                        select: _1.defaultAdminDraftOrdersFields,
                                        relations: ["cart"],
                                    })];
                                case 1:
                                    draftOrder = _b.sent();
                                    if (draftOrder.status === "completed") {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "You are only allowed to update open draft orders");
                                    }
                                    if (!validated.variant_id) return [3 /*break*/, 4];
                                    return [4 /*yield*/, lineItemService
                                            .withTransaction(manager)
                                            .generate(validated.variant_id, draftOrder.cart.region_id, validated.quantity, { metadata: validated.metadata, unit_price: validated.unit_price })];
                                case 2:
                                    line = _b.sent();
                                    return [4 /*yield*/, cartService
                                            .withTransaction(manager)
                                            .addLineItem(draftOrder.cart_id, line, { validateSalesChannels: false })];
                                case 3:
                                    _b.sent();
                                    return [3 /*break*/, 6];
                                case 4: 
                                // custom line items can be added to a draft order
                                return [4 /*yield*/, lineItemService.withTransaction(manager).create({
                                        cart_id: draftOrder.cart_id,
                                        has_shipping: true,
                                        title: validated.title,
                                        allow_discounts: false,
                                        unit_price: validated.unit_price || 0,
                                        quantity: validated.quantity,
                                    })];
                                case 5:
                                    // custom line items can be added to a draft order
                                    _b.sent();
                                    _b.label = 6;
                                case 6:
                                    _a = draftOrder;
                                    return [4 /*yield*/, cartService
                                            .withTransaction(manager)
                                            .retrieve(draftOrder.cart_id, {
                                            relations: _1.defaultAdminDraftOrdersCartRelations,
                                            select: _1.defaultAdminDraftOrdersCartFields,
                                        })];
                                case 7:
                                    _a.cart = _b.sent();
                                    res.status(200).json({ draft_order: draftOrder });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var AdminPostDraftOrdersDraftOrderLineItemsReq = /** @class */ (function () {
    function AdminPostDraftOrdersDraftOrderLineItemsReq() {
        this.title = "Custom item";
        this.metadata = {};
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersDraftOrderLineItemsReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostDraftOrdersDraftOrderLineItemsReq.prototype, "unit_price", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersDraftOrderLineItemsReq.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], AdminPostDraftOrdersDraftOrderLineItemsReq.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostDraftOrdersDraftOrderLineItemsReq.prototype, "metadata", void 0);
    return AdminPostDraftOrdersDraftOrderLineItemsReq;
}());
exports.AdminPostDraftOrdersDraftOrderLineItemsReq = AdminPostDraftOrdersDraftOrderLineItemsReq;
//# sourceMappingURL=create-line-item.js.map