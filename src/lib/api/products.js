import { serverFetch } from "../actions/server"

export const getProducts = (page, search, category, sort) => {
    console.log("FROM CLIENT --->", category)

    // Category & Encode problem 
    const params = new URLSearchParams()

    if (page) params.append("page", page)
    if (search) params.append("search", search)
    if (category) params.append("category", category)
    if (sort) params.append("sort", sort)

    return serverFetch(`/api/products?${params.toString()}`)

    // return serverFetch(`/api/products?page=${page}&search=${search}&category=${category}&sort=${sort}`);
}