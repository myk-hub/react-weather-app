import React, { SyntheticEvent, useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import WeatherComponent from './WeatherInfoComponent';
import CityComponent from './CityComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

type IProps = {
  email: string;
}

const MOCK_ID = 'fe4feefa8543e06d4f3c66d92c61b69c';

const Home = ({ email }: IProps) => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/signup');
    }
  }, [email])

  const fetchWeather = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MOCK_ID}`,
      );
      updateWeather(response.data);
    } catch (e) {
      alert("No city found!")
    }
  };

  return (
    <Container>
      <AppLabel>
        <Avatar></Avatar>{email}
      </AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default Home;


