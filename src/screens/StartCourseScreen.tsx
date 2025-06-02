import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Modal } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { color } from 'react-native-elements/dist/helpers';
import { Linking } from 'react-native';
import MainLayout from './MainLayout';
import DrawerScreen from './DrawerScreen';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};


const StartCourseScreen: React.FC<Props> = ({ navigation }) => {

      const handleViewPress = (url?: string) => {
        Linking.openURL(url || 'https://example.com/video');
      };

          const [drawerVisible, setDrawerVisible] = useState(false);
        
          const toggleDrawer = () => {
            setDrawerVisible(!drawerVisible);
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
    
    
    <ScrollView style={[styles.container,{paddingVertical:10}]}>

      {/* Course title section */}
      <View style={styles.section}>
        <View style={styles.breadcrumbs}>
             <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={require('../assets/icons/arrow-left.png')} style={styles.rightIcon} />
             </TouchableOpacity>
       
          <Text style={styles.welcomeText}>How to Locate</Text>
        </View>
      
       <View style={styles.spacer}/>
        <Text style={styles.headingMedium}>Real Estate (Buy and Hold/Rental)</Text>
   <View style={styles.spacer}/>
        <View style={styles.rowContainer}>


           <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `39%` }]} />
            </View>
            <View style={styles.progressInfo}>
            <Text style={[styles.progressPercent, {color:'black'}]}>{39}%</Text>
            </View>
        </View>
           <View style={styles.spacerSmall}/>
        <View style={styles.divider} />
          <View style={styles.spacerSmall}/>
      </View>



      {/* Content section */}
      <View style={styles.contentContainer}>
 <View style={styles.spacerSmall}/>
              {/* Video overlay section */}
            <TouchableOpacity 
              style={styles.videoPlaceholder}
              onPress={() => handleViewPress()}
            >
      
              <Image
                source={{ uri: 'https://placehold.co/600x400?text=Video+Placeholder' }}
                style={styles.videoImage}
              />
              <View style={styles.playButton}>
                        <Image source={require('../assets/icons/play.png')}/>
              </View>
         <Image source={require('../assets/icons/appIcon.png')} style={styles.appIcon} />
              <View style={styles.rowCentered}>
                <View style={styles.row}>
                  <Image source={require('../assets/icons/play.png')}     style={[styles.playIcon, {marginEnd:16}]} />
                   <Image source={require('../assets/icons/volume-max.png')} style={styles.playIcon} />
                </View>
                <Image source={require('../assets/icons/maximize-01.png')} style={styles.playIcon} />
              </View>
            </TouchableOpacity>
        <View style={styles.spacerSmall}/>
        <Text style={styles.titleText}>Introduction to Real Estate (Buy and Hold/Rental)</Text>
         <View style={styles.spacerSmall}/>
        <Text style={styles.BodyMedium}>
          Welcome to Real Estate (Buy and Hold/Rental)! Because this course contains extensive material it is essential to watch the video below before moving on to the first lesson. The process of investing in rental real estate requires an understanding of assets together with comprehensive market analysis to select suitable properties. Investors who study market trends along with economic indicators and property criteria will be able to make well-informed decisions that help them succeed in real estate market navigation. Knowledge is power! Let's get started.
        </Text>
      </View>

        <View style={styles.spacerSmall}/>
      {/* Navigation buttons */}
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={[styles.navButton, {borderColor:'#B3B6D7', 
        borderRadius:8,
        borderWidth:1, 
        backgroundColor:'white'},{marginEnd:8}]}   
        onPress={() => navigation.pop()}>
          <Text style={[styles.navButtonText, {color:'#B3B6D7'}]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.nextButton]}
          onPress={() => {navigation.navigate("StartCourseInfoScreen");}}>
          <Text style={[styles.navButtonText, {color:'white'}]}>Next</Text>
        </TouchableOpacity>
         <View style={styles.spacerSmall}/>
      </View>
       <View style={styles.spacerSmall}/>
    </ScrollView>

      </MainLayout>
  );
};

const { width } = Dimensions.get('window');
const videoHeight = width * 0.6; // 16:9 aspect ratio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
     arrowGreen:{
    tintColor: '#0091CD',
    marginEnd: 12,
    width: 12,
    height: 8,
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
    welcomeText: {
    fontSize: 18,
    fontFamily: 'Magistral Medium',
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    padding: 16,
  },
  playButtonText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 3,
  },
  courseSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  rowCentered: {
        position: 'absolute',
    bottom: 0, // Position at bottom (or top/middle as needed)
    left: 0,
    right: 0,
    padding: 16,
    flexDirection: 'row',  // horizontal layout
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'space-between',
  },
  videoContainer: {
    position: 'relative',
    height: videoHeight,
  },
  videoImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#E2E4F4',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    alignSelf: 'flex-start', // Allows width to shrink to content
    flexShrink: 1,          // Allows shrinking smaller than content
    flexWrap: 'wrap',  
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // adjust as needed
    backgroundColor: 'transparent',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  videoPlaceholder: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
     position: 'relative', 
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
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
  bannerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  appIcon: {
       position: 'absolute',
   width: 32,// Adjusts the play icon position
   height: 32,
    top: 20, // Position from bottom
    left: 20, 

        
  },
  playIcon: {
    fontSize: 24,
    color: '#000',
    marginLeft: 4, // Adjusts the play icon position
  },
  contentContainer: {
    padding: 16,
    margin:16,
    backgroundColor: '#F4F5FE',
    borderRadius: 20,
  },
   progressItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
     spacer: {
    height : 20,
  },
     spacerSmall: {
    height : 10,
  },
  progressTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  progressBarContainer: {
    flex: 0.85, 
    flexWrap: 'wrap',  
    flexDirection: 'row',
    alignItems: 'center',
    height: 6,
    backgroundColor: '#D4F2FF',
    borderRadius: 3,
    overflow: 'hidden',

  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0091CD',
    borderRadius: 3,
  },
  progressInfo: {
        flex: 0.15, 
        justifyContent: 'center',
    alignItems: 'center',
    marginStart: 16,
  },
  progressPercent: {
    color: '#0091CD',
    fontWeight: 'bold',
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  navButton: {
    flex: 1, // This makes both buttons take equal space
    paddingVertical: 12,
    height: 50,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  nextButton: {
    backgroundColor: '#0091CD',
    borderRadius: 8,
  },
  navButtonText: {
    fontSize: 16,
    fontFamily: 'Magistral Medium',
     fontWeight: '500',
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
playIcons: {
    width: 16,
    height: 16
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
    breadcrumbs: {
    marginBottom: 16,
       flexDirection: 'row',
       alignItems: 'center',
  },
         rightIcon: {
    height : 24,
    width : 24,
    marginEnd: 8,
  },
});

export default StartCourseScreen;