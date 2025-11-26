import { useProduct } from "../hooks/useProduct";
import DOMPurify from "dompurify";
import { ProductImage } from "../components/ProductImage";
import { Box, Typography, CircularProgress, Rating, Container } from "@mui/material";

export function ProductPage({ productId }: { productId: string }) {
    const { data, isLoading, isError } = useProduct(productId);
    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
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

                <ProductImage images={data.images} name={title} />

                <Box sx={{ display: "flex", alignItems: "center", mt: 2, justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Price: {price}€
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Rating value={rating} precision={0.5} readOnly sx={{ mt: 1 }} />
                        <Typography variant="body2" sx={{ mt: 1 }}> {rating} / 5</Typography>
                    </Box>
                </Box>
                <hr />
                <Box sx={{ mt: 3 }}>
                    <Box
                        sx={{ mt: 1 }}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                    />
                    <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "#999999" }}>
                        {data.returnPolicy}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
