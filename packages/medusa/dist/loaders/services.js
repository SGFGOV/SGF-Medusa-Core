"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var awilix_1 = require("awilix");
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
var utils_1 = require("../utils");
/**
 * Registers all services in the services directory
 */
exports.default = (function (_a) {
    var container = _a.container, configModule = _a.configModule, isTest = _a.isTest;
    var useMock = (0, utils_1.isDefined)(isTest) ? isTest : process.env.NODE_ENV === "test";
    var corePath = useMock ? "../services/__mocks__/*.js" : "../services/*.js";
    var coreFull = path_1.default.join(__dirname, corePath);
    var core = glob_1.default.sync(coreFull, { cwd: __dirname });
    core.forEach(function (fn) {
        var _a;
        var loaded = require(fn).default;
        if (loaded) {
            var name = (0, format_registration_name_1.default)(fn);
            container.register((_a = {},
                _a[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, configModule); }).singleton(),
                _a));
        }
    });
});
//# sourceMappingURL=services.js.map