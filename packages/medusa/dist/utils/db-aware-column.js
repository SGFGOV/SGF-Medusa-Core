"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAwareColumn = exports.resolveDbGenerationStrategy = exports.resolveDbType = void 0;
var typeorm_1 = require("typeorm");
var path_1 = __importDefault(require("path"));
var medusa_core_utils_1 = require("medusa-core-utils");
var pgSqliteTypeMapping = {
    increment: "rowid",
    timestamptz: "datetime",
    jsonb: "simple-json",
    enum: "text",
};
var pgSqliteGenerationMapping = {
    increment: "rowid",
};
var dbType;
function resolveDbType(pgSqlType) {
    if (!dbType) {
        try {
            var configModule = (0, medusa_core_utils_1.getConfigFile)(path_1.default.resolve("."), "medusa-config").configModule;
            dbType = configModule.projectConfig.database_type;
        }
        catch (error) {
            // Default to Postgres to allow for e.g. migrations to run
            dbType = "postgres";
        }
    }
    if (dbType === "sqlite" && pgSqlType in pgSqliteTypeMapping) {
        return pgSqliteTypeMapping[pgSqlType.toString()];
    }
    return pgSqlType;
}
exports.resolveDbType = resolveDbType;
function resolveDbGenerationStrategy(pgSqlType) {
    if (!dbType) {
        try {
            var configModule = (0, medusa_core_utils_1.getConfigFile)(path_1.default.resolve("."), "medusa-config").configModule;
            dbType = configModule.projectConfig.database_type;
        }
        catch (error) {
            // Default to Postgres to allow for e.g. migrations to run
            dbType = "postgres";
        }
    }
    if (dbType === "sqlite" && pgSqlType in pgSqliteTypeMapping) {
        return pgSqliteGenerationMapping[pgSqlType];
    }
    return pgSqlType;
}
exports.resolveDbGenerationStrategy = resolveDbGenerationStrategy;
function DbAwareColumn(columnOptions) {
    var pre = columnOptions.type;
    if (columnOptions.type) {
        columnOptions.type = resolveDbType(columnOptions.type);
    }
    if (pre === "jsonb" && pre !== columnOptions.type) {
        if ("default" in columnOptions) {
            columnOptions.default = JSON.stringify(columnOptions.default);
        }
    }
    return (0, typeorm_1.Column)(columnOptions);
}
exports.DbAwareColumn = DbAwareColumn;
//# sourceMappingURL=db-aware-column.js.map