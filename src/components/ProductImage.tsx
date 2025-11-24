import { Box } from "@mui/material"

interface ProductImageProps {
    imageUrl: string;
    name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
    return (
        <Box
            component="img"
            src={imageUrl}
            alt={name}
            sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
        />
    )
}