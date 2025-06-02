import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MarketingSuiteScreen from '../screens/MarketingSuiteScreen';
import { useTheme } from '../contexts/ThemeContext';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import MarketingSuiteDetailPageRealEstate from '../screens/MarketingSuite/MarketingSuiteDetailPageRealEstate';
import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailsPage from '../screens/CourseDetailPage';
import StartCourseScreen from '../screens/StartCourseScreen';
import StartCourseInfoScreen from '../screens/StartCourseInfoScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizResultsScreen from '../screens/QuizResultsScreen';
import { RootStackParamList } from './navigationTypes';
import BottomTabNavigator from '../screens/BottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { theme } = useTheme();

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.black }}>
      {/* Set StatusBar to black background with light-content (white icons/text) */}
    <StatusBar 
        barStyle="light-content" 
        backgroundColor="#000000"  // Pure black
        translucent={false}       // Ensures the background color is solid
      />
      <NavigationContainer>
  
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false 
          }}
        >
           
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{ title: 'Planet Wealth' }}
          />
      
          <Stack.Screen 
          name="MarketingSuite" 
          component={MarketingSuiteScreen}
          options={{ title: 'Marketing Suite' }} />

          <Stack.Screen 
          name="MarketingSuiteDetailPageRealEstate" 
          component={MarketingSuiteDetailPageRealEstate}
          options={{ title: 'Marketing Suite Detail' }} />

          <Stack.Screen 
          name="CoursesScreen" 
          component={CoursesScreen}
          options={{ title: 'Courses' }} />

          <Stack.Screen 
          name="CourseDetailsPage" 
          component={CourseDetailsPage}
          options={{ title: 'Course Details' }} />

          <Stack.Screen 
          name="StartCourseScreen" 
          component={StartCourseScreen}
          options={{ title: 'Start Course' }} />

          <Stack.Screen 
          name="StartCourseInfoScreen" 
          component={StartCourseInfoScreen}
          options={{ title: 'Start Course Information' }} />

          <Stack.Screen 
          name="QuizScreen" 
          component={QuizScreen}
          options={{ title: 'QuizScreen' }} />

          <Stack.Screen 
            name="QuizResultsScreen" 
            component={QuizResultsScreen}
            options={{ title: 'Quiz Results' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;