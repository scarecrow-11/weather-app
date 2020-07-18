import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Button } from '@material-ui/core';
import { getCurrentWeather } from '../store/actions/weatherActions';

const useStyles = makeStyles({
    searchContainer: {
        padding: "30px 30px",
        justifyContent: "center",
        alignItems: "center"
    },
    
    searchForm: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        "& *": {
            margin: "0px 2px"
        },

        "& button": {
            textTransform: "capitalize",
            marginTop: "12px"
        }
    }
})

function SearchBox({ getCurrentWeather }) {
    const classes = useStyles()
    const [cityInput, setCityInput] = useState('')
    const [countryInput, setCountryInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        getCurrentWeather({ city: cityInput, country: countryInput})
    }

    return (
        <Container className={ classes.searchContainer } maxWidth={false}>
            <form className={ classes.searchForm } noValidate autoComplete="off" onSubmit={ handleSubmit }>
                <TextField required id="city-input" label="City" variant="standard" onChange={e => setCityInput(e.target.value)} />
                <TextField id="country-input" label="Country" variant="standard" onChange={e => setCountryInput(e.target.value)} />
                <Button type="submit" variant="contained" color="primary" size="medium" disableElevation={true}>Get Weather</Button>
            </form>
        </Container>
    )
}

export default SearchBox;