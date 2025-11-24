import { createTheme } from '@mui/material/styles';

const typography = {
    fontFamily: '"Inter", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1rem', fontWeight: 600 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
}

export const theme = createTheme({
        typography,
        palette: {
            mode: 'dark',
            background: {
                default: '#333333',
            },
        },
    });