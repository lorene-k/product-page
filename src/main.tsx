import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx'
import { theme } from './theme/theme.ts'
import CssBaseline from "@mui/material/CssBaseline";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
        </QueryClientProvider>
    </StrictMode>,
)
