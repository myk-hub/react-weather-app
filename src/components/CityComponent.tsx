import React from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
`;

const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const CityComponent = ({ updateCity, fetchWeather }: {
  updateCity: Function; fetchWeather: any;
}) => {
  return (
    <>
      <WelcomeWeatherLogo src={"/react-weather-app/icons/perfect-day.svg"} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <TextField 
            id="outlined-basic"
            label="City"
            variant="standard"
            placeholder="Enter your city"
            onChange={(e: any) => updateCity(e.target.value)}
          />
        <Button startIcon={<LocationSearchingIcon />} type={"submit"}>Search</Button>
      </SearchBox>
    </>
  );
};
export default CityComponent;