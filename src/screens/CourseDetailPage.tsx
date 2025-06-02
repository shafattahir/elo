import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Route } from '@react-navigation/native';
import MainLayout from './MainLayout';
import { Modal } from 'react-native';
import DrawerScreen from './DrawerScreen';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const CourseDetailsPage: React.FC<Props> = ({ navigation }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'info', title: 'Overview' },
    { key: 'content', title: 'Lessons' },
  ]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

    const [drawerVisible, setDrawerVisible] = useState(false);
  
    const toggleDrawer = () => {
      setDrawerVisible(!drawerVisible);
    };

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    renderIndicator={(indicatorProps) => {
      const tabWidth = indicatorProps.getTabWidth(indicatorProps.navigationState.index);
      return (
        <View style={{
          backgroundColor: '#0091CD',
          height: 2,
          borderRadius: 3,
          width: tabWidth - 24,
          marginLeft: 12,
          left: tabWidth * indicatorProps.navigationState.index,
          bottom: 0, // Positions indicator at bottom
          position: 'absolute',
        }}/>
      );
    }}
    indicatorStyle={{ height: 0 }} // Disable default indicator
    style={{ 
      backgroundColor: 'white',
      height: 48, // Fixed height for consistent layout
      justifyContent: 'center', // Vertically center tab labels
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    }}
    labelStyle={{
      color: '#181D27',
      fontFamily: 'Graphik Medium',
      fontSize: 14,
      marginBottom: 12, // Creates space between text and indicator
      includeFontPadding: false, // Removes extra font padding
    }}
    activeColor="#0091CD"
    inactiveColor="#525252"
    pressOpacity={0.7}
    tabStyle={{
      paddingVertical: 0, // Let labelStyle handle vertical spacing
    }}
  />
);

  // First Tab - Course Information
