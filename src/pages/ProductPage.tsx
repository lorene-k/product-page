import { useProduct } from "../hooks/useProduct";
import { ProductImage } from "../components/ProductImage";
import { Suspense, lazy } from "react";
import { Box, Typography, CircularProgress, Container } from "@mui/material";

const Reviews = lazy(() => import("../components/Reviews"));
const ProductInfo = lazy(() => import("../components/ProductInfo"));

export function ProductPage({ productId }: { productId: string }) {
    const { data, isLoading, isError } = useProduct(productId);
    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10, flexDirection: "column", alignItems: "center", gap: 2 }}>
                <Typography variant="h3" gutterBottom>
                    Loading product page...
                </Typography>
                <CircularProgress />
            </Box>
        );
    }

    if (isError || !data) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                Failed to load product data.
            </Box>
        );
    }

    const title = data.title || "Unknown product";
    const price = data.price || "N/A";
    const rating = data.rating || 0;
    const description = data.description || "No description available.";

    return (
        <Container>
            <Box sx={{ p: 4 }}>
                <Typography variant="h2" gutterBottom sx={{ color: "white" }}>{title}</Typography>
                <Typography variant="h3">{data.brand}</Typography>

                <Suspense fallback={null}>
                    <ProductImage images={data.images} name={title} />
                    <ProductInfo
                        price={price}
                        rating={rating}
                        description={description}
                        returnPolicy={data.returnPolicy}
                        discount={data.discountPercentage}/>
                </Suspense>

                <Suspense fallback={null}>
                    <Reviews reviews={data.reviews} />
                </Suspense>
            </Box>
        </Container>
    );
}
