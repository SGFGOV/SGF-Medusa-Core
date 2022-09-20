"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformVariantData = exports.transformProductData = exports.pickObjectPropsByRegex = void 0;
var utils_1 = require("../../../utils");
/**
 * Pick keys for a new object by regex.
 * @param data - Initial data object
 * @param regex - A regex used to pick which keys are going to be copied in the new object
 */
function pickObjectPropsByRegex(data, regex) {
    var variantKeyPredicate = function (key) { return regex.test(key); };
    var ret = {};
    for (var k in data) {
        if (variantKeyPredicate(k)) {
            var formattedData = typeof data[k] === "string"
                ? (0, utils_1.csvRevertCellContentFormatter)(data[k])
                : data[k];
            ret[k] = formattedData;
        }
    }
    return ret;
}
exports.pickObjectPropsByRegex = pickObjectPropsByRegex;
/**
 * Pick data from parsed CSV object relevant for product create/update and remove prefixes from keys.
 */
function transformProductData(data) {
    var ret = {};
    var productData = pickObjectPropsByRegex(data, /product\./);
    Object.keys(productData).forEach(function (k) {
        var key = k.split("product.")[1];
        ret[key] = productData[k];
    });
    return ret;
}
exports.transformProductData = transformProductData;
/**
 * Pick data from parsed CSV object relevant for variant create/update and remove prefixes from keys.
 */
function transformVariantData(data) {
    var ret = {};
    var productData = pickObjectPropsByRegex(data, /variant\./);
    Object.keys(productData).forEach(function (k) {
        var key = k.split("variant.")[1];
        ret[key] = productData[k];
    });
    // include product handle to keep track of associated product
    ret["product.handle"] = data["product.handle"];
    ret["product.options"] = data["product.options"];
    return ret;
}
exports.transformVariantData = transformVariantData;
//# sourceMappingURL=utils.js.map