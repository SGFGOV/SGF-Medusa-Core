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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var cart_1 = require("../types/cart");
var interfaces_1 = require("../interfaces");
var CACHE_TIME = 30; // seconds
/**
 * Finds tax providers and assists in tax related operations.
 */
var TaxProviderService = /** @class */ (function (_super) {
    __extends(TaxProviderService, _super);
    function TaxProviderService(container) {
        var _this = _super.call(this, container) || this;
        _this.container_ = container;
        _this.taxLineRepo_ = container["lineItemTaxLineRepository"];
        _this.smTaxLineRepo_ = container["shippingMethodTaxLineRepository"];
        _this.taxRateService_ = container["taxRateService"];
        _this.eventBus_ = container["eventBusService"];
        _this.taxProviderRepo_ = container["taxProviderRepository"];
        _this.manager_ = container["manager"];
        _this.redis_ = container["redisClient"];
        return _this;
    }
    TaxProviderService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tpRepo;
            return __generator(this, function (_a) {
                tpRepo = this.manager_.getCustomRepository(this.taxProviderRepo_);
                return [2 /*return*/, tpRepo.find({})];
            });
        });
    };
    /**
     * Retrieves the relevant tax provider for the given region.
     * @param region - the region to get tax provider for.
     * @return the region specific tax provider
     */
    TaxProviderService.prototype.retrieveProvider = function (region) {
        var provider;
        if (region.tax_provider_id) {
            provider = this.container_["tp_".concat(region.tax_provider_id)];
        }
        else {
            provider = this.container_["systemTaxService"];
        }
        if (!provider) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Could not find a tax provider with id: ".concat(region.tax_provider_id));
        }
        return provider;
    };
    TaxProviderService.prototype.clearTaxLines = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxLineRepo, shippingTaxRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxLineRepo = transactionManager.getCustomRepository(this.taxLineRepo_);
                                        shippingTaxRepo = transactionManager.getCustomRepository(this.smTaxLineRepo_);
                                        return [4 /*yield*/, Promise.all([
                                                taxLineRepo.deleteForCart(cartId),
                                                shippingTaxRepo.deleteForCart(cartId),
                                            ])];
                                    case 1:
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
    /**
     * Persists the tax lines relevant for an order to the database.
     * @param cartOrLineItems - the cart or line items to create tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the newly created tax lines
     */
    TaxProviderService.prototype.createTaxLines = function (cartOrLineItems, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxLines, itemTaxLineRepo, shippingTaxLineRepo, _a, shipping, lineItems;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        taxLines = [];
                                        if (!(0, cart_1.isCart)(cartOrLineItems)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.getTaxLines(cartOrLineItems.items, calculationContext)];
                                    case 1:
                                        taxLines = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.getTaxLines(cartOrLineItems, calculationContext)];
                                    case 3:
                                        taxLines = _b.sent();
                                        _b.label = 4;
                                    case 4:
                                        itemTaxLineRepo = transactionManager.getCustomRepository(this.taxLineRepo_);
                                        shippingTaxLineRepo = transactionManager.getCustomRepository(this.smTaxLineRepo_);
                                        _a = taxLines.reduce(function (acc, tl) {
                                            if ("item_id" in tl) {
                                                acc.lineItems.push(tl);
                                            }
                                            else {
                                                acc.shipping.push(tl);
                                            }
                                            return acc;
                                        }, { shipping: [], lineItems: [] }), shipping = _a.shipping, lineItems = _a.lineItems;
                                        return [4 /*yield*/, Promise.all([
                                                itemTaxLineRepo.upsertLines(lineItems),
                                                shippingTaxLineRepo.upsertLines(shipping),
                                            ])];
                                    case 5: return [2 /*return*/, (_b.sent()).flat()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Persists the tax lines relevant for a shipping method to the database. Used
     * for return shipping methods.
     * @param shippingMethod - the shipping method to create tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the newly created tax lines
     */
    TaxProviderService.prototype.createShippingTaxLines = function (shippingMethod, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxLines;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getShippingTaxLines(shippingMethod, calculationContext)];
                                    case 1:
                                        taxLines = _a.sent();
                                        return [4 /*yield*/, transactionManager.save(taxLines)];
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
     * Gets the relevant tax lines for a shipping method. Note: this method
     * doesn't persist the tax lines. Use createShippingTaxLines if you wish to
     * persist the tax lines to the DB layer.
     * @param shippingMethod - the shipping method to get tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the computed tax lines
     */
    TaxProviderService.prototype.getShippingTaxLines = function (shippingMethod, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var calculationLines, taxProvider, providerLines, smTaxLineRepo;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {
                            shipping_method: shippingMethod
                        };
                        return [4 /*yield*/, this.getRegionRatesForShipping(shippingMethod.shipping_option_id, calculationContext.region)];
                    case 1:
                        calculationLines = [
                            (_a.rates = _b.sent(),
                                _a)
                        ];
                        taxProvider = this.retrieveProvider(calculationContext.region);
                        return [4 /*yield*/, taxProvider.getTaxLines([], calculationLines, calculationContext)];
                    case 2:
                        providerLines = _b.sent();
                        smTaxLineRepo = this.manager_.getCustomRepository(this.smTaxLineRepo_);
                        // .create only creates entities nothing is persisted in DB
                        return [2 /*return*/, providerLines.map(function (pl) {
                                if (!("shipping_method_id" in pl)) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Expected only shipping method tax lines");
                                }
                                return smTaxLineRepo.create({
                                    shipping_method_id: pl.shipping_method_id,
                                    rate: pl.rate,
                                    name: pl.name,
                                    code: pl.code,
                                    metadata: pl.metadata,
                                });
                            })];
                }
            });
        });
    };
    /**
     * Gets the relevant tax lines for an order or cart. If an order is provided
     * the order's tax lines will be returned. If a cart is provided the tax lines
     * will be computed from the tax rules and potentially a 3rd party tax plugin.
     * Note: this method doesn't persist the tax lines. Use createTaxLines if you
     * wish to persist the tax lines to the DB layer.
     * @param lineItems - the cart or order to get tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the computed tax lines
     */
    TaxProviderService.prototype.getTaxLines = function (lineItems, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var calculationLines, shippingCalculationLines, taxProvider, providerLines, liTaxLineRepo, smTaxLineRepo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(lineItems.map(function (l) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (l.is_return) {
                                            return [2 /*return*/, null];
                                        }
                                        if (!(l.variant && l.variant.product_id)) return [3 /*break*/, 2];
                                        _a = {
                                            item: l
                                        };
                                        return [4 /*yield*/, this.getRegionRatesForProduct(l.variant.product_id, calculationContext.region)];
                                    case 1: return [2 /*return*/, (_a.rates = _b.sent(),
                                            _a)];
                                    case 2: 
                                    /*
                                     * If the line item is custom and therefore not associated with a
                                     * product we assume no taxes - we should consider adding rate overrides
                                     * to custom lines at some point
                                     */
                                    return [2 /*return*/, {
                                            item: l,
                                            rates: [],
                                        }];
                                }
                            });
                        }); }))];
                    case 1:
                        calculationLines = _a.sent();
                        return [4 /*yield*/, Promise.all(calculationContext.shipping_methods.map(function (sm) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = {
                                                shipping_method: sm
                                            };
                                            return [4 /*yield*/, this.getRegionRatesForShipping(sm.shipping_option_id, calculationContext.region)];
                                        case 1: return [2 /*return*/, (_a.rates = _b.sent(),
                                                _a)];
                                    }
                                });
                            }); }))];
                    case 2:
                        shippingCalculationLines = _a.sent();
                        taxProvider = this.retrieveProvider(calculationContext.region);
                        return [4 /*yield*/, taxProvider.getTaxLines(calculationLines.filter(function (v) { return v !== null; }), shippingCalculationLines, calculationContext)];
                    case 3:
                        providerLines = _a.sent();
                        liTaxLineRepo = this.manager_.getCustomRepository(this.taxLineRepo_);
                        smTaxLineRepo = this.manager_.getCustomRepository(this.smTaxLineRepo_);
                        // .create only creates entities nothing is persisted in DB
                        return [2 /*return*/, providerLines.map(function (pl) {
                                if ("shipping_method_id" in pl) {
                                    return smTaxLineRepo.create({
                                        shipping_method_id: pl.shipping_method_id,
                                        rate: pl.rate,
                                        name: pl.name,
                                        code: pl.code,
                                        metadata: pl.metadata,
                                    });
                                }
                                if (!("item_id" in pl)) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax Provider returned invalid tax lines");
                                }
                                return liTaxLineRepo.create({
                                    item_id: pl.item_id,
                                    rate: pl.rate,
                                    name: pl.name,
                                    code: pl.code,
                                    metadata: pl.metadata,
                                });
                            })];
                }
            });
        });
    };
    /**
     * Gets the tax rates configured for a shipping option. The rates are cached
     * between calls.
     * @param optionId - the option id of the shipping method.
     * @param regionDetails - the region to get configured rates for.
     * @return the tax rates configured for the shipping option.
     */
    TaxProviderService.prototype.getRegionRatesForShipping = function (optionId, regionDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheHit, toReturn, optionRates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCacheEntry(optionId, regionDetails.id)];
                    case 1:
                        cacheHit = _a.sent();
                        if (cacheHit) {
                            return [2 /*return*/, cacheHit];
                        }
                        toReturn = [];
                        return [4 /*yield*/, this.taxRateService_
                                .withTransaction(this.manager_)
                                .listByShippingOption(optionId)];
                    case 2:
                        optionRates = _a.sent();
                        if (optionRates.length > 0) {
                            toReturn = optionRates.map(function (pr) {
                                return {
                                    rate: pr.rate,
                                    name: pr.name,
                                    code: pr.code,
                                };
                            });
                        }
                        if (toReturn.length === 0) {
                            toReturn = [
                                {
                                    rate: regionDetails.tax_rate,
                                    name: "default",
                                    code: "default",
                                },
                            ];
                        }
                        return [4 /*yield*/, this.setCache(optionId, regionDetails.id, toReturn)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, toReturn];
                }
            });
        });
    };
    /**
     * Gets the tax rates configured for a product. The rates are cached between
     * calls.
     * @param productId - the product id to get rates for
     * @param region - the region to get configured rates for.
     * @return the tax rates configured for the shipping option.
     */
    TaxProviderService.prototype.getRegionRatesForProduct = function (productId, region) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheHit, toReturn, productRates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCacheEntry(productId, region.id)];
                    case 1:
                        cacheHit = _a.sent();
                        if (cacheHit) {
                            return [2 /*return*/, cacheHit];
                        }
                        toReturn = [];
                        return [4 /*yield*/, this.taxRateService_
                                .withTransaction(this.manager_)
                                .listByProduct(productId, {
                                region_id: region.id,
                            })];
                    case 2:
                        productRates = _a.sent();
                        if (productRates.length > 0) {
                            toReturn = productRates.map(function (pr) {
                                return {
                                    rate: pr.rate,
                                    name: pr.name,
                                    code: pr.code,
                                };
                            });
                        }
                        if (toReturn.length === 0) {
                            toReturn = [
                                {
                                    rate: region.tax_rate,
                                    name: "default",
                                    code: "default",
                                },
                            ];
                        }
                        return [4 /*yield*/, this.setCache(productId, region.id, toReturn)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, toReturn];
                }
            });
        });
    };
    /**
     * The cache key to get cache hits by.
     * @param productId - the product id to cache
     * @param regionId - the region id to cache
     * @return the cache key to use for the id set
     */
    TaxProviderService.prototype.getCacheKey = function (productId, regionId) {
        return "txrtcache:".concat(productId, ":").concat(regionId);
    };
    /**
     * Sets the cache results for a set of ids
     * @param productId - the product id to cache
     * @param regionId - the region id to cache
     * @param value - tax rates to cache
     * @return promise that resolves after the cache has been set
     */
    TaxProviderService.prototype.setCache = function (productId, regionId, value) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this.getCacheKey(productId, regionId);
                        return [4 /*yield*/, this.redis_.set(cacheKey, JSON.stringify(value), "EX", CACHE_TIME)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the cache results for a set of ids
     * @param productId - the product id to cache
     * @param regionId - the region id to cache
     * @return the cached result or null
     */
    TaxProviderService.prototype.getCacheEntry = function (productId, regionId) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, cacheHit, parsedResults, _1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this.getCacheKey(productId, regionId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.redis_.get(cacheKey)];
                    case 2:
                        cacheHit = _a.sent();
                        if (cacheHit) {
                            parsedResults = JSON.parse(cacheHit);
                            return [2 /*return*/, parsedResults];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        _1 = _a.sent();
                        // noop - cache parse failed
                        return [4 /*yield*/, this.redis_.del(cacheKey)];
                    case 4:
                        // noop - cache parse failed
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, null];
                }
            });
        });
    };
    TaxProviderService.prototype.registerInstalledProviders = function (providers) {
        return __awaiter(this, void 0, void 0, function () {
            var model, providers_1, providers_1_1, p, n, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        model = this.manager_.getCustomRepository(this.taxProviderRepo_);
                        return [4 /*yield*/, model.update({}, { is_installed: false })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        providers_1 = __values(providers), providers_1_1 = providers_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!providers_1_1.done) return [3 /*break*/, 6];
                        p = providers_1_1.value;
                        n = model.create({ id: p, is_installed: true });
                        return [4 /*yield*/, model.save(n)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        providers_1_1 = providers_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return TaxProviderService;
}(interfaces_1.TransactionBaseService));
exports.default = TaxProviderService;
//# sourceMappingURL=tax-provider.js.map