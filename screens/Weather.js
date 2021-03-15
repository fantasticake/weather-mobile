import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherConf = {
  Thunderstorm: {
    icon: "weather-lightning",
    backgroundColor: ["#234E70", "#FBF8BE"],
    description: "Just eat cake in home",
  },
  Drizzle: {
    icon: "water-outline",
    backgroundColor: ["#013DC4", "#E2D3F3"],
    description: "I don't want to go out.",
  },
  Rain: {
    icon: "weather-rainy",
    backgroundColor: ["#013DC4", "#E2D3F3"],
    description: "Do you want to get a cold?",
  },
  Snow: {
    icon: "snowflake",
    backgroundColor: ["#8AAAE5", "#FCF6F5"],
    description: "Wow, it's snow!",
  },
  Clear: {
    icon: "weather-sunny",
    backgroundColor: ["#00B1D2", "#FDDB27"],
    description: "Why don't you go on a picnic with cake?",
  },
  Clouds: {
    icon: "weather-cloudy",
    backgroundColor: ["#0063B2", "#9CC3D5"],
    description: "Feels cloudy..",
  },
  Haze: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Mist: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Smoke: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Dust: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Fog: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Sand: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Dust: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Ash: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Squall: {
    icon: "weather-fog",
    backgroundColor: ["#191919", "#BD8F4D"],
    description: "Hard to see",
  },
  Tornado: {
    icon: "weather-tornado",
    backgroundColor: ["#243665", "#8BD8BD"],
    description: "You will be blown away.",
  },
};

export default function Weather({ weather, subWeather }) {
  const weatherObj = weatherConf[weather];
  return (
    <LinearGradient
      colors={weatherObj.backgroundColor}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.iconTitleBox}>
          <MaterialCommunityIcons
            name={weatherObj.icon}
            color="white"
            size={100}
          />
          <Text style={styles.title}>{weather}</Text>
        </View>
        <View style={styles.subtitleDescriptionBox}>
          <Text style={styles.subtitle}>{subWeather}</Text>
          <Text style={styles.description}>{weatherObj.description}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconTitleBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitleDescriptionBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
});
