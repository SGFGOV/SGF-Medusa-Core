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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var CartCompletionStrategy = /** @class */ (function (_super) {
    __extends(CartCompletionStrategy, _super);
    function CartCompletionStrategy(_a) {
        var idempotencyKeyService = _a.idempotencyKeyService, cartService = _a.cartService, orderService = _a.orderService, swapService = _a.swapService, manager = _a.manager;
        var _this = _super.call(this) || this;
        _this.idempotencyKeyService_ = idempotencyKeyService;
        _this.cartService_ = cartService;
        _this.orderService_ = orderService;
        _this.swapService_ = swapService;
        _this.manager_ = manager;
        return _this;
    }
    CartCompletionStrategy.prototype.complete = function (id, ikey, context) {
        return __awaiter(this, void 0, void 0, function () {
            var idempotencyKey, idempotencyKeyService, cartService, orderService, swapService, inProgress, err, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        idempotencyKey = ikey;
                        idempotencyKeyService = this.idempotencyKeyService_;
                        cartService = this.cartService_;
                        orderService = this.orderService_;
                        swapService = this.swapService_;
                        inProgress = true;
                        err = false;
                        _b.label = 1;
                    case 1:
                        if (!inProgress) return [3 /*break*/, 12];
                        _a = idempotencyKey.recovery_point;
                        switch (_a) {
                            case "started": return [3 /*break*/, 2];
                            case "tax_lines_created": return [3 /*break*/, 4];
                            case "payment_authorized": return [3 /*break*/, 6];
                            case "finished": return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 9];
                    case 2: return [4 /*yield*/, this.manager_.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, key, error;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, idempotencyKeyService
                                            .withTransaction(transactionManager)
                                            .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                            var cart;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, cartService
                                                            .withTransaction(manager)
                                                            .retrieve(id)];
                                                    case 1:
                                                        cart = _a.sent();
                                                        if (cart.completed_at) {
                                                            return [2 /*return*/, {
                                                                    response_code: 409,
                                                                    response_body: {
                                                                        code: medusa_core_utils_1.MedusaError.Codes.CART_INCOMPATIBLE_STATE,
                                                                        message: "Cart has already been completed",
                                                                        type: medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED,
                                                                    },
                                                                }];
                                                        }
                                                        return [4 /*yield*/, cartService.withTransaction(manager).createTaxLines(id)];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/, {
                                                                recovery_point: "tax_lines_created",
                                                            }];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a = _b.sent(), key = _a.key, error = _a.error;
                                        if (error) {
                                            inProgress = false;
                                            err = error;
                                        }
                                        else {
                                            idempotencyKey = key;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 4: return [4 /*yield*/, this.manager_.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, key, error;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, idempotencyKeyService
                                            .withTransaction(transactionManager)
                                            .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                            var cart;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, cartService
                                                            .withTransaction(manager)
                                                            .authorizePayment(id, __assign(__assign({}, context), { idempotency_key: idempotencyKey.idempotency_key }))];
                                                    case 1:
                                                        cart = _a.sent();
                                                        if (!cart.payment_session) return [3 /*break*/, 3];
                                                        if (!(cart.payment_session.status === "requires_more" ||
                                                            cart.payment_session.status === "pending")) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, cartService
                                                                .withTransaction(transactionManager)
                                                                .deleteTaxLines(id)];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/, {
                                                                response_code: 200,
                                                                response_body: {
                                                                    data: cart,
                                                                    payment_status: cart.payment_session.status,
                                                                    type: "cart",
                                                                },
                                                            }];
                                                    case 3: return [2 /*return*/, {
                                                            recovery_point: "payment_authorized",
                                                        }];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a = _b.sent(), key = _a.key, error = _a.error;
                                        if (error) {
                                            inProgress = false;
                                            err = error;
                                        }
                                        else {
                                            idempotencyKey = key;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 6: return [4 /*yield*/, this.manager_.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, key, error;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, idempotencyKeyService
                                            .withTransaction(transactionManager)
                                            .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                            var cart, _a, swapId, swap, error_1, order, error_2;
                                            var _b;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0: return [4 /*yield*/, cartService
                                                            .withTransaction(manager)
                                                            .retrieve(id, {
                                                            select: ["total"],
                                                            relations: [
                                                                "items",
                                                                "items.adjustments",
                                                                "payment",
                                                                "payment_sessions",
                                                            ],
                                                        })
                                                        // If cart is part of swap, we register swap as complete
                                                    ];
                                                    case 1:
                                                        cart = _c.sent();
                                                        _a = cart.type;
                                                        switch (_a) {
                                                            case "swap": return [3 /*break*/, 2];
                                                        }
                                                        return [3 /*break*/, 6];
                                                    case 2:
                                                        _c.trys.push([2, 5, , 6]);
                                                        swapId = (_b = cart.metadata) === null || _b === void 0 ? void 0 : _b.swap_id;
                                                        return [4 /*yield*/, swapService
                                                                .withTransaction(manager)
                                                                .registerCartCompletion(swapId)];
                                                    case 3:
                                                        swap = _c.sent();
                                                        return [4 /*yield*/, swapService
                                                                .withTransaction(manager)
                                                                .retrieve(swap.id, {
                                                                relations: ["shipping_address"],
                                                            })];
                                                    case 4:
                                                        swap = _c.sent();
                                                        return [2 /*return*/, {
                                                                response_code: 200,
                                                                response_body: { data: swap, type: "swap" },
                                                            }];
                                                    case 5:
                                                        error_1 = _c.sent();
                                                        if (error_1 &&
                                                            error_1.code ===
                                                                medusa_core_utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY) {
                                                            return [2 /*return*/, {
                                                                    response_code: 409,
                                                                    response_body: {
                                                                        message: error_1.message,
                                                                        type: error_1.type,
                                                                        code: error_1.code,
                                                                    },
                                                                }];
                                                        }
                                                        else {
                                                            throw error_1;
                                                        }
                                                        return [3 /*break*/, 6];
                                                    case 6:
                                                        if (typeof cart.total === "undefined") {
                                                            return [2 /*return*/, {
                                                                    response_code: 500,
                                                                    response_body: {
                                                                        message: "Unexpected state",
                                                                    },
                                                                }];
                                                        }
                                                        if (!cart.payment && cart.total > 0) {
                                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cart payment not authorized");
                                                        }
                                                        order = void 0;
                                                        _c.label = 7;
                                                    case 7:
                                                        _c.trys.push([7, 9, , 13]);
                                                        return [4 /*yield*/, orderService
                                                                .withTransaction(manager)
                                                                .createFromCart(cart.id)];
                                                    case 8:
                                                        order = _c.sent();
                                                        return [3 /*break*/, 13];
                                                    case 9:
                                                        error_2 = _c.sent();
                                                        if (!(error_2 &&
                                                            error_2.message === "Order from cart already exists")) return [3 /*break*/, 11];
                                                        return [4 /*yield*/, orderService
                                                                .withTransaction(manager)
                                                                .retrieveByCartId(id, {
                                                                select: [
                                                                    "subtotal",
                                                                    "tax_total",
                                                                    "shipping_total",
                                                                    "discount_total",
                                                                    "total",
                                                                ],
                                                                relations: [
                                                                    "shipping_address",
                                                                    "items",
                                                                    "payments",
                                                                ],
                                                            })];
                                                    case 10:
                                                        order = _c.sent();
                                                        return [2 /*return*/, {
                                                                response_code: 200,
                                                                response_body: { data: order, type: "order" },
                                                            }];
                                                    case 11:
                                                        if (error_2 &&
                                                            error_2.code ===
                                                                medusa_core_utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY) {
                                                            return [2 /*return*/, {
                                                                    response_code: 409,
                                                                    response_body: {
                                                                        message: error_2.message,
                                                                        type: error_2.type,
                                                                        code: error_2.code,
                                                                    },
                                                                }];
                                                        }
                                                        else {
                                                            throw error_2;
                                                        }
                                                        _c.label = 12;
                                                    case 12: return [3 /*break*/, 13];
                                                    case 13: return [4 /*yield*/, orderService
                                                            .withTransaction(manager)
                                                            .retrieve(order.id, {
                                                            select: [
                                                                "subtotal",
                                                                "tax_total",
                                                                "shipping_total",
                                                                "discount_total",
                                                                "total",
                                                            ],
                                                            relations: ["shipping_address", "items", "payments"],
                                                        })];
                                                    case 14:
                                                        order = _c.sent();
                                                        return [2 /*return*/, {
                                                                response_code: 200,
                                                                response_body: { data: order, type: "order" },
                                                            }];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a = _b.sent(), key = _a.key, error = _a.error;
                                        if (error) {
                                            inProgress = false;
                                            err = error;
                                        }
                                        else {
                                            idempotencyKey = key;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 8:
                        {
                            inProgress = false;
                            return [3 /*break*/, 11];
                        }
                        _b.label = 9;
                    case 9: return [4 /*yield*/, this.manager_.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, idempotencyKeyService
                                            .withTransaction(transactionManager)
                                            .update(idempotencyKey.idempotency_key, {
                                            recovery_point: "finished",
                                            response_code: 500,
                                            response_body: { message: "Unknown recovery point" },
                                        })];
                                    case 1:
                                        idempotencyKey = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 1];
                    case 12:
                        if (!err) return [3 /*break*/, 15];
                        if (!(idempotencyKey.recovery_point !== "started")) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.manager_.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, cartService
                                                .withTransaction(transactionManager)
                                                .deleteTaxLines(id)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: throw err;
                    case 15: return [2 /*return*/, {
                            response_body: idempotencyKey.response_body,
                            response_code: idempotencyKey.response_code,
                        }];
                }
            });
        });
    };
    return CartCompletionStrategy;
}(interfaces_1.AbstractCartCompletionStrategy));
exports.default = CartCompletionStrategy;
//# sourceMappingURL=cart-completion.js.map