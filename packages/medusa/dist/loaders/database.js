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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var naming_strategy_1 = require("../utils/naming-strategy");
exports.default = (function (_a) {
    var container = _a.container, configModule = _a.configModule;
    return __awaiter(void 0, void 0, void 0, function () {
        var entities, isSqlite, hostConfig, connection;
        var _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    entities = container.resolve("db_entities");
                    isSqlite = configModule.projectConfig.database_type === "sqlite";
                    hostConfig = {
                        database: configModule.projectConfig.database_database,
                        url: configModule.projectConfig.database_url,
                    };
                    if (configModule.projectConfig.database_host) {
                        hostConfig = {
                            host: configModule.projectConfig.database_host,
                            port: configModule.projectConfig.database_port,
                            database: configModule.projectConfig.database_database,
                            ssl: configModule.projectConfig.database_ssl,
                            username: configModule.projectConfig.database_username,
                            password: configModule.projectConfig.database_password,
                        };
                    }
                    return [4 /*yield*/, (0, typeorm_1.createConnection)(__assign(__assign({ type: configModule.projectConfig.database_type, url: configModule.projectConfig.database_url
                                ? configModule.projectConfig.database_url
                                : undefined }, {
                            host: (_b = configModule.projectConfig.database_host) !== null && _b !== void 0 ? _b : "",
                            port: (_c = configModule.projectConfig.database_port) !== null && _c !== void 0 ? _c : "",
                            database: (_d = configModule.projectConfig.database_database) !== null && _d !== void 0 ? _d : "",
                            ssl: (_e = configModule.projectConfig.database_ssl) !== null && _e !== void 0 ? _e : {},
                            username: (_f = configModule.projectConfig.database_username) !== null && _f !== void 0 ? _f : "",
                            password: (_g = configModule.projectConfig.database_password) !== null && _g !== void 0 ? _g : "",
                        }), { database: configModule.projectConfig.database_database, extra: configModule.projectConfig.database_extra || {}, entities: entities, namingStrategy: new naming_strategy_1.ShortenedNamingStrategy(), logging: configModule.projectConfig.database_logging || false }))];
                case 1:
                    connection = _h.sent();
                    if (!isSqlite) return [3 /*break*/, 5];
                    return [4 /*yield*/, connection.query("PRAGMA foreign_keys = OFF")];
                case 2:
                    _h.sent();
                    return [4 /*yield*/, connection.synchronize()];
                case 3:
                    _h.sent();
                    return [4 /*yield*/, connection.query("PRAGMA foreign_keys = ON")];
                case 4:
                    _h.sent();
                    _h.label = 5;
                case 5: return [2 /*return*/, connection];
            }
        });
    });
});
//# sourceMappingURL=database.js.map