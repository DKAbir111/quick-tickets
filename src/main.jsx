import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: '"Product Sans", sans-serif',
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
        <CssBaseline />
   <RouterProvider router={router} />
   </ThemeProvider>
  </StrictMode>,
)
