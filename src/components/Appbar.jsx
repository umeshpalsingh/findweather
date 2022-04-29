import React from "react";
import { Box, AppBar, Toolbar, IconButton, Typography, } from "@mui/material";
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

function Appbar() {

    return (
        <Box>
            <AppBar className="appbar" elevation={0} position="static" sx={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    <IconButton edge="start">
                        <NightsStayRoundedIcon sx={{ color: '#eee', filter: 'drop-shadow(0 0 10px #eee)', fontSize: "2.5rem" }} />
                    </IconButton>
                    <Typography variant="h1" sx={{ fontSize: "1.2rem", fontFamily: "Poppins", fontWeight: '700', flexGrow: 1 }}>
                        FindWeather
                    </Typography>
                    <a href="https://github.com/umeshpalsingh" target='_blank' rel="noreferrer">
                        <IconButton sx={{ color: "#eee", filter: 'drop-shadow(0 0 5px #eee)' }} >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Appbar;