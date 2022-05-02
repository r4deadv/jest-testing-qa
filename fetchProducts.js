import fetch from "node-fetch"

const storeUrl = 'https://fakestoreapi.com/products'
const fetchProducts = async () => {
    const response = await fetch(storeUrl)
    const json = await response.json()
    console.log(json)
}
fetchProducts()