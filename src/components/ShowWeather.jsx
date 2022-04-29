import React from 'react';
import { Box, Card, CardContent, Typography, Grid, styled, Stack, Chip, Zoom } from "@mui/material";
import {
    WbTwilightRounded,
    AirRounded,
    EggRounded,
    VisibilityRounded,
    AvTimerRounded,
    AcUnitRounded
} from "@mui/icons-material";

const Item = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    textAlign: "left",
    fontFamily: 'Poppins',
    fontSize: '.8rem'
}));

const ShowWeather = ({ data }) => {

    const temperature = Math.round(data.main?.temp);

    const icon = data.weather[0]?.icon;
    const night = icon.includes('n');

    const sunrise_timestamp = data.sys?.sunrise;
    const sunrise_date = new Date(sunrise_timestamp * 1000);
    const sunrise_hours = sunrise_date.getHours();
    const sunrise_minutes = sunrise_date.getMinutes();
    const sunrise_Time = sunrise_hours + ":" + sunrise_minutes;

    const sunset_timestamp = data.sys?.sunset;
    const sunset_date = new Date(sunset_timestamp * 1000);
    const sunset_hours = sunset_date.getHours();
    const sunset_minutes = sunset_date.getMinutes();
    const sunset_Time = sunset_hours + ":" + sunset_minutes;

    const visibility = (data.visibility / 1000);

    return (
        <Zoom in>
            <Card className='weather-card' elevation={4}
                sx={{ backgroundColor: "#111827", borderRadius: "20px" }}>
                <CardContent>
                    <Typography align='center' variant='h1'
                        sx={{ color: "#eee", fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "500" }}>
                        {data.name}, {data.sys?.country}
                    </Typography>
                    <Typography gutterBottom align='center' variant='h2' sx={{ fontSize: "4rem", color: "#eee", fontWeight: "700", fontFamily: "lato", margin: '30px auto' }}>
                        {temperature}°C
                    </Typography>
                    <Box textAlign='center'>
                        <Chip variant='outlined' label={data.weather[0]?.description} sx={{ color: "#eee", fontFamily: 'Poppins', fontSize: '1rem' }} />
                    </Box>
                    <Box sx={{ flexGrow: 1, margin: '30px auto' }}>
                        <Grid container rowSpacing={2} columnSpacing={4} direction="row">
                            <Grid item xs={6}>
                                <Item>
                                    <Stack direction='row' spacing={2}>
                                        <WbTwilightRounded fontSize='large' />
                                        <Grid direction='column'>
                                            <Box>{night ? "Sunrise" : "Sunset"}</Box>
                                            <Box>{night ? sunrise_Time : sunset_Time} {night ? "AM" : "PM"}</Box>
                                        </Grid>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Stack direction='row' spacing={2}>
                                        <AcUnitRounded fontSize='large' />
                                        <Grid direction='column'>
                                            <Box>Feels Like</Box>
                                            <Box>{data.main.feels_like}°</Box>
                                        </Grid>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Stack direction='row' spacing={2}>
                                        <AirRounded fontSize='large' />
                                        <Grid direction='column'>
                                            <Box>Wind</Box>
                                            <Box>{data.wind?.speed} km/h</Box>
                                        </Grid>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Stack direction='row' spacing={2}>
                                        <EggRounded fontSize='large' />
                                        <Grid direction='column'>
                                            <Box>Humidity</Box>
                                            <Box>{data.main?.humidity}%</Box>
                                        </Grid>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Stack direction='row' spacing={2}>
                                        <VisibilityRounded fontSize='large' />
                                        <Grid direction='column'>
                                            <Box>Visibility</Box>
                                            <Box>{visibility} km</Box>
                                        </Grid>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Stack direction='row' spacing={2}>
                                        <AvTimerRounded fontSize='large' />
                                        <Grid direction='column'>
                                            <Box>Pressure</Box>
                                            <Box>{data.main?.pressure} mb</Box>
                                        </Grid>
                                    </Stack>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Zoom>
    )
}

export default ShowWeather;