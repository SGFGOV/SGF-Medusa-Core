"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("medusa-core-utils/dist");
var isProduction = ["production", "prod"].includes(process.env.NODE_ENV || "");
var errorHandler = isProduction
    ? function (msg) {
        throw new Error(msg);
    }
    : console.log;
exports.default = (function (rootDirectory) { return __awaiter(void 0, void 0, void 0, function () {
    var configuration, resolveConfigProperties, configModule, jwt_secret, cookie_secret;
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                configuration = (0, dist_1.getConfigFile)(rootDirectory, "medusa-config");
                resolveConfigProperties = function (obj) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b, key, _c, _d, e_1_1;
                    var e_1, _e;
                    return __generator(this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                _f.trys.push([0, 7, 8, 9]);
                                _a = __values(Object.keys(obj)), _b = _a.next();
                                _f.label = 1;
                            case 1:
                                if (!!_b.done) return [3 /*break*/, 6];
                                key = _b.value;
                                if (!(typeof obj[key] === "object" && obj[key] !== null)) return [3 /*break*/, 3];
                                return [4 /*yield*/, resolveConfigProperties(obj[key])];
                            case 2:
                                _f.sent();
                                _f.label = 3;
                            case 3:
                                if (!(typeof obj[key] === "function")) return [3 /*break*/, 5];
                                _c = obj;
                                _d = key;
                                return [4 /*yield*/, obj[key]()];
                            case 4:
                                _c[_d] = _f.sent();
                                _f.label = 5;
                            case 5:
                                _b = _a.next();
                                return [3 /*break*/, 1];
                            case 6: return [3 /*break*/, 9];
                            case 7:
                                e_1_1 = _f.sent();
                                e_1 = { error: e_1_1 };
                                return [3 /*break*/, 9];
                            case 8:
                                try {
                                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                                return [7 /*endfinally*/];
                            case 9: return [2 /*return*/, obj];
                        }
                    });
                }); };
                return [4 /*yield*/, resolveConfigProperties(configuration.configModule)
                    /* const { configModule } = await (async (): Promise<{
                      configModule: ConfigModule
                    }> => {
                      return Promise.resolve(
                        getConfigFile(rootDirectory, `medusa-config`) as {
                          configModule: ConfigModule
                        }
                      )
                    })()*/
                ];
            case 1:
                configModule = _j.sent();
                /* const { configModule } = await (async (): Promise<{
                  configModule: ConfigModule
                }> => {
                  return Promise.resolve(
                    getConfigFile(rootDirectory, `medusa-config`) as {
                      configModule: ConfigModule
                    }
                  )
                })()*/
                if (!((_a = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _a === void 0 ? void 0 : _a.redis_url)) {
                    console.log("[medusa-config] \u26A0\uFE0F redis_url not found. A fake redis instance will be used.");
                }
                jwt_secret = (_c = (_b = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _b === void 0 ? void 0 : _b.jwt_secret) !== null && _c !== void 0 ? _c : process.env.JWT_SECRET;
                if (!jwt_secret) {
                    errorHandler("[medusa-config] \u26A0\uFE0F jwt_secret not found.".concat(isProduction
                        ? ""
                        : " fallback to either cookie_secret or default 'supersecret'."));
                }
                cookie_secret = (_e = (_d = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _d === void 0 ? void 0 : _d.cookie_secret) !== null && _e !== void 0 ? _e : process.env.COOKIE_SECRET;
                if (!cookie_secret) {
                    errorHandler("[medusa-config] \u26A0\uFE0F cookie_secret not found.".concat(isProduction
                        ? ""
                        : " fallback to either cookie_secret or default 'supersecret'."));
                }
                if (!((_f = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _f === void 0 ? void 0 : _f.database_type)) {
                    console.log("[medusa-config] \u26A0\uFE0F database_type not found. fallback to default sqlite.");
                }
                return [2 /*return*/, {
                        projectConfig: __assign({ jwt_secret: jwt_secret !== null && jwt_secret !== void 0 ? jwt_secret : "supersecret", cookie_secret: cookie_secret !== null && cookie_secret !== void 0 ? cookie_secret : "supersecret" }, configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig),
                        featureFlags: (_g = configModule === null || configModule === void 0 ? void 0 : configModule.featureFlags) !== null && _g !== void 0 ? _g : {},
                        plugins: (_h = configModule === null || configModule === void 0 ? void 0 : configModule.plugins) !== null && _h !== void 0 ? _h : [],
                    }];
        }
    });
}); });
//# sourceMappingURL=config.js.map