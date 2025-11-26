import { Box } from "@mui/material";
import { useState, Suspense, lazy } from "react";
import { useSwipeable } from "react-swipeable";

const ImageNavigation = lazy(() => import("./ImageNavigation"));

interface ProductImageProps {
    images: string[];
    name: string;
}

export function ProductImage({ images, name }: ProductImageProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveIndex((prev) => (prev - 1 + maxSteps) % maxSteps);
    };

    const handlers = maxSteps > 1 ? useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handleBack,
        trackMouse: true,
    }) : {};

    return (
        <Box sx={{ margin: "auto", position: "relative" }}>
            <Box
                {...handlers}
                sx={{
                    height: 400,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    borderRadius: 2,
                    bgcolor: "transparent",
                }}
            >
                <img
                    src={images[activeIndex]}
                    alt={`img-${name}-${activeIndex}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",

                    }}
                    loading="lazy"
                />
            </Box>
            {maxSteps > 1 && (
                <Suspense fallback={null}>
                    <ImageNavigation
                        activeIndex={activeIndex}
                        maxSteps={maxSteps}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                </Suspense>
            )}
        </Box>
    );
}