"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminResetPasswordRequest = void 0;
var class_validator_1 = require("class-validator");
var medusa_core_utils_1 = require("medusa-core-utils");
var lodash_1 = __importDefault(require("lodash"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /users/reset-password
 * operationId: "PostUsersUserPassword"
 * summary: "Reset Password"
 * description: "Sets the password for a User given the correct token."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         required:
 *           - token
 *           - password
 *         properties:
 *           email:
 *             description: "The Users email."
 *             type: string
 *             format: email
 *           token:
 *             description: "The token generated from the 'password-token' endpoint."
 *             type: string
 *           password:
 *             description: "The Users new password."
 *             type: string
 *             format: password
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.users.resetPassword({
 *         token: 'supersecrettoken',
 *         password: 'supersecret'
 *       })
 *       .then(({ user }) => {
 *         console.log(user.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/users/reset-password' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "token": "supersecrettoken",
 *           "password": "supersecret"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - User
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             user:
 *               $ref: "#/components/schemas/user"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validated, userService_1, decoded, user_1, err_1, verifiedToken, manager, userResult, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(AdminResetPasswordRequest, req.body)];
            case 1:
                validated = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 10, , 11]);
                userService_1 = req.scope.resolve("userService");
                return [4 /*yield*/, jsonwebtoken_1.default.decode(validated.token)];
            case 3:
                decoded = (_a.sent());
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, userService_1.retrieveByEmail(validated.email || (decoded === null || decoded === void 0 ? void 0 : decoded.email), {
                        select: ["id", "password_hash"],
                    })];
            case 5:
                user_1 = _a.sent();
                return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "invalid token");
            case 7: return [4 /*yield*/, jsonwebtoken_1.default.verify(validated.token, user_1.password_hash)];
            case 8:
                verifiedToken = (_a.sent());
                if (!verifiedToken || verifiedToken.user_id !== user_1.id) {
                    res.status(401).send("Invalid or expired password reset token");
                    return [2 /*return*/];
                }
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, userService_1
                                        .withTransaction(transactionManager)
                                        .setPassword_(user_1.id, validated.password)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 9:
                userResult = _a.sent();
                res.status(200).json({ user: lodash_1.default.omit(userResult, ["password_hash"]) });
                return [3 /*break*/, 11];
            case 10:
                error_1 = _a.sent();
                if (error_1.message === "invalid token") {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, error_1.message);
                }
                throw error_1;
            case 11: return [2 /*return*/];
        }
    });
}); });
var AdminResetPasswordRequest = /** @class */ (function () {
    function AdminResetPasswordRequest() {
    }
    __decorate([
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminResetPasswordRequest.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminResetPasswordRequest.prototype, "token", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminResetPasswordRequest.prototype, "password", void 0);
    return AdminResetPasswordRequest;
}());
exports.AdminResetPasswordRequest = AdminResetPasswordRequest;
//# sourceMappingURL=reset-password.js.map