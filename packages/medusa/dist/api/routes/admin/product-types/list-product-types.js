"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetProductTypesParams = exports.AdminGetProductTypesPaginationParams = void 0;
var common_1 = require("../../../../types/common");
var class_validator_1 = require("class-validator");
var _1 = require(".");
var lodash_1 = require("lodash");
var is_type_1 = require("../../../../utils/validators/is-type");
var medusa_core_utils_1 = require("medusa-core-utils");
var class_transformer_1 = require("class-transformer");
var validator_1 = require("../../../../utils/validator");
var utils_1 = require("../../../../utils");
/**
 * @oas [get] /product-types
 * operationId: "GetProductTypes"
 * summary: "List Product Types"
 * description: "Retrieve a list of Product Types."
 * x-authenticated: true
 * parameters:
 *   - (query) limit=10 {integer} The number of types to return.
 *   - (query) offset=0 {integer} The number of items to skip before the results.
 *   - (query) order {string} The field to sort items by.
 *   - in: query
 *     name: value
 *     style: form
 *     explode: false
 *     description: The type values to search for
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: The type IDs to search for
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) q {string} A query string to search values for
 *   - in: query
 *     name: created_at
 *     description: Date comparison for when resulting product types were created.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Date comparison for when resulting product types were updated.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.productTypes.list()
 *       .then(({ product_types }) => {
 *         console.log(product_types.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/product-types' \
 *       --header 'Authorization: Bearer {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Product Type
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          properties:
 *            product_types:
 *              $ref: "#/components/schemas/product_type"
 *            count:
 *              type: integer
 *              description: The total number of items available
 *            offset:
 *              type: integer
 *              description: The number of items skipped before these items
 *            limit:
 *              type: integer
 *              description: The number of items per page
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validated, typeService, listConfig, orderField, _a, field, filterableFields, _b, types, count;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(AdminGetProductTypesParams, req.query)];
            case 1:
                validated = _e.sent();
                typeService = req.scope.resolve("productTypeService");
                listConfig = {
                    select: _1.defaultAdminProductTypeFields,
                    relations: _1.defaultAdminProductTypeRelations,
                    skip: validated.offset,
                    take: validated.limit,
                };
                if ((0, utils_1.isDefined)(validated.order)) {
                    orderField = validated.order;
                    if (validated.order.startsWith("-")) {
                        _a = __read(validated.order.split("-"), 2), field = _a[1];
                        orderField = field;
                        listConfig.order = (_c = {}, _c[field] = "DESC", _c);
                    }
                    else {
                        listConfig.order = (_d = {}, _d[validated.order] = "ASC", _d);
                    }
                    if (!_1.allowedAdminProductTypeFields.includes(orderField)) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Order field must be a valid product type field");
                    }
                }
                filterableFields = (0, lodash_1.omit)(validated, ["limit", "offset"]);
                return [4 /*yield*/, typeService.listAndCount((0, lodash_1.pickBy)(filterableFields, lodash_1.identity), listConfig)];
            case 2:
                _b = __read.apply(void 0, [_e.sent(), 2]), types = _b[0], count = _b[1];
                res.status(200).json({
                    product_types: types,
                    count: count,
                    offset: validated.offset,
                    limit: validated.limit,
                });
                return [2 /*return*/];
        }
    });
}); });
var AdminGetProductTypesPaginationParams = /** @class */ (function () {
    function AdminGetProductTypesPaginationParams() {
        this.limit = 10;
        this.offset = 0;
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Object)
    ], AdminGetProductTypesPaginationParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Object)
    ], AdminGetProductTypesPaginationParams.prototype, "offset", void 0);
    return AdminGetProductTypesPaginationParams;
}());
exports.AdminGetProductTypesPaginationParams = AdminGetProductTypesPaginationParams;
var AdminGetProductTypesParams = /** @class */ (function (_super) {
    __extends(AdminGetProductTypesParams, _super);
    function AdminGetProductTypesParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, is_type_1.IsType)([String, [String], common_1.StringComparisonOperator]),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminGetProductTypesParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetProductTypesParams.prototype, "q", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String], common_1.StringComparisonOperator]),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminGetProductTypesParams.prototype, "value", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], AdminGetProductTypesParams.prototype, "created_at", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], AdminGetProductTypesParams.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetProductTypesParams.prototype, "order", void 0);
    return AdminGetProductTypesParams;
}(AdminGetProductTypesPaginationParams));
exports.AdminGetProductTypesParams = AdminGetProductTypesParams;
//# sourceMappingURL=list-product-types.js.map