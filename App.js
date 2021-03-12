import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Loading from "./screens/Loading";
import Weather from "./screens/Weather";

const OPENWEATHER_KEY = "60d8667e9ab7abbc402a250eca13f4aa";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  getCoords = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      return { latitude, longitude };
    } catch {
      alert("I believe you just take a mistake.");
    }
  };
  getWeatherByCoords = async ({ latitude, longitude }) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_KEY}&units=metric`;
    const {
      data: { weather },
    } = await axios.get(url);
    return weather[0].main;
  };
  async componentDidMount() {
    const coords = await this.getCoords();
    const weather = await this.getWeatherByCoords(coords);
    this.setState({ isLoading: false, weather });
  }
  render = function () {
    const { isLoading, weather } = this.state;
    return isLoading ? <Loading /> : <Weather weather={weather} />;
  };
}
