import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    weatherPaper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 30px"
    }
})

function WeatherDetails({ location, weather }) {
    const classes = useStyles()

    return (
        <Container maxWidth={false} style={{ marginTop: "50px" }}>
            <Container maxWidth="xs">
                <Paper className={ classes.weatherPaper } raised="true" style={{ backgroundColor: "transparent" }}>
                    <Typography variant="h5" gutterBottom>{ location.city }, { location.country }</Typography>
                    <img src={`http://openweathermap.org/img/w/${weather.iconId}.png`} />
                    <Typography variant="h6" gutterBottom>{ Math.round(weather.currentTemp) }&deg;C</Typography>
                    <Typography variant="overline" gutterBottom>{ weather.description }</Typography>
                </Paper>
            </Container>
        </Container>
    )
}

export default WeatherDetails;