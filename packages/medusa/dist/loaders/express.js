"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_session_1 = __importDefault(require("express-session"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var redis_1 = __importDefault(require("redis"));
var connect_redis_1 = __importDefault(require("connect-redis"));
exports.default = (function (_a) {
    var app = _a.app, configModule = _a.configModule;
    return __awaiter(void 0, void 0, void 0, function () {
        var sameSite, secure, cookie_secret, sessionOpts, RedisStore, redisClient;
        var _b;
        return __generator(this, function (_c) {
            sameSite = false;
            secure = false;
            if (process.env.NODE_ENV === "production" ||
                process.env.NODE_ENV === "staging") {
                secure = true;
                sameSite = "none";
            }
            cookie_secret = configModule.projectConfig.cookie_secret;
            sessionOpts = {
                resave: true,
                saveUninitialized: true,
                cookieName: "session",
                proxy: true,
                secret: cookie_secret,
                cookie: {
                    sameSite: sameSite,
                    secure: secure,
                    maxAge: 10 * 60 * 60 * 1000,
                },
                store: null
            };
            if ((_b = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _b === void 0 ? void 0 : _b.redis_url) {
                RedisStore = (0, connect_redis_1.default)(express_session_1.default);
                redisClient = redis_1.default.createClient(configModule.projectConfig.redis_url);
                sessionOpts.store = new RedisStore({ client: redisClient });
            }
            app.set("trust proxy", 1);
            app.use((0, morgan_1.default)("combined", {
                skip: function () { return process.env.NODE_ENV === "test"; },
            }));
            app.use((0, cookie_parser_1.default)());
            app.use((0, express_session_1.default)(sessionOpts));
            app.get("/health", function (req, res) {
                res.status(200).send("OK");
            });
            return [2 /*return*/, app];
        });
    });
});
//# sourceMappingURL=express.js.map