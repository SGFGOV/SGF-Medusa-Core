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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_interfaces_1 = require("medusa-interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
/**
 * Provides layer to manipulate line items.
 * @extends BaseService
 */
var LineItemService = /** @class */ (function (_super) {
    __extends(LineItemService, _super);
    function LineItemService(_a) {
        var manager = _a.manager, lineItemRepository = _a.lineItemRepository, lineItemTaxLineRepository = _a.lineItemTaxLineRepository, productVariantService = _a.productVariantService, productService = _a.productService, pricingService = _a.pricingService, regionService = _a.regionService, cartRepository = _a.cartRepository, lineItemAdjustmentService = _a.lineItemAdjustmentService, featureFlagRouter = _a.featureFlagRouter;
        var _this = _super.call(this) || this;
        _this.manager_ = manager;
        _this.lineItemRepository_ = lineItemRepository;
        _this.itemTaxLineRepo_ = lineItemTaxLineRepository;
        _this.productVariantService_ = productVariantService;
        _this.productService_ = productService;
        _this.pricingService_ = pricingService;
        _this.regionService_ = regionService;
        _this.cartRepository_ = cartRepository;
        _this.lineItemAdjustmentService_ = lineItemAdjustmentService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    LineItemService.prototype.withTransaction = function (transactionManager) {
        if (!transactionManager) {
            return this;
        }
        var cloned = new LineItemService({
            manager: transactionManager,
            lineItemRepository: this.lineItemRepository_,
            lineItemTaxLineRepository: this.itemTaxLineRepo_,
            productVariantService: this.productVariantService_,
            productService: this.productService_,
            pricingService: this.pricingService_,
            regionService: this.regionService_,
            cartRepository: this.cartRepository_,
            lineItemAdjustmentService: this.lineItemAdjustmentService_,
            featureFlagRouter: this.featureFlagRouter_,
        });
        cloned.transactionManager_ = transactionManager;
        return cloned;
    };
    LineItemService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, lineItemRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        lineItemRepo = manager.getCustomRepository(this.lineItemRepository_);
                        query = this.buildQuery_(selector, config);
                        return [4 /*yield*/, lineItemRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves a line item by its id.
     * @param {string} id - the id of the line item to retrieve
     * @param {object} config - the config to be used at query building
     * @return {Promise<LineItem | never>} the line item
     */
    LineItemService.prototype.retrieve = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, lineItemRepository, validatedId, query, lineItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        lineItemRepository = manager.getCustomRepository(this.lineItemRepository_);
                        validatedId = this.validateId_(id);
                        query = this.buildQuery_({ id: validatedId }, config);
                        return [4 /*yield*/, lineItemRepository.findOne(query)];
                    case 1:
                        lineItem = _a.sent();
                        if (!lineItem) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Line item with ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, lineItem];
                }
            });
        });
    };
    /**
     * Creates return line items for a given cart based on the return items in a
     * return.
     * @param {string} returnId - the id to generate return items from.
     * @param {string} cartId - the cart to assign the return line items to.
     * @return {Promise<LineItem[]>} the created line items
     */
    LineItemService.prototype.createReturnLines = function (returnId, cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemRepo, itemTaxLineRepo, returnLineItems;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineItemRepo = transactionManager.getCustomRepository(this.lineItemRepository_);
                                        itemTaxLineRepo = transactionManager.getCustomRepository(this.itemTaxLineRepo_);
                                        return [4 /*yield*/, lineItemRepo
                                                .findByReturn(returnId)
                                                .then(function (lineItems) {
                                                return lineItems.map(function (lineItem) {
                                                    return lineItemRepo.create({
                                                        cart_id: cartId,
                                                        thumbnail: lineItem.thumbnail,
                                                        is_return: true,
                                                        title: lineItem.title,
                                                        variant_id: lineItem.variant_id,
                                                        unit_price: -1 * lineItem.unit_price,
                                                        quantity: lineItem.return_item.quantity,
                                                        allow_discounts: lineItem.allow_discounts,
                                                        tax_lines: lineItem.tax_lines.map(function (taxLine) {
                                                            return itemTaxLineRepo.create({
                                                                name: taxLine.name,
                                                                code: taxLine.code,
                                                                rate: taxLine.rate,
                                                                metadata: taxLine.metadata,
                                                            });
                                                        }),
                                                        metadata: lineItem.metadata,
                                                        adjustments: lineItem.adjustments.map(function (adjustment) {
                                                            return {
                                                                amount: -1 * adjustment.amount,
                                                                description: adjustment.description,
                                                                discount_id: adjustment.discount_id,
                                                                metadata: adjustment.metadata,
                                                            };
                                                        }),
                                                    });
                                                });
                                            })];
                                    case 1:
                                        returnLineItems = _a.sent();
                                        return [4 /*yield*/, lineItemRepo.save(returnLineItems)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LineItemService.prototype.generate = function (variantId, regionId, quantity, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, variant, region, unit_price, unitPriceIncludesTax, shouldMerge, variantPricing, rawLineItem, lineItemRepo, lineItem, adjustments;
                            var _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, Promise.all([
                                            this.productVariantService_
                                                .withTransaction(transactionManager)
                                                .retrieve(variantId, {
                                                relations: ["product"],
                                            }),
                                            this.regionService_
                                                .withTransaction(transactionManager)
                                                .retrieve(regionId),
                                        ])];
                                    case 1:
                                        _a = __read.apply(void 0, [_c.sent(), 2]), variant = _a[0], region = _a[1];
                                        unit_price = Number(context.unit_price) < 0 ? 0 : context.unit_price;
                                        unitPriceIncludesTax = false;
                                        shouldMerge = false;
                                        if (!(context.unit_price === undefined || context.unit_price === null)) return [3 /*break*/, 3];
                                        shouldMerge = true;
                                        return [4 /*yield*/, this.pricingService_
                                                .withTransaction(transactionManager)
                                                .getProductVariantPricingById(variant.id, {
                                                region_id: region.id,
                                                quantity: quantity,
                                                customer_id: context === null || context === void 0 ? void 0 : context.customer_id,
                                                include_discount_prices: true,
                                            })];
                                    case 2:
                                        variantPricing = _c.sent();
                                        unitPriceIncludesTax = !!variantPricing.calculated_price_includes_tax;
                                        unit_price = (_b = variantPricing.calculated_price) !== null && _b !== void 0 ? _b : undefined;
                                        _c.label = 3;
                                    case 3:
                                        rawLineItem = {
                                            unit_price: unit_price,
                                            title: variant.product.title,
                                            description: variant.title,
                                            thumbnail: variant.product.thumbnail,
                                            variant_id: variant.id,
                                            quantity: quantity || 1,
                                            allow_discounts: variant.product.discountable,
                                            is_giftcard: variant.product.is_giftcard,
                                            metadata: (context === null || context === void 0 ? void 0 : context.metadata) || {},
                                            should_merge: shouldMerge,
                                        };
                                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                            rawLineItem.includes_tax = unitPriceIncludesTax;
                                        }
                                        lineItemRepo = transactionManager.getCustomRepository(this.lineItemRepository_);
                                        lineItem = lineItemRepo.create(rawLineItem);
                                        if (!context.cart) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.lineItemAdjustmentService_
                                                .withTransaction(transactionManager)
                                                .generateAdjustments(context.cart, lineItem, { variant: variant })];
                                    case 4:
                                        adjustments = _c.sent();
                                        lineItem.adjustments = adjustments;
                                        _c.label = 5;
                                    case 5: return [2 /*return*/, lineItem];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create a line item
     * @param {Partial<LineItem>} data - the line item object to create
     * @return {Promise<LineItem>} the created line item
     */
    LineItemService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemRepository, lineItem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineItemRepository = transactionManager.getCustomRepository(this.lineItemRepository_);
                                        lineItem = lineItemRepository.create(data);
                                        return [4 /*yield*/, lineItemRepository.save(lineItem)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a line item
     * @param {string} id - the id of the line item to update
     * @param {Partial<LineItem>} data - the properties to update on line item
     * @return {Promise<LineItem>} the update line item
     */
    LineItemService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata, rest;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = data.metadata, rest = __rest(data, ["metadata"]);
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var lineItemRepository, lineItem;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            lineItemRepository = transactionManager.getCustomRepository(this.lineItemRepository_);
                                            return [4 /*yield*/, this.retrieve(id).then(function (lineItem) {
                                                    var lineItemMetadata = metadata
                                                        ? _this.setMetadata_(lineItem, metadata)
                                                        : lineItem.metadata;
                                                    return Object.assign(lineItem, __assign(__assign({}, rest), { metadata: lineItemMetadata }));
                                                })];
                                        case 1:
                                            lineItem = _a.sent();
                                            return [4 /*yield*/, lineItemRepository.save(lineItem)];
                                        case 2: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a line item.
     * @param {string} id - the id of the line item to delete
     * @return {Promise<LineItem | undefined>} the result of the delete operation
     */
    LineItemService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemRepository;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineItemRepository = transactionManager.getCustomRepository(this.lineItemRepository_);
                                        return [4 /*yield*/, lineItemRepository
                                                .findOne({ where: { id: id } })
                                                .then(function (lineItem) { return lineItem && lineItemRepository.remove(lineItem); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create a line item tax line.
     * @param args - tax line partial passed to the repo create method
     * @return a new line item tax line
     */
    LineItemService.prototype.createTaxLine = function (args) {
        var itemTaxLineRepo = this.manager_.getCustomRepository(this.itemTaxLineRepo_);
        return itemTaxLineRepo.create(args);
    };
    return LineItemService;
}(medusa_interfaces_1.BaseService));
exports.default = LineItemService;
//# sourceMappingURL=line-item.js.map