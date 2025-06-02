import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import { Image, View } from 'react-native';

// Define your tab param list
type BottomTabParamList = {
  HomeTab: undefined;
  CoursesTab: undefined;
  CalendarTab: undefined;
  MessagesTab: undefined;
  HelpTab: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          switch (route.name) {
          case 'HomeTab':
              iconSource = require('../assets/icons/house.png');
              break;
            case 'CoursesTab':
              iconSource = require('../assets/icons/library-big.png');
              break;
            case 'CalendarTab':
              iconSource = require('../assets/icons/calendar-check.png');
              break;
            case 'MessagesTab':
              iconSource = require('../assets/icons/messages-square.png');
              break;
            case 'HelpTab':
              iconSource = require('../assets/icons/circle-help.png');
              break;
          }
          return (
            <View style={{ 
              width: '100%', 
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10
            }}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#000000' : '#888888',
                }}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 62,
          borderTopWidth: 1,
          borderTopColor: '#E2E4F4',
          backgroundColor: 'white',
        },
        headerShown: false,
      })}
    >
      {/* Move screens here as direct children */}
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="CoursesTab" component={CoursesScreen} />
      <Tab.Screen name="CalendarTab" component={CoursesScreen} />
      <Tab.Screen name="MessagesTab" component={CoursesScreen} />
      <Tab.Screen name="HelpTab" component={CoursesScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;