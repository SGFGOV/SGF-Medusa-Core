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
var models_1 = require("../models");
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var ClaimService = /** @class */ (function (_super) {
    __extends(ClaimService, _super);
    function ClaimService(_a) {
        var manager = _a.manager, addressRepository = _a.addressRepository, claimRepository = _a.claimRepository, shippingMethodRepository = _a.shippingMethodRepository, lineItemRepository = _a.lineItemRepository, claimItemService = _a.claimItemService, eventBusService = _a.eventBusService, fulfillmentProviderService = _a.fulfillmentProviderService, fulfillmentService = _a.fulfillmentService, inventoryService = _a.inventoryService, lineItemService = _a.lineItemService, paymentProviderService = _a.paymentProviderService, regionService = _a.regionService, returnService = _a.returnService, shippingOptionService = _a.shippingOptionService, taxProviderService = _a.taxProviderService, totalsService = _a.totalsService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.addressRepository_ = addressRepository;
        _this.claimRepository_ = claimRepository;
        _this.shippingMethodRepository_ = shippingMethodRepository;
        _this.lineItemRepository_ = lineItemRepository;
        _this.claimItemService_ = claimItemService;
        _this.eventBus_ = eventBusService;
        _this.fulfillmentProviderService_ = fulfillmentProviderService;
        _this.fulfillmentService_ = fulfillmentService;
        _this.inventoryService_ = inventoryService;
        _this.lineItemService_ = lineItemService;
        _this.paymentProviderService_ = paymentProviderService;
        _this.regionService_ = regionService;
        _this.returnService_ = returnService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.taxProviderService_ = taxProviderService;
        _this.totalsService_ = totalsService;
        return _this;
    }
    ClaimService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claimRepo, claim, claim_items, shipping_methods, metadata, no_notification, shippingOptionServiceTx, _a, _b, m, e_1_1, shipping_methods_1, shipping_methods_1_1, method, e_2_1, claimItemServiceTx, claim_items_1, claim_items_1_1, i, e_3_1;
                            var e_1, _c, e_2, _d, e_3, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        claimRepo = transactionManager.getCustomRepository(this.claimRepository_);
                                        return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["shipping_methods"],
                                            })];
                                    case 1:
                                        claim = _f.sent();
                                        if (claim.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be updated");
                                        }
                                        claim_items = data.claim_items, shipping_methods = data.shipping_methods, metadata = data.metadata, no_notification = data.no_notification;
                                        if (!metadata) return [3 /*break*/, 3];
                                        claim.metadata = (0, utils_1.setMetadata)(claim, metadata);
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 2:
                                        _f.sent();
                                        _f.label = 3;
                                    case 3:
                                        if (!shipping_methods) return [3 /*break*/, 20];
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(transactionManager);
                                        _f.label = 4;
                                    case 4:
                                        _f.trys.push([4, 9, 10, 11]);
                                        _a = __values(claim.shipping_methods), _b = _a.next();
                                        _f.label = 5;
                                    case 5:
                                        if (!!_b.done) return [3 /*break*/, 8];
                                        m = _b.value;
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingMethod(m.id, {
                                                claim_order_id: null,
                                            })];
                                    case 6:
                                        _f.sent();
                                        _f.label = 7;
                                    case 7:
                                        _b = _a.next();
                                        return [3 /*break*/, 5];
                                    case 8: return [3 /*break*/, 11];
                                    case 9:
                                        e_1_1 = _f.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 11];
                                    case 10:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 11:
                                        _f.trys.push([11, 18, 19, 20]);
                                        shipping_methods_1 = __values(shipping_methods), shipping_methods_1_1 = shipping_methods_1.next();
                                        _f.label = 12;
                                    case 12:
                                        if (!!shipping_methods_1_1.done) return [3 /*break*/, 17];
                                        method = shipping_methods_1_1.value;
                                        if (!method.id) return [3 /*break*/, 14];
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingMethod(method.id, {
                                                claim_order_id: claim.id,
                                            })];
                                    case 13:
                                        _f.sent();
                                        return [3 /*break*/, 16];
                                    case 14: return [4 /*yield*/, shippingOptionServiceTx.createShippingMethod(method.option_id, method.data, {
                                            claim_order_id: claim.id,
                                            price: method.price,
                                        })];
                                    case 15:
                                        _f.sent();
                                        _f.label = 16;
                                    case 16:
                                        shipping_methods_1_1 = shipping_methods_1.next();
                                        return [3 /*break*/, 12];
                                    case 17: return [3 /*break*/, 20];
                                    case 18:
                                        e_2_1 = _f.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 20];
                                    case 19:
                                        try {
                                            if (shipping_methods_1_1 && !shipping_methods_1_1.done && (_d = shipping_methods_1.return)) _d.call(shipping_methods_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 20:
                                        if (!(no_notification !== undefined)) return [3 /*break*/, 22];
                                        claim.no_notification = no_notification;
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 21:
                                        _f.sent();
                                        _f.label = 22;
                                    case 22:
                                        if (!claim_items) return [3 /*break*/, 30];
                                        claimItemServiceTx = this.claimItemService_.withTransaction(transactionManager);
                                        _f.label = 23;
                                    case 23:
                                        _f.trys.push([23, 28, 29, 30]);
                                        claim_items_1 = __values(claim_items), claim_items_1_1 = claim_items_1.next();
                                        _f.label = 24;
                                    case 24:
                                        if (!!claim_items_1_1.done) return [3 /*break*/, 27];
                                        i = claim_items_1_1.value;
                                        if (!i.id) return [3 /*break*/, 26];
                                        return [4 /*yield*/, claimItemServiceTx.update(i.id, i)];
                                    case 25:
                                        _f.sent();
                                        _f.label = 26;
                                    case 26:
                                        claim_items_1_1 = claim_items_1.next();
                                        return [3 /*break*/, 24];
                                    case 27: return [3 /*break*/, 30];
                                    case 28:
                                        e_3_1 = _f.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 30];
                                    case 29:
                                        try {
                                            if (claim_items_1_1 && !claim_items_1_1.done && (_e = claim_items_1.return)) _e.call(claim_items_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 30: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(ClaimService.Events.UPDATED, {
                                            id: claim.id,
                                            no_notification: claim.no_notification,
                                        })];
                                    case 31:
                                        _f.sent();
                                        return [2 /*return*/, claim];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a Claim on an Order. Claims consists of items that are claimed and
     * optionally items to be sent as replacement for the claimed items. The
     * shipping address that the new items will be shipped to
     * @param data - the object containing all data required to create a claim
     * @return created claim
     */
    ClaimService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claimRepo, type, claim_items, order, return_shipping, additional_items, shipping_methods, refund_amount, shipping_address, shipping_address_id, no_notification, rest, lineItemServiceTx, claim_items_2, claim_items_2_1, item, line, e_4_1, addressId, addressRepo, created_1, saved, toRefund, lines, newItems, inventoryServiceTx, additional_items_1, additional_items_1_1, item, e_5_1, newItems_1, newItems_1_1, newItem, e_6_1, evaluatedNoNotification, created, result, calcContext, lineItems, shippingOptionServiceTx, shipping_methods_2, shipping_methods_2_1, method, e_7_1, claimItemServiceTx, claim_items_3, claim_items_3_1, ci, e_8_1;
                            var e_4, _a, e_5, _b, e_6, _c, e_7, _d, e_8, _e;
                            var _f, _g, _h;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        claimRepo = transactionManager.getCustomRepository(this.claimRepository_);
                                        type = data.type, claim_items = data.claim_items, order = data.order, return_shipping = data.return_shipping, additional_items = data.additional_items, shipping_methods = data.shipping_methods, refund_amount = data.refund_amount, shipping_address = data.shipping_address, shipping_address_id = data.shipping_address_id, no_notification = data.no_notification, rest = __rest(data, ["type", "claim_items", "order", "return_shipping", "additional_items", "shipping_methods", "refund_amount", "shipping_address", "shipping_address_id", "no_notification"]);
                                        lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                        _j.label = 1;
                                    case 1:
                                        _j.trys.push([1, 6, 7, 8]);
                                        claim_items_2 = __values(claim_items), claim_items_2_1 = claim_items_2.next();
                                        _j.label = 2;
                                    case 2:
                                        if (!!claim_items_2_1.done) return [3 /*break*/, 5];
                                        item = claim_items_2_1.value;
                                        return [4 /*yield*/, lineItemServiceTx.retrieve(item.item_id, {
                                                relations: ["order", "swap", "claim_order", "tax_lines"],
                                            })];
                                    case 3:
                                        line = _j.sent();
                                        if (((_f = line.order) === null || _f === void 0 ? void 0 : _f.canceled_at) ||
                                            ((_g = line.swap) === null || _g === void 0 ? void 0 : _g.canceled_at) ||
                                            ((_h = line.claim_order) === null || _h === void 0 ? void 0 : _h.canceled_at)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot create a claim on a canceled item.");
                                        }
                                        _j.label = 4;
                                    case 4:
                                        claim_items_2_1 = claim_items_2.next();
                                        return [3 /*break*/, 2];
                                    case 5: return [3 /*break*/, 8];
                                    case 6:
                                        e_4_1 = _j.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 8];
                                    case 7:
                                        try {
                                            if (claim_items_2_1 && !claim_items_2_1.done && (_a = claim_items_2.return)) _a.call(claim_items_2);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 8:
                                        addressId = shipping_address_id || order.shipping_address_id;
                                        if (!shipping_address) return [3 /*break*/, 10];
                                        addressRepo = transactionManager.getCustomRepository(this.addressRepository_);
                                        created_1 = addressRepo.create(shipping_address);
                                        return [4 /*yield*/, addressRepo.save(created_1)];
                                    case 9:
                                        saved = _j.sent();
                                        addressId = saved.id;
                                        _j.label = 10;
                                    case 10:
                                        if (type !== models_1.ClaimType.REFUND && type !== models_1.ClaimType.REPLACE) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claim type must be one of \"refund\" or \"replace\".");
                                        }
                                        if (type === models_1.ClaimType.REPLACE && !(additional_items === null || additional_items === void 0 ? void 0 : additional_items.length)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claims with type \"replace\" must have at least one additional item.");
                                        }
                                        if (!(claim_items === null || claim_items === void 0 ? void 0 : claim_items.length)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claims must have at least one claim item.");
                                        }
                                        if (refund_amount && type !== models_1.ClaimType.REFUND) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claim has type \"".concat(type, "\" but must be type \"refund\" to have a refund_amount."));
                                        }
                                        toRefund = refund_amount;
                                        if (!(type === models_1.ClaimType.REFUND && typeof refund_amount === "undefined")) return [3 /*break*/, 12];
                                        lines = claim_items.map(function (ci) {
                                            var e_9, _a, e_10, _b;
                                            var _c, _d;
                                            var allOrderItems = order.items;
                                            if ((_c = order.swaps) === null || _c === void 0 ? void 0 : _c.length) {
                                                try {
                                                    for (var _e = __values(order.swaps), _f = _e.next(); !_f.done; _f = _e.next()) {
                                                        var swap = _f.value;
                                                        swap.additional_items.forEach(function (it) {
                                                            if (it.shipped_quantity ||
                                                                it.shipped_quantity === it.fulfilled_quantity) {
                                                                allOrderItems.push(it);
                                                            }
                                                        });
                                                    }
                                                }
                                                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                                finally {
                                                    try {
                                                        if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                                                    }
                                                    finally { if (e_9) throw e_9.error; }
                                                }
                                            }
                                            if ((_d = order.claims) === null || _d === void 0 ? void 0 : _d.length) {
                                                try {
                                                    for (var _g = __values(order.claims), _h = _g.next(); !_h.done; _h = _g.next()) {
                                                        var claim = _h.value;
                                                        claim.additional_items.forEach(function (it) {
                                                            if (it.shipped_quantity ||
                                                                it.shipped_quantity === it.fulfilled_quantity) {
                                                                allOrderItems.push(it);
                                                            }
                                                        });
                                                    }
                                                }
                                                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                                                finally {
                                                    try {
                                                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                                                    }
                                                    finally { if (e_10) throw e_10.error; }
                                                }
                                            }
                                            var orderItem = allOrderItems.find(function (oi) { return oi.id === ci.item_id; });
                                            return __assign(__assign({}, orderItem), { quantity: ci.quantity });
                                        });
                                        return [4 /*yield*/, this.totalsService_.getRefundTotal(order, lines)];
                                    case 11:
                                        toRefund = _j.sent();
                                        _j.label = 12;
                                    case 12:
                                        newItems = [];
                                        if (!(0, utils_1.isDefined)(additional_items)) return [3 /*break*/, 29];
                                        inventoryServiceTx = this.inventoryService_.withTransaction(transactionManager);
                                        _j.label = 13;
                                    case 13:
                                        _j.trys.push([13, 18, 19, 20]);
                                        additional_items_1 = __values(additional_items), additional_items_1_1 = additional_items_1.next();
                                        _j.label = 14;
                                    case 14:
                                        if (!!additional_items_1_1.done) return [3 /*break*/, 17];
                                        item = additional_items_1_1.value;
                                        return [4 /*yield*/, inventoryServiceTx.confirmInventory(item.variant_id, item.quantity)];
                                    case 15:
                                        _j.sent();
                                        _j.label = 16;
                                    case 16:
                                        additional_items_1_1 = additional_items_1.next();
                                        return [3 /*break*/, 14];
                                    case 17: return [3 /*break*/, 20];
                                    case 18:
                                        e_5_1 = _j.sent();
                                        e_5 = { error: e_5_1 };
                                        return [3 /*break*/, 20];
                                    case 19:
                                        try {
                                            if (additional_items_1_1 && !additional_items_1_1.done && (_b = additional_items_1.return)) _b.call(additional_items_1);
                                        }
                                        finally { if (e_5) throw e_5.error; }
                                        return [7 /*endfinally*/];
                                    case 20: return [4 /*yield*/, Promise.all(additional_items.map(function (i) {
                                            return lineItemServiceTx.generate(i.variant_id, order.region_id, i.quantity);
                                        }))];
                                    case 21:
                                        newItems = _j.sent();
                                        _j.label = 22;
                                    case 22:
                                        _j.trys.push([22, 27, 28, 29]);
                                        newItems_1 = __values(newItems), newItems_1_1 = newItems_1.next();
                                        _j.label = 23;
                                    case 23:
                                        if (!!newItems_1_1.done) return [3 /*break*/, 26];
                                        newItem = newItems_1_1.value;
                                        return [4 /*yield*/, inventoryServiceTx.adjustInventory(newItem.variant_id, -newItem.quantity)];
                                    case 24:
                                        _j.sent();
                                        _j.label = 25;
                                    case 25:
                                        newItems_1_1 = newItems_1.next();
                                        return [3 /*break*/, 23];
                                    case 26: return [3 /*break*/, 29];
                                    case 27:
                                        e_6_1 = _j.sent();
                                        e_6 = { error: e_6_1 };
                                        return [3 /*break*/, 29];
                                    case 28:
                                        try {
                                            if (newItems_1_1 && !newItems_1_1.done && (_c = newItems_1.return)) _c.call(newItems_1);
                                        }
                                        finally { if (e_6) throw e_6.error; }
                                        return [7 /*endfinally*/];
                                    case 29:
                                        evaluatedNoNotification = no_notification !== undefined
                                            ? no_notification
                                            : order.no_notification;
                                        created = claimRepo.create(__assign({ shipping_address_id: addressId, payment_status: type === models_1.ClaimType.REFUND ? "not_refunded" : "na", refund_amount: toRefund, type: type, additional_items: newItems, order_id: order.id, no_notification: evaluatedNoNotification }, rest));
                                        return [4 /*yield*/, claimRepo.save(created)];
                                    case 30:
                                        result = _j.sent();
                                        if (!(result.additional_items && result.additional_items.length)) return [3 /*break*/, 34];
                                        return [4 /*yield*/, this.totalsService_.getCalculationContext(order)];
                                    case 31:
                                        calcContext = _j.sent();
                                        return [4 /*yield*/, lineItemServiceTx.list({
                                                id: result.additional_items.map(function (i) { return i.id; }),
                                            })];
                                    case 32:
                                        lineItems = _j.sent();
                                        return [4 /*yield*/, this.taxProviderService_
                                                .withTransaction(transactionManager)
                                                .createTaxLines(lineItems, calcContext)];
                                    case 33:
                                        _j.sent();
                                        _j.label = 34;
                                    case 34:
                                        if (!shipping_methods) return [3 /*break*/, 44];
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(transactionManager);
                                        _j.label = 35;
                                    case 35:
                                        _j.trys.push([35, 42, 43, 44]);
                                        shipping_methods_2 = __values(shipping_methods), shipping_methods_2_1 = shipping_methods_2.next();
                                        _j.label = 36;
                                    case 36:
                                        if (!!shipping_methods_2_1.done) return [3 /*break*/, 41];
                                        method = shipping_methods_2_1.value;
                                        if (!method.id) return [3 /*break*/, 38];
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingMethod(method.id, {
                                                claim_order_id: result.id,
                                            })];
                                    case 37:
                                        _j.sent();
                                        return [3 /*break*/, 40];
                                    case 38: return [4 /*yield*/, shippingOptionServiceTx.createShippingMethod(method.option_id, method.data, {
                                            claim_order_id: result.id,
                                            price: method.price,
                                        })];
                                    case 39:
                                        _j.sent();
                                        _j.label = 40;
                                    case 40:
                                        shipping_methods_2_1 = shipping_methods_2.next();
                                        return [3 /*break*/, 36];
                                    case 41: return [3 /*break*/, 44];
                                    case 42:
                                        e_7_1 = _j.sent();
                                        e_7 = { error: e_7_1 };
                                        return [3 /*break*/, 44];
                                    case 43:
                                        try {
                                            if (shipping_methods_2_1 && !shipping_methods_2_1.done && (_d = shipping_methods_2.return)) _d.call(shipping_methods_2);
                                        }
                                        finally { if (e_7) throw e_7.error; }
                                        return [7 /*endfinally*/];
                                    case 44:
                                        claimItemServiceTx = this.claimItemService_.withTransaction(transactionManager);
                                        _j.label = 45;
                                    case 45:
                                        _j.trys.push([45, 50, 51, 52]);
                                        claim_items_3 = __values(claim_items), claim_items_3_1 = claim_items_3.next();
                                        _j.label = 46;
                                    case 46:
                                        if (!!claim_items_3_1.done) return [3 /*break*/, 49];
                                        ci = claim_items_3_1.value;
                                        return [4 /*yield*/, claimItemServiceTx.create(__assign(__assign({}, ci), { claim_order_id: result.id }))];
                                    case 47:
                                        _j.sent();
                                        _j.label = 48;
                                    case 48:
                                        claim_items_3_1 = claim_items_3.next();
                                        return [3 /*break*/, 46];
                                    case 49: return [3 /*break*/, 52];
                                    case 50:
                                        e_8_1 = _j.sent();
                                        e_8 = { error: e_8_1 };
                                        return [3 /*break*/, 52];
                                    case 51:
                                        try {
                                            if (claim_items_3_1 && !claim_items_3_1.done && (_e = claim_items_3.return)) _e.call(claim_items_3);
                                        }
                                        finally { if (e_8) throw e_8.error; }
                                        return [7 /*endfinally*/];
                                    case 52:
                                        if (!return_shipping) return [3 /*break*/, 54];
                                        return [4 /*yield*/, this.returnService_.withTransaction(transactionManager).create({
                                                order_id: order.id,
                                                claim_order_id: result.id,
                                                items: claim_items.map(function (ci) {
                                                    return ({
                                                        item_id: ci.item_id,
                                                        quantity: ci.quantity,
                                                        metadata: ci.metadata,
                                                    });
                                                }),
                                                shipping_method: return_shipping,
                                                no_notification: evaluatedNoNotification,
                                            })];
                                    case 53:
                                        _j.sent();
                                        _j.label = 54;
                                    case 54: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(ClaimService.Events.CREATED, {
                                            id: result.id,
                                            no_notification: result.no_notification,
                                        })];
                                    case 55:
                                        _j.sent();
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
     * @param id - the object containing all data required to create a claim
     * @param config - config object
     * @param config.metadata - config metadata
     * @param config.no_notification - config no notification
     * @return created claim
     */
    ClaimService.prototype.createFulfillment = function (id, config) {
        if (config === void 0) { config = {
            metadata: {},
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadata, no_notification;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = config.metadata, no_notification = config.no_notification;
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var claim, order, evaluatedNoNotification, fulfillments, successfullyFulfilledItems, fulfillments_1, fulfillments_1_1, fulfillment, _loop_1, this_1, _a, _b, item, e_11_1, claimRepo, claimOrder, eventBusTx, fulfillments_2, fulfillments_2_1, fulfillment, e_12_1;
                                var e_13, _c, e_11, _d, e_12, _e;
                                var _f;
                                return __generator(this, function (_g) {
                                    switch (_g.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(id, {
                                                relations: [
                                                    "additional_items",
                                                    "additional_items.tax_lines",
                                                    "shipping_methods",
                                                    "shipping_methods.tax_lines",
                                                    "shipping_address",
                                                    "order",
                                                    "order.billing_address",
                                                    "order.discounts",
                                                    "order.discounts.rule",
                                                    "order.payments",
                                                ],
                                            })];
                                        case 1:
                                            claim = _g.sent();
                                            if (claim.canceled_at) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be fulfilled");
                                            }
                                            order = claim.order;
                                            if (claim.fulfillment_status !== "not_fulfilled" &&
                                                claim.fulfillment_status !== "canceled") {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The claim has already been fulfilled.");
                                            }
                                            if (claim.type !== "replace") {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Claims with the type \"".concat(claim.type, "\" can not be fulfilled."));
                                            }
                                            if (!((_f = claim.shipping_methods) === null || _f === void 0 ? void 0 : _f.length)) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot fulfill a claim without a shipping method.");
                                            }
                                            evaluatedNoNotification = no_notification !== undefined
                                                ? no_notification
                                                : claim.no_notification;
                                            return [4 /*yield*/, this.fulfillmentService_
                                                    .withTransaction(transactionManager)
                                                    .createFulfillment(__assign(__assign({}, claim), { email: order.email, payments: order.payments, discounts: order.discounts, currency_code: order.currency_code, tax_rate: order.tax_rate, region_id: order.region_id, display_id: order.display_id, billing_address: order.billing_address, items: claim.additional_items, shipping_methods: claim.shipping_methods, is_claim: true, no_notification: evaluatedNoNotification }), claim.additional_items.map(function (i) { return ({
                                                    item_id: i.id,
                                                    quantity: i.quantity,
                                                }); }), { claim_order_id: id, metadata: metadata })];
                                        case 2:
                                            fulfillments = _g.sent();
                                            successfullyFulfilledItems = [];
                                            try {
                                                for (fulfillments_1 = __values(fulfillments), fulfillments_1_1 = fulfillments_1.next(); !fulfillments_1_1.done; fulfillments_1_1 = fulfillments_1.next()) {
                                                    fulfillment = fulfillments_1_1.value;
                                                    successfullyFulfilledItems = successfullyFulfilledItems.concat(fulfillment.items);
                                                }
                                            }
                                            catch (e_13_1) { e_13 = { error: e_13_1 }; }
                                            finally {
                                                try {
                                                    if (fulfillments_1_1 && !fulfillments_1_1.done && (_c = fulfillments_1.return)) _c.call(fulfillments_1);
                                                }
                                                finally { if (e_13) throw e_13.error; }
                                            }
                                            claim.fulfillment_status = models_1.ClaimFulfillmentStatus.FULFILLED;
                                            _loop_1 = function (item) {
                                                var fulfillmentItem, fulfilledQuantity;
                                                return __generator(this, function (_h) {
                                                    switch (_h.label) {
                                                        case 0:
                                                            fulfillmentItem = successfullyFulfilledItems.find(function (successfullyFulfilledItem) {
                                                                return successfullyFulfilledItem.item_id === item.id;
                                                            });
                                                            if (!fulfillmentItem) return [3 /*break*/, 2];
                                                            fulfilledQuantity = (item.fulfilled_quantity || 0) + fulfillmentItem.quantity;
                                                            // Update the fulfilled quantity
                                                            return [4 /*yield*/, this_1.lineItemService_
                                                                    .withTransaction(transactionManager)
                                                                    .update(item.id, {
                                                                    fulfilled_quantity: fulfilledQuantity,
                                                                })];
                                                        case 1:
                                                            // Update the fulfilled quantity
                                                            _h.sent();
                                                            if (item.quantity !== fulfilledQuantity) {
                                                                claim.fulfillment_status = models_1.ClaimFulfillmentStatus.REQUIRES_ACTION;
                                                            }
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            if (item.quantity !== item.fulfilled_quantity) {
                                                                claim.fulfillment_status = models_1.ClaimFulfillmentStatus.REQUIRES_ACTION;
                                                            }
                                                            _h.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            this_1 = this;
                                            _g.label = 3;
                                        case 3:
                                            _g.trys.push([3, 8, 9, 10]);
                                            _a = __values(claim.additional_items), _b = _a.next();
                                            _g.label = 4;
                                        case 4:
                                            if (!!_b.done) return [3 /*break*/, 7];
                                            item = _b.value;
                                            return [5 /*yield**/, _loop_1(item)];
                                        case 5:
                                            _g.sent();
                                            _g.label = 6;
                                        case 6:
                                            _b = _a.next();
                                            return [3 /*break*/, 4];
                                        case 7: return [3 /*break*/, 10];
                                        case 8:
                                            e_11_1 = _g.sent();
                                            e_11 = { error: e_11_1 };
                                            return [3 /*break*/, 10];
                                        case 9:
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_11) throw e_11.error; }
                                            return [7 /*endfinally*/];
                                        case 10:
                                            claimRepo = transactionManager.getCustomRepository(this.claimRepository_);
                                            return [4 /*yield*/, claimRepo.save(claim)];
                                        case 11:
                                            claimOrder = _g.sent();
                                            eventBusTx = this.eventBus_.withTransaction(transactionManager);
                                            _g.label = 12;
                                        case 12:
                                            _g.trys.push([12, 17, 18, 19]);
                                            fulfillments_2 = __values(fulfillments), fulfillments_2_1 = fulfillments_2.next();
                                            _g.label = 13;
                                        case 13:
                                            if (!!fulfillments_2_1.done) return [3 /*break*/, 16];
                                            fulfillment = fulfillments_2_1.value;
                                            return [4 /*yield*/, eventBusTx.emit(ClaimService.Events.FULFILLMENT_CREATED, {
                                                    id: id,
                                                    fulfillment_id: fulfillment.id,
                                                    no_notification: claim.no_notification,
                                                })];
                                        case 14:
                                            _g.sent();
                                            _g.label = 15;
                                        case 15:
                                            fulfillments_2_1 = fulfillments_2.next();
                                            return [3 /*break*/, 13];
                                        case 16: return [3 /*break*/, 19];
                                        case 17:
                                            e_12_1 = _g.sent();
                                            e_12 = { error: e_12_1 };
                                            return [3 /*break*/, 19];
                                        case 18:
                                            try {
                                                if (fulfillments_2_1 && !fulfillments_2_1.done && (_e = fulfillments_2.return)) _e.call(fulfillments_2);
                                            }
                                            finally { if (e_12) throw e_12.error; }
                                            return [7 /*endfinally*/];
                                        case 19: return [2 /*return*/, claimOrder];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.cancelFulfillment = function (fulfillmentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var canceled, claim, claimRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.fulfillmentService_
                                            .withTransaction(transactionManager)
                                            .cancelFulfillment(fulfillmentId)];
                                    case 1:
                                        canceled = _a.sent();
                                        if (!canceled.claim_order_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Fufillment not related to a claim");
                                        }
                                        return [4 /*yield*/, this.retrieve(canceled.claim_order_id)];
                                    case 2:
                                        claim = _a.sent();
                                        claim.fulfillment_status = models_1.ClaimFulfillmentStatus.CANCELED;
                                        claimRepo = transactionManager.getCustomRepository(this.claimRepository_);
                                        return [2 /*return*/, claimRepo.save(claim)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.processRefund = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claim, claimRepo, claimOrder;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: ["order", "order.payments"],
                                        })];
                                    case 1:
                                        claim = _a.sent();
                                        if (claim.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be processed");
                                        }
                                        if (claim.type !== "refund") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Claim must have type \"refund\" to create a refund.");
                                        }
                                        if (!claim.refund_amount) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .refundPayment(claim.order.payments, claim.refund_amount, "claim")];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        claim.payment_status = models_1.ClaimPaymentStatus.REFUNDED;
                                        claimRepo = transactionManager.getCustomRepository(this.claimRepository_);
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 4:
                                        claimOrder = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(ClaimService.Events.REFUND_PROCESSED, {
                                                id: id,
                                                no_notification: claimOrder.no_notification,
                                            })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, claimOrder];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.createShipment = function (id, fulfillmentId, trackingLinks, config) {
        if (trackingLinks === void 0) { trackingLinks = []; }
        if (config === void 0) { config = {
            metadata: {},
            no_notification: undefined,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadata, no_notification;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = config.metadata, no_notification = config.no_notification;
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var claim, evaluatedNoNotification, shipment, lineItemServiceTx, _loop_2, _a, _b, additionalItem, e_14_1, claimRepo, claimOrder;
                                var e_14, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["additional_items"],
                                            })];
                                        case 1:
                                            claim = _d.sent();
                                            if (claim.canceled_at) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be fulfilled as shipped");
                                            }
                                            evaluatedNoNotification = no_notification !== undefined
                                                ? no_notification
                                                : claim.no_notification;
                                            return [4 /*yield*/, this.fulfillmentService_
                                                    .withTransaction(transactionManager)
                                                    .createShipment(fulfillmentId, trackingLinks, {
                                                    metadata: metadata,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 2:
                                            shipment = _d.sent();
                                            claim.fulfillment_status = models_1.ClaimFulfillmentStatus.SHIPPED;
                                            lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                            _loop_2 = function (additionalItem) {
                                                var shipped, shippedQty;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            shipped = shipment.items.find(function (si) { return si.item_id === additionalItem.id; });
                                                            if (!shipped) return [3 /*break*/, 2];
                                                            shippedQty = (additionalItem.shipped_quantity || 0) + shipped.quantity;
                                                            return [4 /*yield*/, lineItemServiceTx.update(additionalItem.id, {
                                                                    shipped_quantity: shippedQty,
                                                                })];
                                                        case 1:
                                                            _e.sent();
                                                            if (shippedQty !== additionalItem.quantity) {
                                                                claim.fulfillment_status =
                                                                    models_1.ClaimFulfillmentStatus.PARTIALLY_SHIPPED;
                                                            }
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            if (additionalItem.shipped_quantity !== additionalItem.quantity) {
                                                                claim.fulfillment_status = models_1.ClaimFulfillmentStatus.PARTIALLY_SHIPPED;
                                                            }
                                                            _e.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            _d.label = 3;
                                        case 3:
                                            _d.trys.push([3, 8, 9, 10]);
                                            _a = __values(claim.additional_items), _b = _a.next();
                                            _d.label = 4;
                                        case 4:
                                            if (!!_b.done) return [3 /*break*/, 7];
                                            additionalItem = _b.value;
                                            return [5 /*yield**/, _loop_2(additionalItem)];
                                        case 5:
                                            _d.sent();
                                            _d.label = 6;
                                        case 6:
                                            _b = _a.next();
                                            return [3 /*break*/, 4];
                                        case 7: return [3 /*break*/, 10];
                                        case 8:
                                            e_14_1 = _d.sent();
                                            e_14 = { error: e_14_1 };
                                            return [3 /*break*/, 10];
                                        case 9:
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_14) throw e_14.error; }
                                            return [7 /*endfinally*/];
                                        case 10:
                                            claimRepo = transactionManager.getCustomRepository(this.claimRepository_);
                                            return [4 /*yield*/, claimRepo.save(claim)];
                                        case 11:
                                            claimOrder = _d.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(ClaimService.Events.SHIPMENT_CREATED, {
                                                    id: id,
                                                    fulfillment_id: shipment.id,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 12:
                                            _d.sent();
                                            return [2 /*return*/, claimOrder];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.cancel = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claim, _a, _b, f, claimRepo, claimOrder;
                            var e_15, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: ["return_order", "fulfillments", "order", "order.refunds"],
                                        })];
                                    case 1:
                                        claim = _d.sent();
                                        if (claim.refund_amount) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Claim with a refund cannot be canceled");
                                        }
                                        if (claim.fulfillments) {
                                            try {
                                                for (_a = __values(claim.fulfillments), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                    f = _b.value;
                                                    if (!f.canceled_at) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "All fulfillments must be canceled before the claim can be canceled");
                                                    }
                                                }
                                            }
                                            catch (e_15_1) { e_15 = { error: e_15_1 }; }
                                            finally {
                                                try {
                                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                                }
                                                finally { if (e_15) throw e_15.error; }
                                            }
                                        }
                                        if (claim.return_order && claim.return_order.status !== "canceled") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Return must be canceled before the claim can be canceled");
                                        }
                                        claim.fulfillment_status = models_1.ClaimFulfillmentStatus.CANCELED;
                                        claim.canceled_at = new Date();
                                        claimRepo = transactionManager.getCustomRepository(this.claimRepository_);
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 2:
                                        claimOrder = _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(ClaimService.Events.CANCELED, {
                                                id: claimOrder.id,
                                                no_notification: claimOrder.no_notification,
                                            })];
                                    case 3:
                                        _d.sent();
                                        return [2 /*return*/, claimOrder];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - the config object containing query settings
     * @return the result of the find operation
     */
    ClaimService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, claimRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        claimRepo = manager.getCustomRepository(this.claimRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, claimRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets an order by id.
     * @param id - id of the claim order to retrieve
     * @param config - the config object containing query settings
     * @return the order document
     */
    ClaimService.prototype.retrieve = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, claimRepo, query, claim;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        claimRepo = manager.getCustomRepository(this.claimRepository_);
                        query = (0, utils_1.buildQuery)({ id: id }, config);
                        return [4 /*yield*/, claimRepo.findOne(query)];
                    case 1:
                        claim = _a.sent();
                        if (!claim) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Claim with ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, claim];
                }
            });
        });
    };
    ClaimService.Events = {
        CREATED: "claim.created",
        UPDATED: "claim.updated",
        CANCELED: "claim.canceled",
        FULFILLMENT_CREATED: "claim.fulfillment_created",
        SHIPMENT_CREATED: "claim.shipment_created",
        REFUND_PROCESSED: "claim.refund_processed",
    };
    return ClaimService;
}(interfaces_1.TransactionBaseService));
exports.default = ClaimService;
//# sourceMappingURL=claim.js.map