import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export function PageLayout() {


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
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Calculator
                        </Typography>
                        
                        <Button color="inherit">Datetime</Button>                        
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
};

export default PageLayout;
