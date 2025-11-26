import DOMPurify from "dompurify";
import { Box, Typography, Rating } from "@mui/material";

interface ProductInfoProps {
    price: string | number;
    rating: number;
    description: string;
    returnPolicy: string;
    discount: number;
}

export default function ProductInfo({ price, rating, description, returnPolicy, discount }: ProductInfoProps) {
    return (
        <Box sx={{ mb: 4, color: "white" }}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2, justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center", mt: 2 }}>
                    <Typography variant="h3">{price}€</Typography>
                    {discount > 0 && (<span style={{ textDecoration: "line-through", color: "#ff6666", marginLeft: 8 }}>{(Number(price) + (Number(price) * discount) / 100).toFixed(2)}€</span>)}
                </Box>
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
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    {returnPolicy}
                </Typography>
            </Box>
        </Box>
    );
}