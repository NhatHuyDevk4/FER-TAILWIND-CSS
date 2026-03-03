import ProductList from "@/components/shadcn-studio/blocks/product-list-01/product-list-01"
import { useProductsQuery } from "@/hooks/query/product"
import { fetchApiProduct } from "@/service/product"

import { useEffect, useState } from "react"



const ProductScreen = () => {

    // const [productsData, setProductsData] = useState([])

    // const fetchProducts = async () => {
    //     try {
    //         const res = await fetchApiProduct();
    //         console.log("res", res);
    //         setProductsData(res.products);
    //     } catch (error) {
    //         console.log("Error fetching products:", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchProducts();
    // }, [])

    const { data, isLoading, error } = useProductsQuery(1)
    // console.log("data", data);

    return (
        <div>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <p>Loading products...</p>
                </div>
            ) : error ? () => (
                <p>Error loading products: {error.message}</p>
            ) : (
                <ProductList products={data?.products} />
            )
            }
        </div >
    )
}

export default ProductScreen