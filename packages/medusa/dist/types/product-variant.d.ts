import { DateComparisonOperator, NumericalComparisonOperator, StringComparisonOperator } from "./common";
export declare type ProductVariantPrice = {
    id?: string;
    currency_code?: string;
    region_id?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
};
export declare type GetRegionPriceContext = {
    regionId: string;
    quantity?: number;
    customer_id?: string;
    include_discount_prices?: boolean;
};
export declare type ProductVariantOption = {
    option_id: string;
    value: string;
};
export declare type CreateProductVariantInput = {
    title?: string;
    product_id?: string;
    sku?: string;
    barcode?: string;
    ean?: string;
    upc?: string;
    variant_rank?: number;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    hs_code?: string;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    options: ProductVariantOption[];
    prices: ProductVariantPrice[];
    metadata?: object;
};
export declare type UpdateProductVariantInput = {
    title?: string;
    product_id?: string;
    sku?: string;
    barcode?: string;
    ean?: string;
    upc?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    hs_code?: string;
    origin_country?: string;
    variant_rank?: number;
    mid_code?: string;
    material?: string;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    options?: ProductVariantOption[];
    prices?: ProductVariantPrice[];
    metadata?: object;
};
export declare class FilterableProductVariantProps {
    id?: string | string[] | StringComparisonOperator;
    title?: string | string[];
    product_id?: string | string[];
    sku?: string | string[];
    barcode?: string | string[];
    ean?: string | string[];
    upc?: string;
    inventory_quantity?: number | NumericalComparisonOperator;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    hs_code?: string | string[];
    origin_country?: string | string[];
    mid_code?: string | string[];
    material?: string;
    weight?: number | NumericalComparisonOperator;
    length?: number | NumericalComparisonOperator;
    height?: number | NumericalComparisonOperator;
    width?: number | NumericalComparisonOperator;
    q?: string;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
export declare class ProductVariantPricesUpdateReq {
    id?: string;
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
}
export declare class ProductVariantPricesCreateReq {
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
}
