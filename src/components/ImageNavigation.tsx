import { Box, IconButton, MobileStepper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface ImageNavigationProps {
    activeIndex: number;
    maxSteps: number;
    handleNext: () => void;
    handleBack: () => void;
}

export default function ImageNavigation(props: ImageNavigationProps) {
    return (<Box>
            {/* LEFT ARROW */}
            <IconButton
                onClick={props.handleBack}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "rgba(149, 148, 148, 0.5)" },
                }}
            >
                <KeyboardArrowLeft />
            </IconButton>

            {/* RIGHT ARROW */}
            <IconButton
                onClick={props.handleNext}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "rgba(149, 148, 148, 0.5)" },
                }}
            >
                <KeyboardArrowRight />
            </IconButton>

            {/* DOT INDICATORS */}
            <MobileStepper
                steps={props.maxSteps}
                position="static"
                activeStep={props.activeIndex}
                sx={{
                    background: "transparent",
                    justifyContent: "center",
                    mt: 1,
                    "& .MuiMobileStepper-dot": {
                        backgroundColor: "rgba(149, 148, 148, 0.5)",
                        width: 8,
                        height: 8,
                    },
                    "& .MuiMobileStepper-dotActive": {
                        backgroundColor: "rgba(255, 255, 255, 0.59)",
                        width: 10,
                        height: 10,
                    },
                }}
                nextButton={null}
                backButton={null}
            />
        </Box> 
    );
}