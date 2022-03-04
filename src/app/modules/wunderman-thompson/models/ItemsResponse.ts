import { Item } from "./Item";

export interface ItemsResponse {
    items: Item[],
    pageNumber: number,
    pageSize: number,
    totalRecord: number,
    totalPages: number
};