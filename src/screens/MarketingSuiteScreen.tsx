import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking, Modal } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DrawerScreen from './DrawerScreen';
import MainLayout from './MainLayout';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const MarketingSuiteScreen: React.FC<Props> = ({ navigation }) => {
 const { theme } = useTheme();
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

      {/* White Content Card - Now contains ScrollView directly */}
      
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}>

              <Text style={[styles.welcomeText, { color: theme.colors.textColorTitle }]}>
                Marketing Suite
              </Text>

              <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
                Watch the video on this page to learn more.                
                </Text>

          <View style={[styles.whiteCard, styles.screenContainer]}>
       
          {/* Video Placeholder Section */}
          <View style={styles.videoSection}>
          
          
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
              <View style={styles.rowCenteredTrans}>
                <View style={styles.row}>
                  <Image source={require('../assets/icons/play.png')}     style={[styles.playIcon, {marginEnd:16}]} />
                   <Image source={require('../assets/icons/volume-max.png')} style={styles.playIcon} />
                </View>
                <Image source={require('../assets/icons/maximize-01.png')} style={styles.playIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Main Content */}
          <View style={styles.contentSection}>
            <Text style={styles.welcomeText}>
              Start a successful campaign with this all-in-one resource.
            </Text>
        
            <Text style={styles.subtitle}>Here, you'll learn how to attract investors with the help of our comprehensive guides and templates. Watch the video on this page to learn more. Whether you're just getting started or looking to take your campaign to the next level, the Marketing Suite gives you the step-by-step playbook to launch with confidence. You'll get access to proven scripts, outreach templates, organic posting strategies, and messaging blueprints—everything designed to help you engage your warm market, generate buzz, and convert interest into investment. Use this hub to master your messaging, build authentic momentum, and grow your investor list before your raise even begins.

            </Text>
            
          </View>

       </View>

          {/* Real Estate Section */}
          <View style={styles.gridItem}>
            <View style={styles.row}>
                <Image source= {require('../assets/icons/checklist.png')} style={styles.gridIcon} resizeMode="contain" />
                <Text style={[styles.blockTitle, { color: theme.colors.textColorTitle }]}>
                  Real Estate
                </Text> 
            </View>
            <Text style={styles.gridDescription}>
              Learn how to market your Rental or Fix & Flip property with messaging that builds urgency, trust, and local credibility.
            </Text>
            <View style={styles.divider} />
        <TouchableOpacity
          onPress={() => {navigation.navigate("MarketingSuiteDetailPageRealEstate");}}> 
              <View style={styles.rowCentered}>
                 <Image source= {require('../assets/icons/eye.png')} style={styles.eyeIcon} resizeMode="contain" />
                <Text style={[styles.gridTitle, { color: theme.colors.textColorTitle }]}>
                  View
                </Text> 
            </View>

           </TouchableOpacity>
          </View>

          {/* Collectibles Section */}
          <View style={styles.gridItem}>
            <View style={styles.row}>
                <Image source= {require('../assets/icons/checklist.png')} style={styles.gridIcon} resizeMode="contain" />
                <Text style={[styles.blockTitle, { color: theme.colors.textColorTitle }]}>
                  Collectables
                </Text> 
            </View>
            <Text style={styles.gridDescription}>
              Position your collectible asset with storytelling strategies that turn niche passion into broad investor appeal.
            </Text>
            <View style={styles.divider} />

             <View style={styles.container}>

        <TouchableOpacity
          onPress={() => {navigation.navigate("MarketingSuiteDetailPageRealEstate");}}> 
              <View style={styles.rowCentered}>
                 <Image source= {require('../assets/icons/eye.png')} style={styles.eyeIcon} resizeMode="contain" />
                <Text style={[styles.gridTitle, { color: theme.colors.textColorTitle }]}>
                  View
                </Text> 
            </View>

           </TouchableOpacity>

            </View>
          </View>
        </ScrollView>

     </MainLayout>
  );
};


const styles = StyleSheet.create({
     container: {
    flex: 1,               // fill screen
    justifyContent: 'center',
    alignItems: 'center',
  },
 screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  rowCentered: {
    flexDirection: 'row',  // horizontal layout
    justifyContent: 'center',
    alignItems: 'center',
  },

    rowCenteredTrans: {
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
  itemRow: {
    fontSize: 16,
  },
    itemRowText: {
    color: '#3B3E61',
    fontSize: 14,
    fontWeight: '500',
    marginStart: 8,
    fontFamily: 'Magistral Medium',
  },
  topHeader: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    padding: 10,
    borderTopEndRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopStartRadius: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#F4F5FE',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    overflow: 'hidden', // This is crucial for rounded corners on scroll
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  videoSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  videoPlaceholder: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  videoImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e1e1e1',
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
  playButtonText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 3,
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
  contentSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#444',
  },
  divider: {
    height: 1,
    backgroundColor: '#e1e1e1',
    marginTop: 20,
    marginBottom: 16,
    marginHorizontal: -16,
  },
  categorySection: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  categoryDescription: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    color: '#444',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
  },
  checkboxText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#007AFF',
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
    gridItem: {
    width: '100%',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E4F4',
  },

      eyeIcon: {
    width: 20,
    height: 20,
    marginBottom: 8,
  },
    gridIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    marginStart: 8,
    fontFamily: 'Graphik Medium',
  },
      row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // adjust as needed
  },
    gridDescription: {
    fontSize: 16,
    color:'#535862',

    lineHeight: 24,
    fontFamily: 'Inter Regular',
  },

     blockTitle: {
    fontSize: 18,
    color:'#181D27',
    marginStart: 8,
    lineHeight: 24,
    fontFamily: 'Graphik Medium',
  },
});

export default MarketingSuiteScreen;