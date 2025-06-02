import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image, Modal } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DrawerScreen from './DrawerScreen';
import MainLayout from './MainLayout';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};


const StartCourseInfoScreen: React.FC<Props> = ({ navigation }) => {

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
    

    <ScrollView style={[styles.container,{paddingHorizontal: 16,paddingVertical:20}]}>
     <View style={styles.spacerSmall}/>

            {/* Course title section */}
            <View style={styles.section}>
        <View style={styles.breadcrumbs}>
             <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={require('../assets/icons/arrow-left.png')} style={styles.rightIcon} />
             </TouchableOpacity>
       
          <Text style={styles.welcomeText}>How to Locate</Text>
        </View>
            
                 
                            <View style={styles.spacerSmall}/>
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
            </View>

         <View style={styles.contentContainer}>

      <View style={styles.centerContainer}>
        <Image source={require('../assets/icons/banner1.png')} style={styles.bannerImage} />
      </View>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Locating Your Real Estate (Buy and Hold/Rental) Investment</Text>
      </View>

      {/* Introduction Text */}
      <View style={styles.section}>
        <Text style={styles.BodyMedium}>
          Let's help you locate the rental you've been searching for! This covers makes hope and hold rental investments accessible and achievable for beginners who have no prior experience in the field. Understanding real estate requires knowing a wide range of terms that are arranged out. Understanding it involves acquiring property and generated living-term financial gain. Our guidance will help you reflect the needs of money you cannot dwell in a market under your classes to create a stable family home, apartment outside or vacation rental.
        </Text>
           <View style={styles.spacerSmall}/>
        <Text style={styles.BodyMedium}>
          Our discussion will explore both the principles of investing and our properties and the methods for considering rent income alone. This could extend our models to equity you would benefit from providing investment. We plan to work with companies, financial institutions or local businesses both pastoralisations and financial knowledge which investors have used to generate an industry line to enhance our location choices and their choice effects. We provide you with all the necessary tools to evaluate properties successfully and deliver opportunities that align with your objectives.
        </Text>
           <View style={styles.spacerSmall}/>
        <Text style={styles.BodyMedium}>
          Investing is well estate right when daunting but there is one of the most reliable methods for assessing accumulated cost. We plan to account for over time. We will get through each step together for you and confidently thank your first investment move with the right knowledge.
        </Text>
      </View>
         </View>
    
  <View style={styles.spacerSmall}/>
    <View style={styles.spacerSmall}/>
      <View style={styles.contentContainer}> 
{/* Asset Selection Section */}
      <View style={styles.section}>
          <View style={styles.spacerSmall}/>
        <Text style={styles.titleText}>Asset Selection and Location</Text>
          <View style={styles.spacerSmall}/>
        <Text style={styles.headingMedium}>Criteria for Choosing Investments:</Text>
          <View style={styles.spacer}/>
        {/* Criteria List */}

        <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Location:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>The property's location relative to nearby amenities and essential services such as school and transportation hubs affects its value.
          </Text>
        </View>

        <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Condition:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>The current physical condition of the property together with essential repair requirements.</Text>
        </View>

                <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Potential for Appreciation:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>Likelihood of property value increase over time.</Text>
        </View>

                <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Rental Demand:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>High demand areas ensure consistent rental income.</Text>
        </View>



                <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Cash Flow:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>Properties generating positive cash flow produce higher income than their expenses.</Text>
        </View>

 <View style={styles.spacerSmall}/>
  <View style={styles.spacerSmall}/>
 <Text style={styles.headingMedium}>Research Methods:</Text>
          <View style={styles.spacer}/>
        {/* Criteria List */}

        <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Location:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>The property's location relative to nearby amenities and essential services such as school and transportation hubs affects its value.
          </Text>
        </View>

        <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Condition:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>The current physical condition of the property together with essential repair requirements.</Text>
        </View>

                <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Potential for Appreciation:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>Likelihood of property value increase over time.</Text>
        </View>

                <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Rental Demand:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>High demand areas ensure consistent rental income.</Text>
        </View>



                <View style={styles.criteriaItem}>

          <View style={styles.row}>
              <Image
                source={require('../assets/icons/up_arrow.png')}
              style={styles.upArrow}/>
                <Text style={styles.headingMedium}>Cash Flow:</Text>
          </View>
           
          <Text style={styles.BodyMedium}>Properties generating positive cash flow produce higher income than their expenses.</Text>
        </View>
      </View>

      </View>

        <View style={styles.spacer}/>
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
          onPress={() => {navigation.navigate("QuizScreen");}}>
          <Text style={[styles.navButtonText, {color:'white'}]}>Next</Text>
        </TouchableOpacity>
         <View style={styles.spacerSmall}/>
      </View>
       <View style={styles.spacerSmall}/>
    </ScrollView>
      
      </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 15,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  row: {
    alignSelf: 'flex-start', // Allows width to shrink to content
    flexShrink: 1,          // Allows shrinking smaller than content
    flexWrap: 'wrap',  
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12, // adjust as needed
    backgroundColor: 'transparent',
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
        alignSelf: 'flex-start', // Allows width to shrink to content
    flexShrink: 1,          // Allows shrinking smaller than content
    flexWrap: 'wrap',  
  },
  criteriaNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
     arrowGreen:{
    tintColor: '#0091CD',
    marginEnd: 12,
    width: 12,
    height: 8,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
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
    marginTop: 20,
    marginBottom: 16,
    padding: 10,
    borderTopEndRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopStartRadius: 16,
  },
  criteriaText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  criteriaHeading: {
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
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
      notifications: {
    width: 32,
    height: 32,
    borderRadius: 6,
    position: 'absolute',
    right: 60,
      top: 10,
    bottom: 10,
  },
      upArrow: {
    width: 12,
    height: 12,
    marginEnd: 12,
    tintColor: '#0091CD',
  },
    welcomeText: {
    fontSize: 18,
    fontFamily: 'Magistral Medium',
    marginBottom: 4,
  },
contentContainer: {
    padding: 16,
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

export default StartCourseInfoScreen;