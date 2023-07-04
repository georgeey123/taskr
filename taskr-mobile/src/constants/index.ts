import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;

export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const API_URL = process.env.API_URL || "http://localhost:3030";
