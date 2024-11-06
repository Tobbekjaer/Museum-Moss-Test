import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";

const BASE_URL = "http://localhost:8000/wp-json/wp/v2";

export default function Products() {
    const { data: products, isError, isPending } = useQuery(["products"], async () => {
        const response = await fetch(`${BASE_URL}/products?_fields=id,slug,title,acf`);
        const products = await response.json();

        // Fetch each image for all products
        const productsWithImages = await Promise.all(
            products.map(async (product) => {
                const image1Url = product.acf.product_image_1 
                    ? await fetchImageUrl(product.acf.product_image_1) 
                    : null;
                const image2Url = product.acf.product_image_2 
                    ? await fetchImageUrl(product.acf.product_image_2) 
                    : null;

                return { ...product, image1Url, image2Url };
            })
        );
        return productsWithImages;
    });

    const fetchImageUrl = async (imageId) => {
        const response = await fetch(`${BASE_URL}/media/${imageId}`);
        const imageData = await response.json();
        return imageData.source_url;
    };

    return (
        <>
            <h2 className="products-list">Imported from WordPress using REST API</h2>
            {isPending ? (
                <h3>Loading...</h3>
            ) : (
                <ul className="products-list">
                    {products?.map((product) => (
                        <li key={product.id}>
                            <ProductItem product={product} />
                        </li>
                    ))}
                </ul>
            )}

            {isError && <p>Error loading activities: {error.message}</p>}
        </>
    );
}
