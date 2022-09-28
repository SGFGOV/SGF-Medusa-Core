import { BaseService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { Cart, LineItem, LineItemAdjustment, ProductVariant } from "../models";
import { LineItemAdjustmentRepository } from "../repositories/line-item-adjustment";
import { FindConfig } from "../types/common";
import { FilterableLineItemAdjustmentProps } from "../types/line-item-adjustment";
import DiscountService from "./discount";
declare type LineItemAdjustmentServiceProps = {
    manager: EntityManager;
    lineItemAdjustmentRepository: typeof LineItemAdjustmentRepository;
    discountService: DiscountService;
};
declare type AdjustmentContext = {
    variant: ProductVariant;
};
declare type GeneratedAdjustment = Omit<LineItem, "id" | "item_id">;
/**
 * Provides layer to manipulate line item adjustments.
 * @extends BaseService
 */
declare class LineItemAdjustmentService extends BaseService {
    private manager_;
    private lineItemAdjustmentRepo_;
    private discountService;
    constructor({ manager, lineItemAdjustmentRepository, discountService, }: LineItemAdjustmentServiceProps);
    withTransaction(transactionManager: EntityManager): LineItemAdjustmentService;
    /**
     * Retrieves a line item adjustment by id.
     * @param id - the id of the line item adjustment to retrieve
     * @param config - the config to retrieve the line item adjustment by
     * @return the line item adjustment.
     */
    retrieve(id: string, config?: FindConfig<LineItemAdjustment>): Promise<LineItemAdjustment>;
    /**
     * Creates a line item adjustment
     * @param data - the line item adjustment to create
     * @return line item adjustment
     */
    create(data: Partial<LineItemAdjustment>): Promise<LineItemAdjustment>;
    /**
     * Creates a line item adjustment
     * @param id - the line item adjustment id to update
     * @param data - the line item adjustment to create
     * @return line item adjustment
     */
    update(id: string, data: Partial<LineItemAdjustment>): Promise<LineItemAdjustment>;
    /**
     * Lists line item adjustments
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    list(selector?: FilterableLineItemAdjustmentProps, config?: FindConfig<LineItemAdjustment>): Promise<LineItemAdjustment[]>;
    /**
     * Deletes line item adjustments matching a selector
     * @param selectorOrId - the query object for find or the line item adjustment id
     * @return the result of the delete operation
     */
    delete(selectorOrId: string | FilterableLineItemAdjustmentProps): Promise<void>;
    /**
     * Creates adjustment for a line item
     * @param cart - the cart object holding discounts
     * @param generatedLineItem - the line item for which a line item adjustment might be created
     * @param context - the line item for which a line item adjustment might be created
     * @return a line item adjustment or undefined if no adjustment was created
     */
    generateAdjustments(cart: Cart, generatedLineItem: LineItem, context: AdjustmentContext): Promise<GeneratedAdjustment[]>;
    /**
     * Creates adjustment for a line item
     * @param cart - the cart object holding discounts
     * @param lineItem - the line item for which a line item adjustment might be created
     * @return a line item adjustment or undefined if no adjustment was created
     */
    createAdjustmentForLineItem(cart: Cart, lineItem: LineItem): Promise<LineItemAdjustment[]>;
    /**
     * Creates adjustment for a line item
     * @param cart - the cart object holding discounts
     * @param lineItem - the line item for which a line item adjustment might be created
     * @return if a lineItem was given, returns a line item adjustment or undefined if no adjustment was created
     * otherwise returns an array of line item adjustments for each line item in the cart
     */
    createAdjustments(cart: Cart, lineItem?: LineItem): Promise<LineItemAdjustment[] | LineItemAdjustment[][]>;
}
export default LineItemAdjustmentService;