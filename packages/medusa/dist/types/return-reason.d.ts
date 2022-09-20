export declare type CreateReturnReason = {
    value: string;
    label: string;
    parent_return_reason_id?: string;
    description?: string;
    metadata?: Record<string, unknown>;
};
export declare type UpdateReturnReason = {
    description?: string;
    label?: string;
    parent_return_reason_id?: string;
    metadata?: Record<string, unknown>;
};
