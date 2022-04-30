import React from 'react';
import { Card, Typography, Chip } from "@mui/material";
import SunLogo from "../images/Logo.svg";

function Instruction() {
    return (
        <Card elevation={4} className="instruction-card"
            sx={{
                backgroundColor: '#0D1117',
                borderRadius: '20px'
            }}>
            <div>
                <img alt='Umesh Pal Singh' src={SunLogo} className="Logo" />
            </div>
            <Chip
                label="Find Weather"
                variant='outlined'
                sx={{ color: 'common.white', mt: '5px', fontFamily: 'Poppins' }}
                component='a'
                href='https://umeshpalsingh.github.io/findweather/'
                clickable />
            <Typography align='center' component='p' variant='p'
                sx={{ color: '#eee', fontFamily: 'Poppins, Lato', fontSize: '.85rem', padding: '10px', maxWidth: '95%', margin: '20px auto' }}>
                Click on the input and enter the city/state/country name to find the weather information. Please do not make any typing mistakes for better results.
            </Typography>
            <Typography
                variant='body1'
                component='p'
                sx={{ color: 'common.white', fontSize: '.7rem', fontFamily: 'Poppins', margin: '10px auto' }}>
                Developed by Umesh Pal Singh
            </Typography>
        </Card>
    );
};


export default Instruction;