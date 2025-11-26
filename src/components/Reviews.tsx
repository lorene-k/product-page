import type { Review } from "../types/product";
import { Box, Typography, Rating, Paper, Grid, Divider } from "@mui/material";

export default function Reviews({ reviews }: { reviews: Review[] }) {
    return (
        <Box sx={{ mt: 4, borderRadius: 2, textAlign: "center" }}>
            <Typography variant="h3" gutterBottom sx={{ color: "white", p: 3 }}>
                Customer Reviews
            </Typography>
            {reviews.length === 0 ? (
                <Typography variant="body1" sx={{ color: "white" }}>
                    No reviews available.
                </Typography>
            ) : (
                <Grid container spacing={1}>
                    {reviews.map((review, index) => (
                        <Box key={`${index}-${review.date}`}
                            sx={{ width: "100%" }}>
                            <Paper elevation={1} sx={{ p: 3, height: "100%", backgroundColor: "rgba(255, 255, 255, 0)", display: "flex", flexDirection: "row", gap: 5 }}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 150, flexShrink: 0 }}>
                                    <Typography variant="body1">{review.reviewerName}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {new Date(review.date).toLocaleDateString()}
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <Rating value={review.rating} precision={0.5} readOnly sx={{ mb: 1 }} />
                                    <Typography variant="body1">
                                        {review.comment}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    ))}
                </Grid>
            )}
        </Box>
    );
}