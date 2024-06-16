import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Abacus } from "../svg-icons/abacus";
import { useCallback } from "react";

export function PageLayout() {
    const navigate = useNavigate()
    const handleGoHome = useCallback(() => { navigate('/') }, [])
    const handleGoDatetime = useCallback(() => { navigate('/datetime') }, [])
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleGoHome}
                        >
                            <Abacus />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Calculator
                        </Typography>
                        <Button color="inherit" onClick={handleGoDatetime}>Datetime</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ p: 2 }}>
                <Outlet />
            </Box>
        </>
    );
};

export default PageLayout;
