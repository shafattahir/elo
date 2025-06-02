import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MainLayout from './MainLayout';
import DrawerScreen from './DrawerScreen';
import { Modal } from 'react-native';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleNavigation = (title: string) => {
    if (title === "Marketing Suite") {
      navigation.navigate("MarketingSuite");
    }
    else if (title === "Course") {
      navigation.navigate("CoursesScreen");
    }
  };
  

  const sections = [
    {
      title: "Course",
      description: "Quick overview of enrolled courses with progress.",
      icon: require('../assets/icons/courses.png'),
    },
    {
      title: "Matchmaker Hub",
      description: "Shortcut to create/view matchmaking requests.",
      icon: require('../assets/icons/matchmaker_hub.png'),
    },
    {
      title: "Account/Profile",
      description: "Edit account details and profile info",
      icon: require('../assets/icons/account.png'),
    },
    {
      title: "Marketing Suite",
      description: "All marketing materials included currently to launch.",
      icon: require('../assets/icons/marketing_suite.png'),
    },
    {
      title: "Community",
      description: "Forums & Chat",
      icon: require('../assets/icons/community.png'),
    },
    {
      title: "Support",
      description: "FAQ, Contact Form and Knowledge Base",
      icon: require('../assets/icons/support.png'),
    },
    {
      title: "Event Calendar",
      description: "Upcoming events (bootcamps, masterclasses, BBI trainings, etc.).",
      icon: require('../assets/icons/event_calendar.png'),
    },
    {
      title: "Resources",
      description: "Important docs/guides (video library, playbooks, Launch SOP, etc.)",
      icon: require('../assets/icons/resources.png'),
    },
  ];

return (
<MainLayout onDrawerPress={() => setDrawerVisible(true)}>
      {/* Drawer Modal */}
      <Modal
        visible={drawerVisible}
        transparent={true}
        animationType="none" // We handle animation ourselves
        onRequestClose={toggleDrawer}
      >
        <DrawerScreen 
          closeDrawer={toggleDrawer} 
          visible={drawerVisible} 
        />
      </Modal>

      {/* Main Content */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          <Text style={[styles.welcomeText, { color: theme.colors.textColorTitle }]}>
            Welcome back, Sienna
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            All the necessary data on the main screen.
          </Text>
          
          {sections.map((section, index) => (
            <TouchableOpacity
              onPress={() => handleNavigation(section.title)}
              key={index}
              style={[
                styles.gridItem,
                {
                  backgroundColor: theme.colors.cardBackground,
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <View style={styles.row}>
                <Image source={section.icon} style={styles.gridIcon} resizeMode="contain" />
                <Text style={[styles.gridTitle, { color: theme.colors.textColorTitle }]}>
                  {section.title}
                </Text> 
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
};




const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    borderRadius: 16,
    margin: 20,
    backgroundColor: '#FFFFFF'
  },
  topHeader: {
    height: 58,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',   // Horizontal layout
    justifyContent: 'space-between',  // Distribute space between items
    alignItems: 'center',   // Vertically center items
    width: '100%', 
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: 'Magistral Medium',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 26,
    fontFamily: 'Inter Regular',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 6,
    position: 'absolute',
    right: 16,
      top: 10,
    bottom: 10,
  },
      drawer: {
    width: 32,
    height: 32,
    borderRadius: 6,
    position: 'absolute',
    left: 16,
      top: 10,
    bottom: 10,
  },
  logo: {
    width: 150,
    height: 34,

    top: 10,
    bottom: 10,
     position: 'absolute',
    left: '50%',
    transform: [{ translateX: -60 }],
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '100%',
    height: 64,
    padding: 16,
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E4F4',
  },
  gridIcon: {
    width: 32,
    height: 32,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginStart: 8,
    fontFamily: 'Graphik Medium',
  },
  gridDescription: {
    fontSize: 14,

    lineHeight: 18,
    fontFamily: 'Inter Regular',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 62,
    borderWidth: 1,
    borderTopColor: '#E2E4F4',
  },
  navItem: {
  height:22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navAvatar: {
    width: 36,
    height: 37,
    borderRadius: 20,
  },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // adjust as needed
  },
    modalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default HomeScreen;

