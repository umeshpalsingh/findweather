import React from 'react';
import { Card, Typography, Chip, Box } from "@mui/material";
import SunLogo from "../images/Logo.svg";

function Instruction() {
    return (
        <Card elevation={0} className="instruction-card"
            sx={{
                backgroundColor: '#111827',
                borderRadius: '20px'
            }}>
            <div>
                <img alt='Umesh Pal Singh' src={SunLogo}
                    style={{ width: "200px", height: "200px", borderRadius: "100px", margin: '20px auto', filter: 'drop-shadow(0 0 5px #eee)' }} />
            </div>
            <Typography align='center'
                sx={{
                    fontFamily: 'Poppins, monospace',
                    color: '#eee',
                    fontSize: '1.2rem',
                    mb: '20px'
                }}>
                Find Weather
            </Typography>
            <Box sx={{
                margin: '20px auto 10px',
                padding: '20px 0'
            }}>
                <Typography align='left'
                    sx={{ color: '#eee', fontFamily: 'Poppins, Lato', fontSize: '.85rem', padding: '10px' }}>
                    Instruction : click on the input and enter the city/state/country name to find the weather information.<br />Note : please do not make any typing mistakes for better results.
                </Typography>
            </Box>
            <Box>
                <Chip align='center' label="Developed with ❤️ by Umesh Pal Singh"
                    sx={{
                        fontSize: '.8rem',
                        color: '#eee',
                        fontFamily: 'Poppins'
                    }} />
            </Box>
        </Card>
    );
};


export default Instruction;