const InfoTab = () => (
  <View style={styles.tabContainer}>
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>  
        <View style={styles.header}>
          <View>
            <Image 
              source={require('../assets/icons/banner1.png')} 
              style={styles.bannerImage} 
            />
          </View>
          <View style={styles.spacer}/>
          <Text style={styles.titleText}>Real Estate (Buy and Hold/ Rental)</Text>
          <View style={styles.spacer}/>
          <Text style={styles.BodyMedium}>
            You want to invest in rental properties but aren't sure where to start? You've come to the right place! 
            This complete course about Real Estate Buy and Hold/ Rental is perfect for newcomers and delivers essential 
            knowledge and resources for initiating your real estate investment path.
          </Text>
        </View>
      </View>

      {/* Course Includes Section */}
      <View style={styles.card}>
        <View style={styles.spacerSmall}/>
        <Text style={styles.headingMedium}>Course Includes:</Text>
        <View style={styles.spacer}/>
        <View style={styles.checklistItem}>
          <Image source={require('../assets/icons/book-open.png')} style={styles.smallIcon} />
          <Text style={styles.bodyRegular}>5 sections</Text>
        </View>
        <View style={styles.checklistItem}>
          <Image source={require('../assets/icons/book.png')} style={styles.smallIcon} />
          <Text style={styles.bodyRegular}>30 lessons</Text>
        </View>
        <View style={styles.checklistItem}>
          <Image source={require('../assets/icons/gamepad-2.png')} style={styles.smallIcon} />
          <Text style={styles.bodyRegular}>5 quizzes</Text>
        </View>
        <View style={styles.checklistItem}>
          <Image source={require('../assets/icons/file-down.png')} style={styles.smallIcon} />
          <Text style={styles.bodyRegular}>Resources</Text>
        </View>
        
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.bodySmall}>Rental</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.bodySmall}>Real Estate</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.bodySmall}>Rental Properties</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.bodySmall}>Buy and Hold</Text>
          </View>
        </View>
      </View>

      <View style={styles.spacer}/>
      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => navigation.navigate("StartCourseScreen")}
      >
        <Text style={[styles.titleSmall, {color:'white'}]}>Start Course</Text>
      </TouchableOpacity>
      <View style={styles.bottomSpacer}/>
    </ScrollView>
  </View>
);


  // Second Tab - Course Content
  const ContentTab = () => (
    <View style={styles.tabContent}>      
      {/* Course Content Section */}
      <View style={styles.cardBlue}>
        
        {/* How to Locate Section */}
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => toggleSection('locate')}
        >
          <View style={styles.row}>
          <Image
            source={require('../assets/icons/location.png')}
            style={[styles.toggleIcons]}
          />
          <Text style={styles.headingMedium}>How to Locate</Text>
          </View>
          <Image
            source={require('../assets/icons/arrow_down.png')}
            style={[styles.arrowBlue, { transform: [{ rotate: expandedSection === 'locate' ? '180deg' : '0deg' }] }]}
          />
        </TouchableOpacity>
        
        {expandedSection === 'locate' && (
          <View style={styles.sectionContent}>
            <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/book.png')}
                  style={[styles.leftItem, { tintColor: '#1565FF' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>Introduction to Real Estate (Buy and Hold/Rental)</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>

        <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/book.png')}
                 style={[styles.leftItem, { tintColor: '#1565FF' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>Locating Your Real Estate (Buy and Hold/Rental) Investment</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>         

            <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/gamepad-2.png')}
              style={[styles.leftItem, { tintColor: '#1565FF' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>QUIZ - Locating Your Real Estate (Buy and Hold/Rental) Investment</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>
        
          </View>
        )}
      </View>

      <View style={styles.cardGreen}>

        {/* How to Locate Section */}
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => toggleSection('section2')}
        >
          <View style={styles.toggleContainer}>
          <Image
            source={require('../assets/icons/cart.png')}
            style={[styles.toggleIcons,]}/>
          <Text style={styles.headingMedium}>How to Purchase</Text>
          </View>
          <Image
            source={require('../assets/icons/arrow_down.png')}
            style={[styles.arrowGreen, { transform: [{ rotate: expandedSection === 'section2' ? '180deg' : '0deg' }] }]}
          />
        </TouchableOpacity>
        
        {expandedSection === 'section2' && (
    <View style={styles.sectionContent}>
            <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/book.png')}
                  style={[styles.leftItem, { tintColor: '#32AE83' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>Introduction to Real Estate (Buy and Hold/Rental)</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>

        <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/book.png')}
                 style={[styles.leftItem, { tintColor: '#32AE83' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>Locating Your Real Estate (Buy and Hold/Rental) Investment</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>         

            <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/gamepad-2.png')}
              style={[styles.leftItem, { tintColor: '#32AE83' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>QUIZ - Locating Your Real Estate (Buy and Hold/Rental) Investment</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>
        
          </View>
        )}
      </View>

      <View style={styles.cardYellow}>

        {/* How to Locate Section */}
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => toggleSection('section3')}
        >
          <View style={styles.row}>
          <Image
            source={require('../assets/icons/currency.png')}
            style={[styles.toggleIcons,]}
          />
          <Text style={styles.headingMedium}>How to Finance</Text>
          </View>
          <Image
            source={require('../assets/icons/arrow_down.png')}
            style={[styles.arrowYellow, { transform: [{ rotate: expandedSection === 'section3' ? '180deg' : '0deg' }] }]}
          />
        </TouchableOpacity>
        
        {expandedSection === 'section3' && (
    <View style={styles.sectionContent}>
            <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/book.png')}
                  style={[styles.leftItem, { tintColor: '#FCBD38' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>Introduction to Real Estate (Buy and Hold/Rental)</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>

        <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/book.png')}
                 style={[styles.leftItem, { tintColor: '#FCBD38' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>Locating Your Real Estate (Buy and Hold/Rental) Investment</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>         

            <View style={styles.toggleContainer}>
              <Image
                  source={require('../assets/icons/gamepad-2.png')}
              style={[styles.leftItem, { tintColor: '#FCBD38' }]}
                />
              <Text style={[styles.middleTextContainer, styles.headingSmall]}>QUIZ - Locating Your Real Estate (Buy and Hold/Rental) Investment</Text>
              <Image
              source={require('../assets/icons/play_small_blue.png')}
              style={[styles.rightItem]}/>
          </View>
        
          </View>
        )}

      </View>
    </View>
  );

  const renderScene = SceneMap({
    info: InfoTab,
    content: ContentTab,
  });

  // Replace your TabView implementation with this:
const CustomTabView = () => {
  return (
    <View style={{flex: 1}}>
      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {routes.map((route, i) => (
          <TouchableOpacity
            key={route.key}
            onPress={() => setIndex(i)}
            style={[
              styles.tabItem,
              index === i && styles.tabItemActive
            ]}>
            <Text style={[
              styles.tabText,
              index === i && styles.tabTextActive
            ]}>
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Content */}
      <View style={{flex: 1}}>
        {index === 0 ? <InfoTab /> : <ContentTab />}
      </View>
    </View>
  );
};

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

      {/* Breadcrumbs - Above the tabs */}
   
     <View style={styles.spacer}></View>
        <View style={styles.breadcrumbs}>
             <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={require('../assets/icons/arrow-left.png')} style={styles.rightIcon} />
             </TouchableOpacity>
       
          <Text style={styles.welcomeText}>Real Estate (Buy and Hold/Rental)</Text>
        </View>

        {/* Tab View */}
        <CustomTabView/>
   
      </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
    drawer: {
    width: 32,
    height: 32,
    borderRadius: 6,
    position: 'absolute',
    right: 20,
      top: 10,
    bottom: 10,
  },
    logo: {
    width: 150,
    height: 34,
    position: 'absolute',
    left: 20,
    top: 10,
    bottom: 10,
  },
  banner: {
    backgroundColor: '#000',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
    notifications: {
    width: 32,
    height: 32,
    borderRadius: 6,
    position: 'absolute',
    right: 60,
      top: 10,
    bottom: 10,
  },
  row: {
    alignSelf: 'flex-start', // Allows width to shrink to content
    flexShrink: 1,          // Allows shrinking smaller than content
    flexWrap: 'wrap',  
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // adjust as needed
  },
topHeader: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 6,
    padding: 10,
    borderTopEndRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopStartRadius: 16,
  },
  breadcrumbs: {
    marginBottom: 16,
       flexDirection: 'row',
       alignItems: 'center',
  },
  breadcrumbText: {
    color: '#666',
    fontSize: 12,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
    card: {
    backgroundColor: '#F4F5FE',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  cardBlue: {
    backgroundColor: '#E5EFFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
    cardYellow: {
    backgroundColor: '#FFF6D1',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
    cardGreen: {
    backgroundColor: '#E1FCEB',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
    welcomeText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Magistral Medium',
    marginBottom: 4,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 16,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden', // This is crucial for rounded corners on scroll
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  checklistItem: {
    flexDirection: 'row',  // horizontal layout
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 8,
    fontSize: 16,
  },
  checklistText: {
    fontSize: 14,
    color: '#555',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    marginBottom: 12,
  },
  tag: {
  
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    borderRadius: 16,
    marginBottom: 8,
    backgroundColor: '#E2E4F4'
  },
  tagText: {
    fontSize: 12,
    color: '#555',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },
  startButton: {
    backgroundColor: '#0091CD',
    borderRadius: 8,
  marginBottom: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
    tabContainer: {
    flex: 1, // Important for ScrollView to take full height
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32, // Extra space at bottom
  },
  bottomSpacer: {
    height: 20, // Additional space at the bottom
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  arrow: {
    fontSize: 14,
    color: '#666',
  },
  sectionContent: {
    paddingTop: 8,
  },
  lesson: {
    fontSize: 14,
    color: '#555',
    paddingVertical: 8,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
    centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
bannerImage: {
    width: "100%",
    height: 160,
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  smallIcon: {
    width: 18,
    height: 18,
    marginEnd: 8
  },
  quiz: {
    color: '#4a90e2',
    fontWeight: 'bold',
  },
    toggleIcons:{
    marginEnd: 12,
    width: 32,
    height: 32,
  },
  arrowBlue:{
    tintColor: '#1565FF',
    width: 12,
    height: 8,
  },
    iconsBlue:{
    tintColor: '#1565FF',
    width: 20,
    height: 20,
    marginEnd: 8,
  },
    arrowGreen:{
    tintColor: '#32AE83',
    width: 12,
    height: 8,
  },
    arrowYellow:{
    tintColor: '#FCBD38',
    width: 12,
    height: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically center
    marginVertical: 10,
  },
  leftItem: {
    marginRight: 10, // Space between left item and text
  },
  middleTextContainer: {
    flex: 1, 
  },
  middleText: {
    // Add your text styling here
  },
  rightItem: {
    width:17,
    height:17,
    tintColor: '#666B96',
    marginLeft: 10, // Space between text and right item
  },
bodyRegular: {
    fontSize: 14,
    color:'#525252',
    fontWeight: '400',
    fontFamily: 'Graphik Regular',
  },

  BodyMedium: {
    fontSize: 16,
    color:'#525252',
    fontWeight: '400',
    fontFamily: 'Graphik Regular',
  },

  bodySmall: {
    fontSize: 12,
    color:'#45496F',
    fontWeight: '400',
    fontFamily: 'Graphik Regular',
  },

  headingRegular: {
    fontSize: 14,
    color:'#181D27',
    fontWeight: '500',
    fontFamily: 'Graphik Medium',
  },

  headingMedium: {
    fontSize: 16,
    color:'#181D27',
    fontWeight: '500',
    fontFamily: 'Graphik Medium',
  },

  headingSmall: {
    fontSize: 12,
    color:'#181D27',
    fontWeight: '500',
    fontFamily: 'Graphik Medium',
  },

      titleText: {
    fontSize: 18,
    fontFamily: 'Magistral Medium',
     fontWeight: '500',
    marginBottom: 4,
  },

      titleSmall: {
    fontSize: 14,
    fontFamily: 'Magistral Medium',
     fontWeight: '500',
    marginBottom: 4,
  },
       spacer: {
    height : 20,
  },
         spacerSmall: {
    height : 10,
  },
       rightIcon: {
    height : 24,
    width : 24,
    marginStart: 16, 
    marginEnd: 8,
  },
    tabContent: {
    padding: 16,
    paddingBottom: 32, // Extra padding at the bottom for scroll
  },
  tabBar: {
  flexDirection: 'row',
  backgroundColor: 'white',
  height: 48,
  justifyContent: 'center',
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
},
tabItem: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 12,
},
tabItemActive: {
  borderBottomWidth: 2,
  borderBottomColor: '#0091CD',
},
tabText: {
  color: '#525252',
  fontFamily: 'Graphik Medium',
  fontSize: 14,
},
tabTextActive: {
  color: '#0091CD',
}
});

export default CourseDetailsPage;