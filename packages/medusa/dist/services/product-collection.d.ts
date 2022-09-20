import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { ProductCollection } from "../models";
import { ProductRepository } from "../repositories/product";
import { ProductCollectionRepository } from "../repositories/product-collection";
import { FindConfig, QuerySelector } from "../types/common";
import { CreateProductCollection, UpdateProductCollection } from "../types/product-collection";
import EventBusService from "./event-bus";
declare type InjectedDependencies = {
    manager: EntityManager;
    eventBusService: EventBusService;
    productRepository: typeof ProductRepository;
    productCollectionRepository: typeof ProductCollectionRepository;
};
/**
 * Provides layer to manipulate product collections.
 */
declare class ProductCollectionService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly eventBus_: EventBusService;
    protected readonly productCollectionRepository_: typeof ProductCollectionRepository;
    protected readonly productRepository_: typeof ProductRepository;
    constructor({ manager, productCollectionRepository, productRepository, eventBusService, }: InjectedDependencies);
    /**
     * Retrieves a product collection by id.
     * @param collectionId - the id of the collection to retrieve.
     * @param config - the config of the collection to retrieve.
     * @return the collection.
     */
    retrieve(collectionId: string, config?: FindConfig<ProductCollection>): Promise<ProductCollection>;
    /**
     * Retrieves a product collection by id.
     * @param collectionHandle - the handle of the collection to retrieve.
     * @param config - query config for request
     * @return the collection.
     */
    retrieveByHandle(collectionHandle: string, config?: FindConfig<ProductCollection>): Promise<ProductCollection>;
    /**
     * Creates a product collection
     * @param collection - the collection to create
     * @return created collection
     */
    create(collection: CreateProductCollection): Promise<ProductCollection>;
    /**
     * Updates a product collection
     * @param collectionId - id of collection to update
     * @param update - update object
     * @return update collection
     */
    update(collectionId: string, update: UpdateProductCollection): Promise<ProductCollection>;
    /**
     * Deletes a product collection idempotently
     * @param collectionId - id of collection to delete
     * @return empty promise
     */
    delete(collectionId: string): Promise<void>;
    addProducts(collectionId: string, productIds: string[]): Promise<ProductCollection>;
    removeProducts(collectionId: string, productIds: string[]): Promise<void>;
    /**
     * Lists product collections
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    list(selector?: {}, config?: {
        skip: number;
        take: number;
    }): Promise<ProductCollection[]>;
    /**
     * Lists product collections and add count.
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    listAndCount(selector?: QuerySelector<ProductCollection>, config?: FindConfig<ProductCollection>): Promise<[ProductCollection[], number]>;
}
export default ProductCollectionService;
