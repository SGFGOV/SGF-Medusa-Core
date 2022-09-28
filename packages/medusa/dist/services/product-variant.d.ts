import { BaseService } from "medusa-interfaces";
import { EntityManager, SelectQueryBuilder } from "typeorm";
import { PriceSelectionContext } from "../interfaces/price-selection-strategy";
import { MoneyAmount } from "../models/money-amount";
import { Product } from "../models/product";
import { ProductOptionValue } from "../models/product-option-value";
import { ProductVariant } from "../models/product-variant";
import { FindWithRelationsOptions, ProductVariantRepository } from "../repositories/product-variant";
import { FindConfig } from "../types/common";
import { CreateProductVariantInput, FilterableProductVariantProps, GetRegionPriceContext, ProductVariantPrice, UpdateProductVariantInput } from "../types/product-variant";
/**
 * Provides layer to manipulate product variants.
 * @extends BaseService
 */
declare class ProductVariantService extends BaseService {
    static Events: {
        UPDATED: string;
        CREATED: string;
        DELETED: string;
    };
    private manager_;
    private productVariantRepository_;
    private productRepository_;
    private eventBus_;
    private regionService_;
    private priceSelectionStrategy_;
    private moneyAmountRepository_;
    private productOptionValueRepository_;
    private cartRepository_;
    constructor({ manager, productVariantRepository, productRepository, eventBusService, regionService, moneyAmountRepository, productOptionValueRepository, cartRepository, priceSelectionStrategy, }: {
        manager: any;
        productVariantRepository: any;
        productRepository: any;
        eventBusService: any;
        regionService: any;
        moneyAmountRepository: any;
        productOptionValueRepository: any;
        cartRepository: any;
        priceSelectionStrategy: any;
    });
    withTransaction(transactionManager: EntityManager): ProductVariantService;
    /**
     * Gets a product variant by id.
     * @param {string} variantId - the id of the product to get.
     * @param {FindConfig<ProductVariant>} config - query config object for variant retrieval.
     * @return {Promise<Product>} the product document.
     */
    retrieve(variantId: string, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<ProductVariant>;
    /**
     * Gets a product variant by id.
     * @param {string} sku - The unique stock keeping unit used to identify the product variant.
     * @param {FindConfig<ProductVariant>} config - query config object for variant retrieval.
     * @return {Promise<Product>} the product document.
     */
    retrieveBySKU(sku: string, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<ProductVariant>;
    /**
     * Creates an unpublished product variant. Will validate against parent product
     * to ensure that the variant can in fact be created.
     * @param {string} productOrProductId - the product the variant will be added to
     * @param {object} variant - the variant to create
     * @return {Promise} resolves to the creation result.
     */
    create(productOrProductId: string | Product, variant: CreateProductVariantInput): Promise<ProductVariant>;
    /**
     * Updates a variant.
     * Price updates should use dedicated methods.
     * The function will throw, if price updates are attempted.
     * @param {string | ProductVariant} variantOrVariantId - variant or id of a variant.
     * @param {object} update - an object with the update values.
     * @param {object} config - an object with the config values for returning the variant.
     * @return {Promise} resolves to the update result.
     */
    update(variantOrVariantId: string | Partial<ProductVariant>, update: UpdateProductVariantInput): Promise<ProductVariant>;
    /**
     * Updates a variant's prices.
     * Deletes any prices that are not in the update object, and is not associated with a price list.
     * @param variantId - the id of variant
     * @param prices - the update prices
     * @returns {Promise<void>} empty promise
     */
    updateVariantPrices(variantId: string, prices: ProductVariantPrice[]): Promise<void>;
    /**
     * Gets the price specific to a region. If no region specific money amount
     * exists the function will try to use a currency price. If no default
     * currency price exists the function will throw an error.
     * @param {string} variantId - the id of the variant to get price from
     * @param {GetRegionPriceContext} context - context for getting region price
     * @return {number} the price specific to the region
     */
    getRegionPrice(variantId: string, context: GetRegionPriceContext): Promise<number>;
    /**
     * Sets the default price of a specific region
     * @param {string} variantId - the id of the variant to update
     * @param {string} price - the price for the variant.
     * @return {Promise} the result of the update operation
     */
    setRegionPrice(variantId: string, price: ProductVariantPrice): Promise<MoneyAmount>;
    /**
     * Sets the default price for the given currency.
     * @param {string} variantId - the id of the variant to set prices for
     * @param {ProductVariantPrice} price - the price for the variant
     * @return {Promise} the result of the update operation
     */
    setCurrencyPrice(variantId: string, price: ProductVariantPrice): Promise<MoneyAmount>;
    /**
     * Updates variant's option value.
     * Option value must be of type string or number.
     * @param {string} variantId - the variant to decorate.
     * @param {string} optionId - the option from product.
     * @param {string} optionValue - option value to add.
     * @return {Promise} the result of the update operation.
     */
    updateOptionValue(variantId: string, optionId: string, optionValue: string): Promise<ProductOptionValue>;
    /**
     * Adds option value to a variant.
     * Fails when product with variant does not exist or
     * if that product does not have an option with the given
     * option id. Fails if given variant is not found.
     * Option value must be of type string or number.
     * @param {string} variantId - the variant to decorate.
     * @param {string} optionId - the option from product.
     * @param {string} optionValue - option value to add.
     * @return {Promise} the result of the update operation.
     */
    addOptionValue(variantId: string, optionId: string, optionValue: string): Promise<ProductOptionValue>;
    /**
     * Deletes option value from given variant.
     * Will never fail due to delete being idempotent.
     * @param {string} variantId - the variant to decorate.
     * @param {string} optionId - the option from product.
     * @return {Promise} empty promise
     */
    deleteOptionValue(variantId: string, optionId: string): Promise<void>;
    /**
     * @param {object} selector - the query object for find
     * @param {FindConfig<ProductVariant>} config - query config object for variant retrieval
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector: FilterableProductVariantProps, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<[ProductVariant[], number]>;
    /**
     * @param {FilterableProductVariantProps} selector - the query object for find
     * @param {FindConfig<ProductVariant>} config - query config object for variant retrieval
     * @return {Promise} the result of the find operation
     */
    list(selector: FilterableProductVariantProps, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<ProductVariant[]>;
    /**
     * Deletes variant.
     * Will never fail due to delete being idempotent.
     * @param {string} variantId - the id of the variant to delete. Must be
     *   castable as an ObjectId
     * @return {Promise<void>} empty promise
     */
    delete(variantId: string): Promise<void>;
    /**
     * Dedicated method to set metadata for a variant.
     * @param {string} variant - the variant to set metadata for.
     * @param {Object} metadata - the metadata to set
     * @return {Object} updated metadata object
     */
    setMetadata_(variant: ProductVariant, metadata: object): Record<string, unknown>;
    /**
     * Creates a query object to be used for list queries.
     * @param {object} selector - the selector to create the query from
     * @param {object} config - the config to use for the query
     * @return {object} an object containing the query, relations and free-text
     *   search param.
     */
    prepareListQuery_(selector: FilterableProductVariantProps, config: FindConfig<ProductVariant>): {
        query: FindWithRelationsOptions;
        relations: string[];
        q?: string;
    };
    /**
     * Lists variants based on the provided parameters and includes the count of
     * variants that match the query.
     * @param {object} variantRepo - the variant repository
     * @param {object} query - object that defines the scope for what should be returned
     * @param {object} q - free text query
     * @return {Promise<[ProductVariant[], number]>} an array containing the products as the first element and the total
     *   count of products that matches the query as the second element.
     */
    getFreeTextQueryBuilder_(variantRepo: ProductVariantRepository, query: FindWithRelationsOptions, q?: string): SelectQueryBuilder<ProductVariant>;
}
export default ProductVariantService;