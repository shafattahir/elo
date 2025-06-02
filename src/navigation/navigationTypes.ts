// navigationTypes.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  MarketingSuite: undefined;
  MarketingSuiteDetailPageRealEstate: undefined;
  CoursesScreen: undefined;
  CourseDetailsPage: undefined;
  StartCourseScreen: undefined;
  StartCourseInfoScreen: undefined;
  QuizScreen: undefined;
  QuizResultsScreen: { // Keep consistent with your screen name
    questions: Question[];
    selectedAnswers: SelectedAnswers;
  };
};

export type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

export type SelectedAnswers = {
  [key: number]: number;
};