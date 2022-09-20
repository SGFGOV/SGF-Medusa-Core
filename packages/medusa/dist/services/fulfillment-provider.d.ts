import BaseFulfillmentService from "medusa-interfaces/dist/fulfillment-service";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { Cart, Fulfillment, FulfillmentProvider, LineItem, Order, ShippingMethod, ShippingOption } from "../models";
import { FulfillmentProviderRepository } from "../repositories/fulfillment-provider";
import { CreateFulfillmentOrder } from "../types/fulfillment";
import { CreateReturnType, FulfillmentOptions } from "../types/fulfillment-provider";
import { MedusaContainer } from "../types/global";
declare type FulfillmentProviderKey = `fp_${string}`;
declare type FulfillmentProviderContainer = MedusaContainer & {
    fulfillmentProviderRepository: typeof FulfillmentProviderRepository;
    manager: EntityManager;
} & {
    [key in `${FulfillmentProviderKey}`]: BaseFulfillmentService;
};
/**
 * Helps retrive fulfillment providers
 */
declare class FulfillmentProviderService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly container_: FulfillmentProviderContainer;
    protected readonly fulfillmentProviderRepository_: typeof FulfillmentProviderRepository;
    constructor(container: FulfillmentProviderContainer);
    registerInstalledProviders(providers: string[]): Promise<void>;
    list(): Promise<FulfillmentProvider[]>;
    listFulfillmentOptions(providerIds: string[]): Promise<FulfillmentOptions[]>;
    /**
     * @param providerId - the provider id
     * @return the payment fulfillment provider
     */
    retrieveProvider(providerId: string): BaseFulfillmentService;
    createFulfillment(method: ShippingMethod, items: LineItem[], order: CreateFulfillmentOrder, fulfillment: Omit<Fulfillment, "beforeInsert">): Promise<Record<string, unknown>>;
    canCalculate(option: ShippingOption): Promise<boolean>;
    validateFulfillmentData(option: ShippingOption, data: Record<string, unknown>, cart: Cart | Record<string, unknown>): Promise<Record<string, unknown>>;
    cancelFulfillment(fulfillment: Fulfillment): Promise<Fulfillment>;
    calculatePrice(option: ShippingOption, data: Record<string, unknown>, cart?: Order | Cart): Promise<number>;
    validateOption(option: ShippingOption): Promise<boolean>;
    createReturn(returnOrder: CreateReturnType): Promise<Record<string, unknown>>;
    /**
     * Fetches documents from the fulfillment provider
     * @param providerId - the id of the provider
     * @param fulfillmentData - the data relating to the fulfillment
     * @param documentType - the typ of
     * @returns document to fetch
     */
    retrieveDocuments(providerId: string, fulfillmentData: Record<string, unknown>, documentType: "invoice" | "label"): Promise<any>;
}
export default FulfillmentProviderService;
