import axios from "axios"

export const getData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL_API}/products`)
    return response
}

export const getProduct = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL_API}/products/${id}`)
    return response
}