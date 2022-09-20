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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var sales_channels_1 = __importDefault(require("../loaders/feature-flags/sales-channels"));
var models_1 = require("../models");
var utils_1 = require("../utils");
var is_email_1 = require("../utils/is-email");
/* Provides layer to manipulate carts.
 * @implements BaseService
 */
var CartService = /** @class */ (function (_super) {
    __extends(CartService, _super);
    function CartService(_a) {
        var manager = _a.manager, cartRepository = _a.cartRepository, shippingMethodRepository = _a.shippingMethodRepository, lineItemRepository = _a.lineItemRepository, eventBusService = _a.eventBusService, paymentProviderService = _a.paymentProviderService, productService = _a.productService, productVariantService = _a.productVariantService, taxProviderService = _a.taxProviderService, regionService = _a.regionService, lineItemService = _a.lineItemService, shippingOptionService = _a.shippingOptionService, customerService = _a.customerService, discountService = _a.discountService, giftCardService = _a.giftCardService, totalsService = _a.totalsService, addressRepository = _a.addressRepository, paymentSessionRepository = _a.paymentSessionRepository, inventoryService = _a.inventoryService, customShippingOptionService = _a.customShippingOptionService, lineItemAdjustmentService = _a.lineItemAdjustmentService, priceSelectionStrategy = _a.priceSelectionStrategy, salesChannelService = _a.salesChannelService, featureFlagRouter = _a.featureFlagRouter, storeService = _a.storeService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.shippingMethodRepository_ = shippingMethodRepository;
        _this.cartRepository_ = cartRepository;
        _this.lineItemRepository_ = lineItemRepository;
        _this.eventBus_ = eventBusService;
        _this.productVariantService_ = productVariantService;
        _this.productService_ = productService;
        _this.regionService_ = regionService;
        _this.lineItemService_ = lineItemService;
        _this.paymentProviderService_ = paymentProviderService;
        _this.customerService_ = customerService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.discountService_ = discountService;
        _this.giftCardService_ = giftCardService;
        _this.totalsService_ = totalsService;
        _this.addressRepository_ = addressRepository;
        _this.paymentSessionRepository_ = paymentSessionRepository;
        _this.inventoryService_ = inventoryService;
        _this.customShippingOptionService_ = customShippingOptionService;
        _this.taxProviderService_ = taxProviderService;
        _this.lineItemAdjustmentService_ = lineItemAdjustmentService;
        _this.priceSelectionStrategy_ = priceSelectionStrategy;
        _this.salesChannelService_ = salesChannelService;
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.storeService_ = storeService;
        return _this;
    }
    CartService.prototype.transformQueryForTotals_ = function (config) {
        var select = config.select, relations = config.relations;
        if (!select) {
            return {
                select: select,
                relations: relations,
                totalsToSelect: [],
            };
        }
        var totalFields = [
            "subtotal",
            "tax_total",
            "shipping_total",
            "discount_total",
            "gift_card_total",
            "total",
        ];
        var totalsToSelect = select.filter(function (v) {
            return totalFields.includes(v);
        });
        if (totalsToSelect.length > 0) {
            var relationSet = new Set(relations);
            relationSet.add("items");
            relationSet.add("items.tax_lines");
            relationSet.add("gift_cards");
            relationSet.add("discounts");
            relationSet.add("discounts.rule");
            // relationSet.add("discounts.parent_discount")
            // relationSet.add("discounts.parent_discount.rule")
            // relationSet.add("discounts.parent_discount.regions")
            relationSet.add("shipping_methods");
            relationSet.add("shipping_address");
            relationSet.add("region");
            relationSet.add("region.tax_rates");
            relations = Array.from(relationSet.values());
            select = select.filter(function (v) { return !totalFields.includes(v); });
        }
        return {
            relations: relations,
            select: select,
            totalsToSelect: totalsToSelect,
        };
    };
    CartService.prototype.decorateTotals_ = function (cart, totalsToSelect, options) {
        if (options === void 0) { options = { force_taxes: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var totals, totalsToSelect_1, totalsToSelect_1_1, key, _a, _b, _c, _d, _e, giftCardBreakdown, _f, e_1_1;
            var e_1, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        totals = {};
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 18, 19, 20]);
                        totalsToSelect_1 = __values(totalsToSelect), totalsToSelect_1_1 = totalsToSelect_1.next();
                        _h.label = 2;
                    case 2:
                        if (!!totalsToSelect_1_1.done) return [3 /*break*/, 17];
                        key = totalsToSelect_1_1.value;
                        _a = key;
                        switch (_a) {
                            case "total": return [3 /*break*/, 3];
                            case "shipping_total": return [3 /*break*/, 5];
                            case "discount_total": return [3 /*break*/, 7];
                            case "tax_total": return [3 /*break*/, 9];
                            case "gift_card_total": return [3 /*break*/, 11];
                            case "subtotal": return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 15];
                    case 3:
                        _b = totals;
                        return [4 /*yield*/, this.totalsService_.getTotal(cart, {
                                force_taxes: options.force_taxes,
                            })];
                    case 4:
                        _b.total = _h.sent();
                        return [3 /*break*/, 16];
                    case 5:
                        _c = totals;
                        return [4 /*yield*/, this.totalsService_.getShippingTotal(cart)];
                    case 6:
                        _c.shipping_total = _h.sent();
                        return [3 /*break*/, 16];
                    case 7:
                        _d = totals;
                        return [4 /*yield*/, this.totalsService_.getDiscountTotal(cart)];
                    case 8:
                        _d.discount_total = _h.sent();
                        return [3 /*break*/, 16];
                    case 9:
                        _e = totals;
                        return [4 /*yield*/, this.totalsService_.getTaxTotal(cart, options.force_taxes)];
                    case 10:
                        _e.tax_total = _h.sent();
                        return [3 /*break*/, 16];
                    case 11: return [4 /*yield*/, this.totalsService_.getGiftCardTotal(cart)];
                    case 12:
                        giftCardBreakdown = _h.sent();
                        totals.gift_card_total = giftCardBreakdown.total;
                        totals.gift_card_tax_total = giftCardBreakdown.tax_total;
                        return [3 /*break*/, 16];
                    case 13:
                        _f = totals;
                        return [4 /*yield*/, this.totalsService_.getSubtotal(cart)];
                    case 14:
                        _f.subtotal = _h.sent();
                        return [3 /*break*/, 16];
                    case 15: return [3 /*break*/, 16];
                    case 16:
                        totalsToSelect_1_1 = totalsToSelect_1.next();
                        return [3 /*break*/, 2];
                    case 17: return [3 /*break*/, 20];
                    case 18:
                        e_1_1 = _h.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 20];
                    case 19:
                        try {
                            if (totalsToSelect_1_1 && !totalsToSelect_1_1.done && (_g = totalsToSelect_1.return)) _g.call(totalsToSelect_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 20: return [2 /*return*/, Object.assign(cart, totals)];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - config object
     * @return the result of the find operation
     */
    CartService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, cartRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        cartRepo = manager.getCustomRepository(this.cartRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, cartRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a cart by id.
     * @param cartId - the id of the cart to get.
     * @param options - the options to get a cart
     * @param totalsConfig - configuration for retrieval of totals
     * @return the cart document.
     */
    CartService.prototype.retrieve = function (cartId, options, totalsConfig) {
        if (options === void 0) { options = {}; }
        if (totalsConfig === void 0) { totalsConfig = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, cartRepo, validatedId, _a, select, relations, totalsToSelect, query, queryRelations, raw;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        manager = this.manager_;
                        cartRepo = manager.getCustomRepository(this.cartRepository_);
                        validatedId = (0, utils_1.validateId)(cartId);
                        _a = this.transformQueryForTotals_(options), select = _a.select, relations = _a.relations, totalsToSelect = _a.totalsToSelect;
                        query = (0, utils_1.buildQuery)({ id: validatedId }, __assign(__assign({}, options), { select: select, relations: relations }));
                        if (relations && relations.length > 0) {
                            query.relations = relations;
                        }
                        if (select && select.length > 0) {
                            query.select = select;
                        }
                        else {
                            query.select = undefined;
                        }
                        queryRelations = query.relations;
                        query.relations = undefined;
                        return [4 /*yield*/, cartRepo.findOneWithRelations(queryRelations, query)];
                    case 1:
                        raw = _b.sent();
                        if (!raw) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Cart with ".concat(cartId, " was not found"));
                        }
                        return [4 /*yield*/, this.decorateTotals_(raw, totalsToSelect, totalsConfig)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * Creates a cart.
     * @param data - the data to create the cart with
     * @return the result of the create operation
     */
    CartService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartRepo, addressRepo, rawCart, _a, customer, region, regCountries, addr, remainingFields, remainingFields_1, remainingFields_1_1, remainingField, key, createdCart, cart;
                            var e_2, _b;
                            var _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        cartRepo = transactionManager.getCustomRepository(this.cartRepository_);
                                        addressRepo = transactionManager.getCustomRepository(this.addressRepository_);
                                        rawCart = {
                                            context: (_c = data.context) !== null && _c !== void 0 ? _c : {},
                                        };
                                        if (!this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key)) return [3 /*break*/, 2];
                                        _a = rawCart;
                                        return [4 /*yield*/, this.getValidatedSalesChannel(data.sales_channel_id)];
                                    case 1:
                                        _a.sales_channel_id = (_d.sent()).id;
                                        _d.label = 2;
                                    case 2:
                                        if (!data.email) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.createOrFetchUserFromEmail_(data.email)];
                                    case 3:
                                        customer = _d.sent();
                                        rawCart.customer = customer;
                                        rawCart.customer_id = customer.id;
                                        rawCart.email = customer.email;
                                        _d.label = 4;
                                    case 4:
                                        if (!data.region_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "A region_id must be provided when creating a cart");
                                        }
                                        rawCart.region_id = data.region_id;
                                        return [4 /*yield*/, this.regionService_
                                                .withTransaction(transactionManager)
                                                .retrieve(data.region_id, {
                                                relations: ["countries"],
                                            })];
                                    case 5:
                                        region = _d.sent();
                                        regCountries = region.countries.map(function (_a) {
                                            var iso_2 = _a.iso_2;
                                            return iso_2;
                                        });
                                        if (!(!data.shipping_address && !data.shipping_address_id)) return [3 /*break*/, 6];
                                        if (region.countries.length === 1) {
                                            rawCart.shipping_address = addressRepo.create({
                                                country_code: regCountries[0],
                                            });
                                        }
                                        return [3 /*break*/, 8];
                                    case 6:
                                        if (data.shipping_address) {
                                            if (!regCountries.includes(data.shipping_address.country_code)) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Shipping country not in region");
                                            }
                                            rawCart.shipping_address = data.shipping_address;
                                        }
                                        if (!data.shipping_address_id) return [3 /*break*/, 8];
                                        return [4 /*yield*/, addressRepo.findOne(data.shipping_address_id)];
                                    case 7:
                                        addr = _d.sent();
                                        if ((addr === null || addr === void 0 ? void 0 : addr.country_code) &&
                                            !regCountries.includes(addr.country_code)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Shipping country not in region");
                                        }
                                        rawCart.shipping_address_id = data.shipping_address_id;
                                        _d.label = 8;
                                    case 8:
                                        remainingFields = [
                                            "billing_address_id",
                                            "context",
                                            "type",
                                            "metadata",
                                            "discounts",
                                            "gift_cards",
                                        ];
                                        try {
                                            for (remainingFields_1 = __values(remainingFields), remainingFields_1_1 = remainingFields_1.next(); !remainingFields_1_1.done; remainingFields_1_1 = remainingFields_1.next()) {
                                                remainingField = remainingFields_1_1.value;
                                                if ((0, utils_1.isDefined)(data[remainingField]) && remainingField !== "object") {
                                                    key = remainingField;
                                                    rawCart[key] = data[remainingField];
                                                }
                                            }
                                        }
                                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                        finally {
                                            try {
                                                if (remainingFields_1_1 && !remainingFields_1_1.done && (_b = remainingFields_1.return)) _b.call(remainingFields_1);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                        }
                                        createdCart = cartRepo.create(rawCart);
                                        return [4 /*yield*/, cartRepo.save(createdCart)];
                                    case 9:
                                        cart = _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.CREATED, {
                                                id: cart.id,
                                            })];
                                    case 10:
                                        _d.sent();
                                        return [2 /*return*/, cart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.getValidatedSalesChannel = function (salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var salesChannel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, utils_1.isDefined)(salesChannelId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.salesChannelService_
                                .withTransaction(this.manager_)
                                .retrieve(salesChannelId)];
                    case 1:
                        salesChannel = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.storeService_.withTransaction(this.manager_).retrieve({
                            relations: ["default_sales_channel"],
                        })];
                    case 3:
                        salesChannel = (_a.sent()).default_sales_channel;
                        _a.label = 4;
                    case 4:
                        if (salesChannel.is_disabled) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Unable to assign the cart to a disabled Sales Channel \"".concat(salesChannel.name, "\""));
                        }
                        return [2 /*return*/, salesChannel];
                }
            });
        });
    };
    /**
     * Removes a line item from the cart.
     * @param cartId - the id of the cart that we will remove from
     * @param lineItemId - the line item to remove.
     * @return the result of the update operation
     */
    CartService.prototype.removeLineItem = function (cartId, lineItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, lineItem, lineItemRepository, result;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: [
                                                "items",
                                                "items.variant",
                                                "items.variant.product",
                                                "payment_sessions",
                                            ],
                                        })];
                                    case 1:
                                        cart = _b.sent();
                                        lineItem = cart.items.find(function (item) { return item.id === lineItemId; });
                                        if (!lineItem) {
                                            return [2 /*return*/, cart];
                                        }
                                        if (!((_a = cart.shipping_methods) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.shippingOptionService_
                                                .withTransaction(transactionManager)
                                                .deleteShippingMethods(cart.shipping_methods)];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        lineItemRepository = transactionManager.getCustomRepository(this.lineItemRepository_);
                                        return [4 /*yield*/, lineItemRepository.update({
                                                id: (0, typeorm_1.In)(cart.items.map(function (item) { return item.id; })),
                                            }, {
                                                has_shipping: false,
                                            })];
                                    case 4:
                                        _b.sent();
                                        return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(transactionManager)
                                                .delete(lineItem.id)];
                                    case 5:
                                        _b.sent();
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                relations: ["items", "discounts", "discounts.rule", "region"],
                                            })];
                                    case 6:
                                        result = _b.sent();
                                        return [4 /*yield*/, this.refreshAdjustments_(result)
                                            // Notify subscribers
                                        ];
                                    case 7:
                                        _b.sent();
                                        // Notify subscribers
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, {
                                                id: cart.id,
                                            })];
                                    case 8:
                                        // Notify subscribers
                                        _b.sent();
                                        return [2 /*return*/, this.retrieve(cartId)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks if a given line item has a shipping method that can fulfill it.
     * Returns true if all products in the cart can be fulfilled with the current
     * shipping methods.
     * @param shippingMethods - the set of shipping methods to check from
     * @param lineItem - the line item
     * @return boolean representing whether shipping method is validated
     */
    CartService.prototype.validateLineItemShipping_ = function (shippingMethods, lineItem) {
        if (!lineItem.variant_id) {
            return true;
        }
        if (shippingMethods &&
            shippingMethods.length &&
            lineItem.variant &&
            lineItem.variant.product) {
            var productProfile = lineItem.variant.product.profile_id;
            var selectedProfiles = shippingMethods.map(function (_a) {
                var shipping_option = _a.shipping_option;
                return shipping_option.profile_id;
            });
            return selectedProfiles.includes(productProfile);
        }
        return false;
    };
    /**
     * Check if line item's variant belongs to the cart's sales channel.
     *
     * @param cart - the cart for the line item
     * @param lineItem - the line item being added
     * @return a boolean indicating validation result
     */
    CartService.prototype.validateLineItem = function (cart, lineItem) {
        return __awaiter(this, void 0, void 0, function () {
            var lineItemVariant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cart.sales_channel_id) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.productVariantService_
                                .withTransaction(this.manager_)
                                .retrieve(lineItem.variant_id)];
                    case 1:
                        lineItemVariant = _a.sent();
                        return [4 /*yield*/, this.productService_
                                .withTransaction(this.manager_)
                                .filterProductsBySalesChannel([lineItemVariant.product_id], cart.sales_channel_id)];
                    case 2: return [2 /*return*/, !!(_a.sent()).length];
                }
            });
        });
    };
    /**
     * Adds a line item to the cart.
     * @param cartId - the id of the cart that we will add to
     * @param lineItem - the line item to add.
     * @param config
     *    validateSalesChannels - should check if product belongs to the same sales chanel as cart
     *                            (if cart has associated sales channel)
     * @return the result of the update operation
     */
    CartService.prototype.addLineItem = function (cartId, lineItem, config) {
        if (config === void 0) { config = { validateSalesChannels: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, currentItem, quantity, lineItemRepository, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: [
                                                "shipping_methods",
                                                "items",
                                                "items.adjustments",
                                                "payment_sessions",
                                                "items.variant",
                                                "items.variant.product",
                                                "discounts",
                                                "discounts.rule",
                                            ],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        if (!this.featureFlagRouter_.isFeatureEnabled("sales_channels")) return [3 /*break*/, 3];
                                        if (!config.validateSalesChannels) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.validateLineItem(cart, lineItem)];
                                    case 2:
                                        if (!(_a.sent())) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The product \"".concat(lineItem.title, "\" must belongs to the sales channel on which the cart has been created."));
                                        }
                                        _a.label = 3;
                                    case 3:
                                        if (lineItem.should_merge) {
                                            currentItem = cart.items.find(function (item) {
                                                if (item.should_merge && item.variant_id === lineItem.variant_id) {
                                                    return (0, lodash_1.isEqual)(item.metadata, lineItem.metadata);
                                                }
                                                return false;
                                            });
                                        }
                                        quantity = currentItem
                                            ? (currentItem.quantity += lineItem.quantity)
                                            : lineItem.quantity;
                                        // Confirm inventory or throw error
                                        return [4 /*yield*/, this.inventoryService_
                                                .withTransaction(transactionManager)
                                                .confirmInventory(lineItem.variant_id, quantity)];
                                    case 4:
                                        // Confirm inventory or throw error
                                        _a.sent();
                                        if (!currentItem) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(transactionManager)
                                                .update(currentItem.id, {
                                                quantity: currentItem.quantity,
                                            })];
                                    case 5:
                                        _a.sent();
                                        return [3 /*break*/, 8];
                                    case 6: return [4 /*yield*/, this.lineItemService_
                                            .withTransaction(transactionManager)
                                            .create(__assign(__assign({}, lineItem), { has_shipping: false, cart_id: cartId }))];
                                    case 7:
                                        _a.sent();
                                        _a.label = 8;
                                    case 8:
                                        lineItemRepository = transactionManager.getCustomRepository(this.lineItemRepository_);
                                        return [4 /*yield*/, lineItemRepository.update({
                                                id: (0, typeorm_1.In)(cart.items.map(function (item) { return item.id; })),
                                            }, {
                                                has_shipping: false,
                                            })];
                                    case 9:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                relations: ["items", "discounts", "discounts.rule", "region"],
                                            })];
                                    case 10:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.refreshAdjustments_(result)];
                                    case 11:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, result)];
                                    case 12:
                                        _a.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a cart's existing line item.
     * @param cartId - the id of the cart to update
     * @param lineItemId - the id of the line item to update.
     * @param lineItemUpdate - the line item to update. Must include an id field.
     * @return the result of the update operation
     */
    CartService.prototype.updateLineItem = function (cartId, lineItemId, lineItemUpdate) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, lineItemExists, hasInventory, updatedCart;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["items", "items.adjustments", "payment_sessions"],
                                        })
                                        // Ensure that the line item exists in the cart
                                    ];
                                    case 1:
                                        cart = _a.sent();
                                        lineItemExists = cart.items.find(function (i) { return i.id === lineItemId; });
                                        if (!lineItemExists) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "A line item with the provided id doesn't exist in the cart");
                                        }
                                        if (!lineItemUpdate.quantity) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.inventoryService_
                                                .withTransaction(transactionManager)
                                                .confirmInventory(lineItemExists.variant_id, lineItemUpdate.quantity)];
                                    case 2:
                                        hasInventory = _a.sent();
                                        if (!hasInventory) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Inventory doesn't cover the desired quantity");
                                        }
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, this.lineItemService_
                                            .withTransaction(transactionManager)
                                            .update(lineItemId, lineItemUpdate)];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                relations: ["items", "discounts", "discounts.rule", "region"],
                                            })];
                                    case 5:
                                        updatedCart = _a.sent();
                                        return [4 /*yield*/, this.refreshAdjustments_(updatedCart)
                                            // Update the line item
                                        ];
                                    case 6:
                                        _a.sent();
                                        // Update the line item
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 7:
                                        // Update the line item
                                        _a.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Ensures shipping total on cart is correct in regards to a potential free
     * shipping discount
     * If a free shipping is present, we set shipping methods price to 0
     * if a free shipping was present, we set shipping methods to original amount
     * @param cart - the the cart to adjust free shipping for
     * @param shouldAdd - flag to indicate, if we should add or remove
     * @return void
     */
    CartService.prototype.adjustFreeShipping_ = function (cart, shouldAdd) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, shippingMethodRepository_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        if (!((_b = cart.shipping_methods) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 4];
                        shippingMethodRepository_1 = transactionManager.getCustomRepository(this.shippingMethodRepository_);
                        if (!shouldAdd) return [3 /*break*/, 2];
                        return [4 /*yield*/, shippingMethodRepository_1.update({
                                id: (0, typeorm_1.In)(cart.shipping_methods.map(function (shippingMethod) { return shippingMethod.id; })),
                            }, {
                                price: 0,
                            })];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Promise.all(cart.shipping_methods.map(function (shippingMethod) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            var _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        // if free shipping discount is removed, we adjust the shipping
                                        // back to its original amount
                                        // if shipping option amount is null, we assume the option is calculated
                                        _a = shippingMethod;
                                        if (!((_c = shippingMethod.shipping_option.amount) !== null && _c !== void 0)) return [3 /*break*/, 1];
                                        _b = _c;
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.shippingOptionService_.getPrice_(shippingMethod.shipping_option, shippingMethod.data, cart)];
                                    case 2:
                                        _b = (_d.sent());
                                        _d.label = 3;
                                    case 3:
                                        // if free shipping discount is removed, we adjust the shipping
                                        // back to its original amount
                                        // if shipping option amount is null, we assume the option is calculated
                                        _a.price = _b;
                                        return [2 /*return*/, shippingMethodRepository_1.save(shippingMethod)];
                                }
                            });
                        }); }))];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.update = function (cartId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartRepo, relations, cart, customer, shippingAddress_1, countryCode, addrRepo, billingAddress, shippingAddress, previousDiscounts, hasFreeShipping, prevContext, updatedCart;
                            var _this = this;
                            var _a, _b, _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        cartRepo = transactionManager.getCustomRepository(this.cartRepository_);
                                        relations = [
                                            "items",
                                            "shipping_methods",
                                            "shipping_address",
                                            "billing_address",
                                            "gift_cards",
                                            "customer",
                                            "region",
                                            "payment_sessions",
                                            "region.countries",
                                            "discounts",
                                            "discounts.rule",
                                            "discounts.regions",
                                        ];
                                        if (this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key) &&
                                            data.sales_channel_id) {
                                            relations.push("items.variant", "items.variant.product");
                                        }
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                select: [
                                                    "subtotal",
                                                    "tax_total",
                                                    "shipping_total",
                                                    "discount_total",
                                                    "total",
                                                ],
                                                relations: relations,
                                            })];
                                    case 1:
                                        cart = _e.sent();
                                        if (!data.customer_id) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.updateCustomerId_(cart, data.customer_id)];
                                    case 2:
                                        _e.sent();
                                        return [3 /*break*/, 5];
                                    case 3:
                                        if (!(0, utils_1.isDefined)(data.email)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.createOrFetchUserFromEmail_(data.email)];
                                    case 4:
                                        customer = _e.sent();
                                        cart.customer = customer;
                                        cart.customer_id = customer.id;
                                        cart.email = customer.email;
                                        _e.label = 5;
                                    case 5:
                                        if (!((0, utils_1.isDefined)(data.customer_id) || (0, utils_1.isDefined)(data.region_id))) return [3 /*break*/, 7];
                                        return [4 /*yield*/, this.updateUnitPrices_(cart, data.region_id, data.customer_id)];
                                    case 6:
                                        _e.sent();
                                        _e.label = 7;
                                    case 7:
                                        if (!(0, utils_1.isDefined)(data.region_id)) return [3 /*break*/, 9];
                                        shippingAddress_1 = typeof data.shipping_address !== "string"
                                            ? data.shipping_address
                                            : {};
                                        countryCode = (_a = (data.country_code || (shippingAddress_1 === null || shippingAddress_1 === void 0 ? void 0 : shippingAddress_1.country_code))) !== null && _a !== void 0 ? _a : null;
                                        return [4 /*yield*/, this.setRegion_(cart, data.region_id, countryCode)];
                                    case 8:
                                        _e.sent();
                                        _e.label = 9;
                                    case 9:
                                        addrRepo = transactionManager.getCustomRepository(this.addressRepository_);
                                        billingAddress = (_b = data.billing_address_id) !== null && _b !== void 0 ? _b : data.billing_address;
                                        if (!(billingAddress !== undefined)) return [3 /*break*/, 11];
                                        return [4 /*yield*/, this.updateBillingAddress_(cart, billingAddress, addrRepo)];
                                    case 10:
                                        _e.sent();
                                        _e.label = 11;
                                    case 11:
                                        shippingAddress = (_c = data.shipping_address_id) !== null && _c !== void 0 ? _c : data.shipping_address;
                                        if (!(shippingAddress !== undefined)) return [3 /*break*/, 13];
                                        return [4 /*yield*/, this.updateShippingAddress_(cart, shippingAddress, addrRepo)];
                                    case 12:
                                        _e.sent();
                                        _e.label = 13;
                                    case 13:
                                        if (!this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key)) return [3 /*break*/, 15];
                                        if (!((0, utils_1.isDefined)(data.sales_channel_id) &&
                                            data.sales_channel_id != cart.sales_channel_id)) return [3 /*break*/, 15];
                                        return [4 /*yield*/, this.onSalesChannelChange(cart, data.sales_channel_id)];
                                    case 14:
                                        _e.sent();
                                        cart.sales_channel_id = data.sales_channel_id;
                                        _e.label = 15;
                                    case 15:
                                        if (!(0, utils_1.isDefined)(data.discounts)) return [3 /*break*/, 20];
                                        previousDiscounts = __spreadArray([], __read(cart.discounts), false);
                                        cart.discounts.length = 0;
                                        return [4 /*yield*/, Promise.all(data.discounts.map(function (_a) {
                                                var code = _a.code;
                                                return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_b) {
                                                        return [2 /*return*/, this.applyDiscount(cart, code)];
                                                    });
                                                });
                                            }))];
                                    case 16:
                                        _e.sent();
                                        hasFreeShipping = cart.discounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return (rule === null || rule === void 0 ? void 0 : rule.type) === models_1.DiscountRuleType.FREE_SHIPPING;
                                        });
                                        if (!(previousDiscounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return rule.type === models_1.DiscountRuleType.FREE_SHIPPING;
                                        }) &&
                                            !hasFreeShipping)) return [3 /*break*/, 18];
                                        return [4 /*yield*/, this.adjustFreeShipping_(cart, false)];
                                    case 17:
                                        _e.sent();
                                        _e.label = 18;
                                    case 18:
                                        if (!hasFreeShipping) return [3 /*break*/, 20];
                                        return [4 /*yield*/, this.adjustFreeShipping_(cart, true)];
                                    case 19:
                                        _e.sent();
                                        _e.label = 20;
                                    case 20:
                                        if (!("gift_cards" in data)) return [3 /*break*/, 22];
                                        cart.gift_cards = [];
                                        return [4 /*yield*/, Promise.all(((_d = data.gift_cards) !== null && _d !== void 0 ? _d : []).map(function (_a) {
                                                var code = _a.code;
                                                return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_b) {
                                                        return [2 /*return*/, this.applyGiftCard_(cart, code)];
                                                    });
                                                });
                                            }))];
                                    case 21:
                                        _e.sent();
                                        _e.label = 22;
                                    case 22:
                                        if (data === null || data === void 0 ? void 0 : data.metadata) {
                                            cart.metadata = (0, utils_1.setMetadata)(cart, data.metadata);
                                        }
                                        if ("context" in data) {
                                            prevContext = cart.context || {};
                                            cart.context = __assign(__assign({}, prevContext), data.context);
                                        }
                                        if ("completed_at" in data) {
                                            cart.completed_at = data.completed_at;
                                        }
                                        if ("payment_authorized_at" in data) {
                                            cart.payment_authorized_at = data.payment_authorized_at;
                                        }
                                        return [4 /*yield*/, cartRepo.save(cart)];
                                    case 23:
                                        updatedCart = _e.sent();
                                        if (!("email" in data || "customer_id" in data)) return [3 /*break*/, 25];
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.CUSTOMER_UPDATED, updatedCart.id)];
                                    case 24:
                                        _e.sent();
                                        _e.label = 25;
                                    case 25: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 26:
                                        _e.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove the cart line item that does not belongs to the newly assigned sales channel
     *
     * @param cart - The cart being updated
     * @param newSalesChannelId - The new sales channel being assigned to the cart
     * @return void
     * @protected
     */
    CartService.prototype.onSalesChannelChange = function (cart, newSalesChannelId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var productIds, productsToKeep, productIdsToKeep, itemsToRemove, results;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getValidatedSalesChannel(newSalesChannelId)];
                    case 1:
                        _c.sent();
                        productIds = cart.items.map(function (item) { return item.variant.product_id; });
                        return [4 /*yield*/, this.productService_
                                .withTransaction(this.manager_)
                                .filterProductsBySalesChannel(productIds, newSalesChannelId, {
                                select: ["id", "sales_channels"],
                                take: productIds.length,
                            })];
                    case 2:
                        productsToKeep = _c.sent();
                        productIdsToKeep = new Set(productsToKeep.map(function (product) { return product.id; }));
                        itemsToRemove = cart.items.filter(function (item) {
                            return !productIdsToKeep.has(item.variant.product_id);
                        });
                        if (!itemsToRemove.length) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all(itemsToRemove.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.removeLineItem(cart.id, item.id)];
                                });
                            }); }))];
                    case 3:
                        results = _c.sent();
                        cart.items = (_b = (_a = results.pop()) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [];
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets the customer id of a cart
     * @param cart - the cart to add email to
     * @param customerId - the customer to add to cart
     * @return the result of the update operation
     */
    CartService.prototype.updateCustomerId_ = function (cart, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customerService_
                            .withTransaction(this.transactionManager_)
                            .retrieve(customerId)];
                    case 1:
                        customer = _a.sent();
                        cart.customer = customer;
                        cart.customer_id = customer.id;
                        cart.email = customer.email;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates or fetches a user based on an email.
     * @param email - the email to use
     * @return the resultign customer object
     */
    CartService.prototype.createOrFetchUserFromEmail_ = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedEmail, customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedEmail = (0, is_email_1.validateEmail)(email);
                        return [4 /*yield*/, this.customerService_
                                .withTransaction(this.transactionManager_)
                                .retrieveByEmail(validatedEmail)
                                .catch(function () { return undefined; })];
                    case 1:
                        customer = _a.sent();
                        if (!!customer) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.customerService_
                                .withTransaction(this.transactionManager_)
                                .create({ email: validatedEmail })];
                    case 2:
                        customer = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, customer];
                }
            });
        });
    };
    /**
     * Updates the cart's billing address.
     * @param cart - the cart to update
     * @param addressOrId - the value to set the billing address to
     * @param addrRepo - the repository to use for address updates
     * @return the result of the update operation
     */
    CartService.prototype.updateBillingAddress_ = function (cart, addressOrId, addrRepo) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var address, _c, addr;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(typeof addressOrId === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: addressOrId },
                            })];
                    case 1:
                        address = (_d.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        address = addressOrId;
                        _d.label = 3;
                    case 3:
                        address.country_code = (_b = (_a = address.country_code) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : null;
                        if (!address.id) return [3 /*break*/, 5];
                        _c = cart;
                        return [4 /*yield*/, addrRepo.save(address)];
                    case 4:
                        _c.billing_address = _d.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!cart.billing_address_id) return [3 /*break*/, 8];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: cart.billing_address_id },
                            })];
                    case 6:
                        addr = _d.sent();
                        return [4 /*yield*/, addrRepo.save(__assign(__assign({}, addr), address))];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        cart.billing_address = addrRepo.create(__assign({}, address));
                        _d.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates the cart's shipping address.
     * @param cart - the cart to update
     * @param addressOrId - the value to set the shipping address to
     * @param addrRepo - the repository to use for address updates
     * @return the result of the update operation
     */
    CartService.prototype.updateShippingAddress_ = function (cart, addressOrId, addrRepo) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var address, _c, addr;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (addressOrId === null) {
                            cart.shipping_address = null;
                            return [2 /*return*/];
                        }
                        if (!(typeof addressOrId === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: addressOrId },
                            })];
                    case 1:
                        address = (_d.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        address = addressOrId;
                        _d.label = 3;
                    case 3:
                        address.country_code = (_b = (_a = address.country_code) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : null;
                        if (address.country_code &&
                            !cart.region.countries.find(function (_a) {
                                var iso_2 = _a.iso_2;
                                return address.country_code === iso_2;
                            })) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Shipping country must be in the cart region");
                        }
                        if (!address.id) return [3 /*break*/, 5];
                        _c = cart;
                        return [4 /*yield*/, addrRepo.save(address)];
                    case 4:
                        _c.shipping_address = _d.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!cart.shipping_address_id) return [3 /*break*/, 8];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: cart.shipping_address_id },
                            })];
                    case 6:
                        addr = _d.sent();
                        return [4 /*yield*/, addrRepo.save(__assign(__assign({}, addr), address))];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        cart.shipping_address = addrRepo.create(__assign({}, address));
                        _d.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.applyGiftCard_ = function (cart, code) {
        return __awaiter(this, void 0, void 0, function () {
            var giftCard;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.giftCardService_
                            .withTransaction(this.transactionManager_)
                            .retrieveByCode(code)];
                    case 1:
                        giftCard = _a.sent();
                        if (giftCard.is_disabled) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The gift card is disabled");
                        }
                        if (giftCard.region_id !== cart.region_id) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The gift card cannot be used in the current region");
                        }
                        // if discount is already there, we simply resolve
                        if (cart.gift_cards.find(function (_a) {
                            var id = _a.id;
                            return id === giftCard.id;
                        })) {
                            return [2 /*return*/];
                        }
                        cart.gift_cards = __spreadArray(__spreadArray([], __read(cart.gift_cards), false), [giftCard], false);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates the cart's discounts.
     * If discount besides free shipping is already applied, this
     * will be overwritten
     * Throws if discount regions does not include the cart region
     * @param cart - the cart to update
     * @param discountCode - the discount code
     * @return the result of the update operation
     */
    CartService.prototype.applyDiscount = function (cart, discountCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var discount, rule, toParse, sawNotShipping, newDiscounts;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.discountService_
                                            .withTransaction(transactionManager)
                                            .retrieveByCode(discountCode, { relations: ["rule", "regions"] })];
                                    case 1:
                                        discount = _a.sent();
                                        return [4 /*yield*/, this.discountService_
                                                .withTransaction(transactionManager)
                                                .validateDiscountForCartOrThrow(cart, discount)];
                                    case 2:
                                        _a.sent();
                                        rule = discount.rule;
                                        // if discount is already there, we simply resolve
                                        if (cart.discounts.find(function (_a) {
                                            var id = _a.id;
                                            return id === discount.id;
                                        })) {
                                            return [2 /*return*/];
                                        }
                                        toParse = __spreadArray(__spreadArray([], __read(cart.discounts), false), [discount], false);
                                        sawNotShipping = false;
                                        newDiscounts = toParse.map(function (discountToParse) {
                                            var _a;
                                            switch ((_a = discountToParse.rule) === null || _a === void 0 ? void 0 : _a.type) {
                                                case models_1.DiscountRuleType.FREE_SHIPPING:
                                                    if (discountToParse.rule.type === rule.type) {
                                                        return discount;
                                                    }
                                                    return discountToParse;
                                                default:
                                                    if (!sawNotShipping) {
                                                        sawNotShipping = true;
                                                        if ((rule === null || rule === void 0 ? void 0 : rule.type) !== models_1.DiscountRuleType.FREE_SHIPPING) {
                                                            return discount;
                                                        }
                                                        return discountToParse;
                                                    }
                                                    return null;
                                            }
                                        });
                                        cart.discounts = newDiscounts.filter(function (newDiscount) {
                                            return !!newDiscount;
                                        });
                                        if (!((rule === null || rule === void 0 ? void 0 : rule.type) !== models_1.DiscountRuleType.FREE_SHIPPING && (cart === null || cart === void 0 ? void 0 : cart.items))) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.refreshAdjustments_(cart)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a discount based on a discount code.
     * @param cartId - the id of the cart to remove from
     * @param discountCode - the discount code to remove
     * @return the resulting cart
     */
    CartService.prototype.removeDiscount = function (cartId, discountCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, cartRepo, updatedCart;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: [
                                                "discounts",
                                                "discounts.rule",
                                                "payment_sessions",
                                                "shipping_methods",
                                            ],
                                        })];
                                    case 1:
                                        cart = _b.sent();
                                        if (!cart.discounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return rule.type === models_1.DiscountRuleType.FREE_SHIPPING;
                                        })) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.adjustFreeShipping_(cart, false)];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        cart.discounts = cart.discounts.filter(function (discount) { return discount.code !== discountCode; });
                                        cartRepo = transactionManager.getCustomRepository(this.cartRepository_);
                                        return [4 /*yield*/, cartRepo.save(cart)];
                                    case 4:
                                        updatedCart = _b.sent();
                                        if (!((_a = updatedCart.payment_sessions) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.setPaymentSessions(cartId)];
                                    case 5:
                                        _b.sent();
                                        _b.label = 6;
                                    case 6: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 7:
                                        _b.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates the currently selected payment session.
     * @param cartId - the id of the cart to update the payment session for
     * @param update - the data to update the payment session with
     * @return the resulting cart
     */
    CartService.prototype.updatePaymentSession = function (cartId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, updatedCart;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["payment_sessions"],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        if (!cart.payment_session) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .updateSessionData(cart.payment_session, update)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, this.retrieve(cart.id)];
                                    case 4:
                                        updatedCart = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Authorizes a payment for a cart.
     * Will authorize with chosen payment provider. This will return
     * a payment object, that we will use to update our cart payment with.
     * Additionally, if the payment does not require more or fails, we will
     * set the payment on the cart.
     * @param cartId - the id of the cart to authorize payment for
     * @param context - object containing whatever is relevant for
     *    authorizing the payment with the payment provider. As an example,
     *    this could be IP address or similar for fraud handling.
     * @return the resulting cart
     */
    CartService.prototype.authorizePayment = function (cartId, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartRepository, cart, session, freshCart, _a, updatedCart;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        cartRepository = transactionManager.getCustomRepository(this.cartRepository_);
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                select: ["total"],
                                                relations: [
                                                    "items",
                                                    "items.adjustments",
                                                    "region",
                                                    "payment_sessions",
                                                ],
                                            })];
                                    case 1:
                                        cart = _b.sent();
                                        if (typeof cart.total === "undefined") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "cart.total should be defined");
                                        }
                                        if (!(cart.total <= 0)) return [3 /*break*/, 3];
                                        cart.payment_authorized_at = new Date();
                                        return [4 /*yield*/, cartRepository.save(cart)];
                                    case 2: return [2 /*return*/, _b.sent()];
                                    case 3:
                                        if (!cart.payment_session) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "You cannot complete a cart without a payment session.");
                                        }
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .authorizePayment(cart.payment_session, context)];
                                    case 4:
                                        session = (_b.sent());
                                        return [4 /*yield*/, this.retrieve(cart.id, {
                                                select: ["total"],
                                                relations: ["payment_sessions", "items", "items.adjustments"],
                                            })];
                                    case 5:
                                        freshCart = (_b.sent());
                                        if (!(session.status === "authorized")) return [3 /*break*/, 7];
                                        _a = freshCart;
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .createPayment(freshCart)];
                                    case 6:
                                        _a.payment = _b.sent();
                                        freshCart.payment_authorized_at = new Date();
                                        _b.label = 7;
                                    case 7: return [4 /*yield*/, cartRepository.save(freshCart)];
                                    case 8:
                                        updatedCart = _b.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 9:
                                        _b.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets a payment method for a cart.
     * @param cartId - the id of the cart to add payment method to
     * @param providerId - the id of the provider to be set to the cart
     * @return result of update operation
     */
    CartService.prototype.setPaymentSession = function (cartId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var psRepo, cart, paymentSession, updatedCart;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        psRepo = transactionManager.getCustomRepository(this.paymentSessionRepository_);
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                select: [
                                                    "total",
                                                    "subtotal",
                                                    "tax_total",
                                                    "discount_total",
                                                    "gift_card_total",
                                                ],
                                                relations: ["region", "region.payment_providers", "payment_sessions"],
                                            })
                                            // The region must have the provider id in its providers array
                                        ];
                                    case 1:
                                        cart = _a.sent();
                                        // The region must have the provider id in its providers array
                                        if (providerId !== "system" &&
                                            !(cart.region.payment_providers.length &&
                                                cart.region.payment_providers.find(function (_a) {
                                                    var id = _a.id;
                                                    return providerId === id;
                                                }))) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The payment method is not available in this region");
                                        }
                                        return [4 /*yield*/, Promise.all(cart.payment_sessions.map(function (paymentSession) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    return [2 /*return*/, psRepo.save(__assign(__assign({}, paymentSession), { is_selected: null }))];
                                                });
                                            }); }))];
                                    case 2:
                                        _a.sent();
                                        paymentSession = cart.payment_sessions.find(function (ps) { return ps.provider_id === providerId; });
                                        if (!paymentSession) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Could not find payment session");
                                        }
                                        paymentSession.is_selected = true;
                                        return [4 /*yield*/, psRepo.save(paymentSession)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(cartId)];
                                    case 4:
                                        updatedCart = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); }, "SERIALIZABLE")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates, updates and sets payment sessions associated with the cart. The
     * first time the method is called payment sessions will be created for each
     * provider. Additional calls will ensure that payment sessions have correct
     * amounts, currencies, etc. as well as make sure to filter payment sessions
     * that are not available for the cart's region.
     * @param cartOrCartId - the id of the cart to set payment session for
     * @return the result of the update operation.
     */
    CartService.prototype.setPaymentSessions = function (cartOrCartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var psRepo, cartId, cart, total, region, seen, paymentProvider, paymentSession;
                            var _this = this;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        psRepo = transactionManager.getCustomRepository(this.paymentSessionRepository_);
                                        cartId = typeof cartOrCartId === "string" ? cartOrCartId : cartOrCartId.id;
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                select: [
                                                    "total",
                                                    "subtotal",
                                                    "tax_total",
                                                    "discount_total",
                                                    "shipping_total",
                                                    "gift_card_total",
                                                ],
                                                relations: [
                                                    "items",
                                                    "items.adjustments",
                                                    "discounts",
                                                    "discounts.rule",
                                                    "gift_cards",
                                                    "shipping_methods",
                                                    "billing_address",
                                                    "shipping_address",
                                                    "region",
                                                    "region.tax_rates",
                                                    "region.payment_providers",
                                                    "payment_sessions",
                                                    "customer",
                                                ],
                                            }, { force_taxes: true })];
                                    case 1:
                                        cart = _b.sent();
                                        total = cart.total, region = cart.region;
                                        if (typeof total === "undefined") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "cart.total must be defined");
                                        }
                                        seen = [];
                                        if (!((_a = cart.payment_sessions) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, Promise.all(cart.payment_sessions.map(function (paymentSession) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    if (total <= 0 ||
                                                        !region.payment_providers.find(function (_a) {
                                                            var id = _a.id;
                                                            return id === paymentSession.provider_id;
                                                        })) {
                                                        return [2 /*return*/, this.paymentProviderService_
                                                                .withTransaction(transactionManager)
                                                                .deleteSession(paymentSession)];
                                                    }
                                                    else {
                                                        seen.push(paymentSession.provider_id);
                                                        return [2 /*return*/, this.paymentProviderService_
                                                                .withTransaction(transactionManager)
                                                                .updateSession(paymentSession, cart)];
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); }))];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        if (!(total > 0)) return [3 /*break*/, 8];
                                        if (!(region.payment_providers.length === 1 && !cart.payment_session)) return [3 /*break*/, 6];
                                        paymentProvider = region.payment_providers[0];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .createSession(paymentProvider.id, cart)];
                                    case 4:
                                        paymentSession = _b.sent();
                                        paymentSession.is_selected = true;
                                        return [4 /*yield*/, psRepo.save(paymentSession)];
                                    case 5:
                                        _b.sent();
                                        return [3 /*break*/, 8];
                                    case 6: return [4 /*yield*/, Promise.all(region.payment_providers.map(function (paymentProvider) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                if (!seen.includes(paymentProvider.id)) {
                                                    return [2 /*return*/, this.paymentProviderService_
                                                            .withTransaction(transactionManager)
                                                            .createSession(paymentProvider.id, cart)];
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); }))];
                                    case 7:
                                        _b.sent();
                                        _b.label = 8;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a payment session from the cart.
     * @param cartId - the id of the cart to remove from
     * @param providerId - the id of the provider whoose payment session
     *    should be removed.
     * @return the resulting cart.
     */
    CartService.prototype.deletePaymentSession = function (cartId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, cartRepo, paymentSession;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["payment_sessions"],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        cartRepo = transactionManager.getCustomRepository(this.cartRepository_);
                                        if (!cart.payment_sessions) return [3 /*break*/, 3];
                                        paymentSession = cart.payment_sessions.find(function (_a) {
                                            var provider_id = _a.provider_id;
                                            return provider_id === providerId;
                                        });
                                        cart.payment_sessions = cart.payment_sessions.filter(function (_a) {
                                            var provider_id = _a.provider_id;
                                            return provider_id !== providerId;
                                        });
                                        if (!paymentSession) return [3 /*break*/, 3];
                                        // Delete the session with the provider
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .deleteSession(paymentSession)];
                                    case 2:
                                        // Delete the session with the provider
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, cartRepo.save(cart)];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, cart)];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, cart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Refreshes a payment session on a cart
     * @param cartId - the id of the cart to remove from
     * @param providerId - the id of the provider whoose payment session
     *    should be removed.
     * @return {Promise<Cart>} the resulting cart.
     */
    CartService.prototype.refreshPaymentSession = function (cartId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, paymentSession, updatedCart;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["payment_sessions"],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        if (!cart.payment_sessions) return [3 /*break*/, 3];
                                        paymentSession = cart.payment_sessions.find(function (_a) {
                                            var provider_id = _a.provider_id;
                                            return provider_id === providerId;
                                        });
                                        if (!paymentSession) return [3 /*break*/, 3];
                                        // Delete the session with the provider
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .refreshSession(paymentSession, cart)];
                                    case 2:
                                        // Delete the session with the provider
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, this.retrieve(cartId)];
                                    case 4:
                                        updatedCart = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds the shipping method to the list of shipping methods associated with
     * the cart. Shipping Methods are the ways that an order is shipped, whereas a
     * Shipping Option is a possible way to ship an order. Shipping Methods may
     * also have additional details in the data field such as an id for a package
     * shop.
     * @param cartId - the id of the cart to add shipping method to
     * @param optionId - id of shipping option to add as valid method
     * @param data - the fulmillment data for the method
     * @return the result of the update operation
     */
    CartService.prototype.addShippingMethod = function (cartId, optionId, data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, cartCustomShippingOptions, customShippingOption, shipping_methods, shippingMethodConfig, newShippingMethod, methods, shippingOptionServiceTx, shipping_methods_1, shipping_methods_1_1, shippingMethod, e_3_1, lineItemServiceTx_1, updatedCart;
                            var e_3, _a;
                            var _this = this;
                            var _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            select: ["subtotal"],
                                            relations: [
                                                "shipping_methods",
                                                "discounts",
                                                "discounts.rule",
                                                "shipping_methods.shipping_option",
                                                "items",
                                                "items.variant",
                                                "payment_sessions",
                                                "items.variant.product",
                                            ],
                                        })];
                                    case 1:
                                        cart = _c.sent();
                                        return [4 /*yield*/, this.customShippingOptionService_
                                                .withTransaction(transactionManager)
                                                .list({ cart_id: cart.id })];
                                    case 2:
                                        cartCustomShippingOptions = _c.sent();
                                        customShippingOption = this.findCustomShippingOption(cartCustomShippingOptions, optionId);
                                        shipping_methods = cart.shipping_methods;
                                        shippingMethodConfig = customShippingOption
                                            ? { cart_id: cart.id, price: customShippingOption.price }
                                            : { cart: cart };
                                        return [4 /*yield*/, this.shippingOptionService_
                                                .withTransaction(transactionManager)
                                                .createShippingMethod(optionId, data, shippingMethodConfig)];
                                    case 3:
                                        newShippingMethod = _c.sent();
                                        methods = [newShippingMethod];
                                        if (!(shipping_methods === null || shipping_methods === void 0 ? void 0 : shipping_methods.length)) return [3 /*break*/, 12];
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(transactionManager);
                                        _c.label = 4;
                                    case 4:
                                        _c.trys.push([4, 10, 11, 12]);
                                        shipping_methods_1 = __values(shipping_methods), shipping_methods_1_1 = shipping_methods_1.next();
                                        _c.label = 5;
                                    case 5:
                                        if (!!shipping_methods_1_1.done) return [3 /*break*/, 9];
                                        shippingMethod = shipping_methods_1_1.value;
                                        if (!(shippingMethod.shipping_option.profile_id ===
                                            newShippingMethod.shipping_option.profile_id)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, shippingOptionServiceTx.deleteShippingMethods(shippingMethod)];
                                    case 6:
                                        _c.sent();
                                        return [3 /*break*/, 8];
                                    case 7:
                                        methods.push(shippingMethod);
                                        _c.label = 8;
                                    case 8:
                                        shipping_methods_1_1 = shipping_methods_1.next();
                                        return [3 /*break*/, 5];
                                    case 9: return [3 /*break*/, 12];
                                    case 10:
                                        e_3_1 = _c.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 12];
                                    case 11:
                                        try {
                                            if (shipping_methods_1_1 && !shipping_methods_1_1.done && (_a = shipping_methods_1.return)) _a.call(shipping_methods_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 12:
                                        if (!((_b = cart.items) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 14];
                                        lineItemServiceTx_1 = this.lineItemService_.withTransaction(transactionManager);
                                        return [4 /*yield*/, Promise.all(cart.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    return [2 /*return*/, lineItemServiceTx_1.update(item.id, {
                                                            has_shipping: this.validateLineItemShipping_(methods, item),
                                                        })];
                                                });
                                            }); }))];
                                    case 13:
                                        _c.sent();
                                        _c.label = 14;
                                    case 14: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["discounts", "discounts.rule", "shipping_methods"],
                                        })
                                        // if cart has freeshipping, adjust price
                                    ];
                                    case 15:
                                        updatedCart = _c.sent();
                                        if (!updatedCart.discounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return rule.type === models_1.DiscountRuleType.FREE_SHIPPING;
                                        })) return [3 /*break*/, 17];
                                        return [4 /*yield*/, this.adjustFreeShipping_(updatedCart, true)];
                                    case 16:
                                        _c.sent();
                                        _c.label = 17;
                                    case 17: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 18:
                                        _c.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); }, "SERIALIZABLE")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Finds the cart's custom shipping options based on the passed option id.
     * throws if custom options is not empty and no shipping option corresponds to optionId
     * @param cartCustomShippingOptions - the cart's custom shipping options
     * @param optionId - id of the normal or custom shipping option to find in the cartCustomShippingOptions
     * @return custom shipping option
     */
    CartService.prototype.findCustomShippingOption = function (cartCustomShippingOptions, optionId) {
        var customOption = cartCustomShippingOptions === null || cartCustomShippingOptions === void 0 ? void 0 : cartCustomShippingOptions.find(function (cso) { return cso.shipping_option_id === optionId; });
        var hasCustomOptions = cartCustomShippingOptions === null || cartCustomShippingOptions === void 0 ? void 0 : cartCustomShippingOptions.length;
        if (hasCustomOptions && !customOption) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Wrong shipping option");
        }
        return customOption;
    };
    CartService.prototype.updateUnitPrices_ = function (cart, regionId, customer_id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, region_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        if (!((_b = cart.items) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(this.transactionManager_)
                                .retrieve(regionId || cart.region_id, {
                                relations: ["countries"],
                            })];
                    case 1:
                        region_1 = _d.sent();
                        _c = cart;
                        return [4 /*yield*/, Promise.all(cart.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var availablePrice;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.priceSelectionStrategy_
                                                .withTransaction(transactionManager)
                                                .calculateVariantPrice(item.variant_id, {
                                                region_id: region_1.id,
                                                currency_code: region_1.currency_code,
                                                quantity: item.quantity,
                                                customer_id: customer_id || cart.customer_id,
                                                include_discount_prices: true,
                                            })
                                                .catch(function () { return undefined; })];
                                        case 1:
                                            availablePrice = _a.sent();
                                            if (!(availablePrice !== undefined &&
                                                availablePrice.calculatedPrice !== null)) return [3 /*break*/, 2];
                                            return [2 /*return*/, this.lineItemService_
                                                    .withTransaction(transactionManager)
                                                    .update(item.id, {
                                                    has_shipping: false,
                                                    unit_price: availablePrice.calculatedPrice,
                                                })];
                                        case 2: return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(transactionManager)
                                                .delete(item.id)];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _c.items = (_d.sent()).filter(function (item) { return !!item; });
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set's the region of a cart.
     * @param cart - the cart to set region on
     * @param regionId - the id of the region to set the region to
     * @param countryCode - the country code to set the country to
     * @return the result of the update operation
     */
    CartService.prototype.setRegion_ = function (cart, regionId, countryCode) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, region, addrRepo, shippingAddress, updated, updated, paymentSessionRepo;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        if (cart.completed_at || cart.payment_authorized_at) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot change the region of a completed cart");
                        }
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(transactionManager)
                                .retrieve(regionId, {
                                relations: ["countries"],
                            })];
                    case 1:
                        region = _c.sent();
                        cart.region = region;
                        cart.region_id = region.id;
                        addrRepo = transactionManager.getCustomRepository(this.addressRepository_);
                        shippingAddress = {};
                        if (!cart.shipping_address_id) return [3 /*break*/, 3];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: cart.shipping_address_id },
                            })];
                    case 2:
                        shippingAddress = (_c.sent());
                        _c.label = 3;
                    case 3:
                        if (!(countryCode !== null)) return [3 /*break*/, 6];
                        if (!region.countries.find(function (_a) {
                            var iso_2 = _a.iso_2;
                            return iso_2 === countryCode.toLowerCase();
                        })) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Country not available in region");
                        }
                        updated = addrRepo.create(__assign(__assign({}, shippingAddress), { country_code: countryCode.toLowerCase() }));
                        return [4 /*yield*/, addrRepo.save(updated)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.updateShippingAddress_(cart, updated, addrRepo)];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        updated = __assign({}, shippingAddress);
                        // If the country code of a shipping address is set we need to clear it
                        if (!(0, lodash_1.isEmpty)(shippingAddress) && shippingAddress.country_code) {
                            updated = __assign(__assign({}, updated), { country_code: null });
                        }
                        // If there is only one country in the region preset it
                        if (region.countries.length === 1) {
                            updated = __assign(__assign({}, updated), { country_code: region.countries[0].iso_2 });
                        }
                        return [4 /*yield*/, this.updateShippingAddress_(cart, updated, addrRepo)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        if (!(cart.shipping_methods && cart.shipping_methods.length)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.shippingOptionService_
                                .withTransaction(transactionManager)
                                .deleteShippingMethods(cart.shipping_methods)];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10:
                        if (cart.discounts && cart.discounts.length) {
                            cart.discounts = cart.discounts.filter(function (discount) {
                                return discount.regions.find(function (_a) {
                                    var id = _a.id;
                                    return id === regionId;
                                });
                            });
                        }
                        if (!((_b = cart === null || cart === void 0 ? void 0 : cart.items) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 12];
                        // line item adjustments should be refreshed on region change after having filtered out inapplicable discounts
                        return [4 /*yield*/, this.refreshAdjustments_(cart)];
                    case 11:
                        // line item adjustments should be refreshed on region change after having filtered out inapplicable discounts
                        _c.sent();
                        _c.label = 12;
                    case 12:
                        cart.gift_cards = [];
                        if (!(cart.payment_sessions && cart.payment_sessions.length)) return [3 /*break*/, 14];
                        paymentSessionRepo = transactionManager.getCustomRepository(this.paymentSessionRepository_);
                        return [4 /*yield*/, paymentSessionRepo.delete({
                                id: (0, typeorm_1.In)(cart.payment_sessions.map(function (paymentSession) { return paymentSession.id; })),
                            })];
                    case 13:
                        _c.sent();
                        cart.payment_sessions.length = 0;
                        cart.payment_session = null;
                        _c.label = 14;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes a cart from the database. Completed carts cannot be deleted.
     * @param cartId - the id of the cart to delete
     * @return the deleted cart or undefined if the cart was not found.
     */
    CartService.prototype.delete = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, cartRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: [
                                                "items",
                                                "discounts",
                                                "discounts.rule",
                                                "payment_sessions",
                                            ],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        if (cart.completed_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Completed carts cannot be deleted");
                                        }
                                        if (cart.payment_authorized_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can't delete a cart with an authorized payment");
                                        }
                                        cartRepo = transactionManager.getCustomRepository(this.cartRepository_);
                                        return [2 /*return*/, cartRepo.remove(cart)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Dedicated method to set metadata for a cart.
     * To ensure that plugins does not overwrite each
     * others metadata fields, setMetadata is provided.
     * @param cartId - the cart to apply metadata to.
     * @param key - key for metadata field
     * @param value - value for metadata field.
     * @return resolves to the updated result.
     */
    CartService.prototype.setMetadata = function (cartId, key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartRepo, validatedId, cart, existing, updatedCart;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        cartRepo = transactionManager.getCustomRepository(this.cartRepository_);
                                        validatedId = (0, utils_1.validateId)(cartId);
                                        if (typeof key !== "string") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_ARGUMENT, "Key type is invalid. Metadata keys must be strings");
                                        }
                                        return [4 /*yield*/, cartRepo.findOne(validatedId)];
                                    case 1:
                                        cart = _b.sent();
                                        if (!cart) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Unable to find the cart with the given id");
                                        }
                                        existing = cart.metadata || {};
                                        cart.metadata = __assign(__assign({}, existing), (_a = {}, _a[key] = value, _a));
                                        return [4 /*yield*/, cartRepo.save(cart)];
                                    case 2:
                                        updatedCart = _b.sent();
                                        this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, updatedCart);
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.createTaxLines = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, calculationContext;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: [
                                                "customer",
                                                "discounts",
                                                "discounts.rule",
                                                "gift_cards",
                                                "items",
                                                "items.adjustments",
                                                "region",
                                                "region.tax_rates",
                                                "shipping_address",
                                                "shipping_methods",
                                            ],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        return [4 /*yield*/, this.totalsService_
                                                .withTransaction(transactionManager)
                                                .getCalculationContext(cart)];
                                    case 2:
                                        calculationContext = _a.sent();
                                        return [4 /*yield*/, this.taxProviderService_
                                                .withTransaction(transactionManager)
                                                .createTaxLines(cart, calculationContext)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, cart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.deleteTaxLines = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: [
                                                "items",
                                                "items.tax_lines",
                                                "shipping_methods",
                                                "shipping_methods.tax_lines",
                                            ],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        return [4 /*yield*/, transactionManager.remove(cart.items.flatMap(function (i) { return i.tax_lines; }))];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, transactionManager.remove(cart.shipping_methods.flatMap(function (s) { return s.tax_lines; }))];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.refreshAdjustments_ = function (cart) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, nonReturnLineIDs;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        nonReturnLineIDs = cart.items
                            .filter(function (item) { return !item.is_return; })
                            .map(function (i) { return i.id; });
                        // delete all old non return line item adjustments
                        return [4 /*yield*/, this.lineItemAdjustmentService_
                                .withTransaction(transactionManager)
                                .delete({
                                item_id: nonReturnLineIDs,
                            })
                            // potentially create/update line item adjustments
                        ];
                    case 1:
                        // delete all old non return line item adjustments
                        _b.sent();
                        // potentially create/update line item adjustments
                        return [4 /*yield*/, this.lineItemAdjustmentService_
                                .withTransaction(transactionManager)
                                .createAdjustments(cart)];
                    case 2:
                        // potentially create/update line item adjustments
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartService.Events = {
        CUSTOMER_UPDATED: "cart.customer_updated",
        CREATED: "cart.created",
        UPDATED: "cart.updated",
    };
    return CartService;
}(interfaces_1.TransactionBaseService));
exports.default = CartService;
//# sourceMappingURL=cart.js.map