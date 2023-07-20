import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const SCREEN_WIDTH = Dimensions.get("window").width;

export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const API_URL =
  Constants.expoConfig.extra?.API_URL || "http://192.168.43.182:3030/api";

export const TASKR_AUTH = "taskr-auth";
