import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
dayjs.locale('fr')

export function App() {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </LocalizationProvider>
};
