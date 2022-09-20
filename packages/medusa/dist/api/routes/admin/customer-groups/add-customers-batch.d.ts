import { Request, Response } from "express";
import { CustomerGroupsBatchCustomer } from "../../../../types/customer-groups";
/**
 * @oas [post] /customer-groups/{id}/customers/batch
 * operationId: "PostCustomerGroupsGroupCustomersBatch"
 * summary: "Add Customers"
 * description: "Adds a list of customers, represented by id's, to a customer group."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the customer group.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         required:
 *           - customer_ids
 *         properties:
 *           customer_ids:
 *             description: "The ids of the customers to add"
 *             type: array
 *             items:
 *               required:
 *                 - id
 *               properties:
 *                 id:
 *                   description: ID of the customer
 *                   type: string
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customerGroups.addCustomers(customer_group_id, {
 *         customer_ids: [
 *           {
 *             id: customer_id
 *           }
 *         ]
 *       })
 *       .then(({ customer_group }) => {
 *         console.log(customer_group.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/customer-groups/{id}/customers/batch' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "customer_ids": [
 *               {
 *                   "id": "cus_01G2Q4BS9GAHDBMDEN4ZQZCJB2"
 *               }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Customer Group
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             customer_group:
 *               $ref: "#/components/schemas/customer_group"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class AdminPostCustomerGroupsGroupCustomersBatchReq {
    customer_ids: CustomerGroupsBatchCustomer[];
}
