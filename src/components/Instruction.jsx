import React from 'react';
import { Card, Typography, Chip, Grow, Box } from "@mui/material";
import SunLogo from "../Logo.svg";

function Instruction() {
    return (
        <Grow in>
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
                    borderTop: '1px solid #678',
                    margin: '20px auto 0',
                    backgroundColor: '#0f2844',
                    padding: '20px 0'
                }}>
                    <Typography align='left'
                        sx={{ color: '#eee', fontFamily: 'Poppins, Lato', fontSize: '.85rem', padding: '0 10px' }}>
                        Instruction : click on the input and enter the city/state/country name to find the weather information.<br />
                        Note : please do not make any typing mistakes for better results.
                    </Typography>
                </Box>
                <Box sx={{ borderTop: '1px solid #678' }}>
                    <Chip align='center' label="Developed with ❤️ by Umesh Pal Singh"
                        sx={{
                            fontSize: '.8rem',
                            color: '#eee',
                            fontFamily: 'Poppins'
                        }} />
                </Box>
            </Card>
        </Grow>
    );
};


export default Instruction;