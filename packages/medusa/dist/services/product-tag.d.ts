import { BaseService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { ProductTag } from "../models/product-tag";
import { ProductTagRepository } from "../repositories/product-tag";
import { FindConfig } from "../types/common";
import { FilterableProductTagProps } from "../types/product";
declare type ProductTagConstructorProps = {
    manager: EntityManager;
    productTagRepository: typeof ProductTagRepository;
};
/**
 * Provides layer to manipulate product tags.
 * @extends BaseService
 */
declare class ProductTagService extends BaseService {
    private manager_;
    private tagRepo_;
    constructor({ manager, productTagRepository }: ProductTagConstructorProps);
    withTransaction(transactionManager: EntityManager): ProductTagService;
    /**
     * Retrieves a product tag by id.
     * @param {string} tagId - the id of the product tag to retrieve
     * @param {Object} config - the config to retrieve the tag by
     * @return {Promise<ProductTag>} the collection.
     */
    retrieve(tagId: string, config?: FindConfig<ProductTag>): Promise<ProductTag>;
    /**
     * Creates a product tag
     * @param {object} tag - the product tag to create
     * @return {Promise<ProductTag>} created product tag
     */
    create(tag: Partial<ProductTag>): Promise<ProductTag>;
    /**
     * Lists product tags
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    list(selector?: FilterableProductTagProps, config?: FindConfig<ProductTag>): Promise<ProductTag[]>;
    /**
     * Lists product tags and adds count.
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector?: FilterableProductTagProps, config?: FindConfig<ProductTag>): Promise<[ProductTag[], number]>;
}
export default ProductTagService;