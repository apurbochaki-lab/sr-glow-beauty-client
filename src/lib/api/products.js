import { serverFetch } from "../actions/server"

export const getProducts = () => {
    return serverFetch("/api/products");
}