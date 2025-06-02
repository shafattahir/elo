import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// types.ts
export type RootStackParamList = {
  MainTabs: undefined;
  MarketingSuite: undefined;
  CoursesScreen: undefined;
  // Add other screens here
};

export type BottomTabParamList = {
  Home: undefined;
  Courses: undefined;
  Calendar: undefined;
  Messages: undefined;
  Help: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;