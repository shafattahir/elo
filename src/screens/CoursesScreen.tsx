import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView, Image,Switch, } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useTheme } from '../contexts/ThemeContext';
import { Icon } from 'react-native-vector-icons/Icon';
import CustomSwitch from '../components/ui/CustomSwitch';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MainLayout from './MainLayout';
import DrawerScreen from './DrawerScreen';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const CoursesScreen: React.FC<Props> = ({ navigation }) => {

 const { theme } = useTheme();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  // Types
  type CourseItem = {
    id: string;
    title: string;
    completed: boolean;
    time?: string;
    category: string;
    desc: string;
    progress: number;
  };

  const imageMap: { [key: string]: any } = {
  '1': require('../assets/icons/banner1.png'),
  '2': require('../assets/icons/banner2.png'),
  '3': require('../assets/icons/banner3.png'),
  '4': require('../assets/icons/banner5.png'),
  '5': require('../assets/icons/banner6.png'),
  '6': require('../assets/icons/banner4.png'),
  // Add more as needed
};

  type FilterOption = 'Newset' | 'Last activity' | 'Most activity' | 'Alphabetical (A-Z)' | 'Alphabetical (Z-A)' | 'Started' | 'None';

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterOption>('Newset');

  // Dummy Data
  const courses: CourseItem[] = [
    { id: '1', title: 'Real Estate (Buy and Hold/Rental)', completed: false, category: 'Join Event', desc: '5 Essential Steps to Begin Your Buy and Hold/Rental Investment Journey!', progress: 30 ,},
    { id: '2', title: 'Real Estate (Fix and Flip)', completed: true, time: 'TODAY ● 4:00 PM', category: 'Join Event' , desc: '5 Easy Steps to Get You Fixing and Flippin                 ', progress: 90},
    { id: '3', title: 'Franchise', completed: false, category: 'Join Event' , desc: '5 Proven Steps to Start a Profitable Franchise!        ', progress: 24,},
    { id: '4', title: 'Collectible Coins', completed: false, category: 'Real Estate' , desc: 'Turn Your Passion for Coins into a Profitable Investment!          ', progress: 57},
    { id: '5', title: 'Collectible Cars', completed: false, category: 'Rental' , desc: '5 Simple Steps to Unlock Profits in the Collectible Car Industry!            ', progress: 67},
    { id: '6', title: 'Collectible Stamps', completed: true, category: 'Buy and Hold' , desc: 'From Collector to Investor: Unlock the Value of Stamps!         ', progress: 12},
  ];

  // Filter courses based on search and active filter
const filteredCourses = useMemo(() => {
  // First filter by search query
  const searchFiltered = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Then apply the active filter
  switch (activeFilter) {
    case 'Newset':
      return [...searchFiltered].sort((a, b) => 
        (b.time ? 1 : 0) - (a.time ? 1 : 0) || // Items with time come first
        new Date(b.time || 0).getTime() - new Date(a.time || 0).getTime()
      );
      
    case 'Last activity':
      return [...searchFiltered].sort((a, b) => 
        (b.time ? 1 : 0) - (a.time ? 1 : 0)
      );
      
    case 'Most activity':
      return [...searchFiltered].sort((a, b) => b.progress - a.progress);
      
    case 'Alphabetical (A-Z)':
      return [...searchFiltered].sort((a, b) => a.title.localeCompare(b.title));
      
    case 'Alphabetical (Z-A)':
      return [...searchFiltered].sort((a, b) => b.title.localeCompare(a.title));
      
    case 'Started':
      return searchFiltered.filter(course => course.completed);
      
    default:
      return searchFiltered;
  }
}, [courses, searchQuery, activeFilter]);

  
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
      <ScrollView style={styles.contentContainer}>

        <Text style={[styles.welcomeText, { color: theme.colors.textColorTitle }]}>
                Courses
        </Text>

           {/* Join Event Section */}
        <View style={styles.gridItem}>
            <View style={styles.rowWhiteRounded}>
                <Image source= {require('../assets/icons/play_small_blue.png')} style={styles.playSmall} resizeMode="contain" />
                <Text style={[styles.liveVideoText]}>
                    Live Video
                </Text> 
            </View>
                <Text style={styles.liveTabHeading}>
                    Create Docs: Financial {'\n'}Condition & Liquidity
                </Text>
          
                <View style={styles.rowCentered}>
                      <Text style={[styles.liveTabLighttext, { color: theme.colors.textColorTitle }]}>TODAY</Text>
                    <Image source= {require('../assets/icons/green_dot.png')} style={styles.greenDot} resizeMode="contain" />
                    <Text style={[styles.liveTabLighttext, { color: theme.colors.textColorTitle }]}>
                        4:00 PM
                    </Text> 
                </View>

                <View style={styles.rowSpaceBetween}>
                     <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.textButton}>Join Event</Text>
                    </TouchableOpacity>
                    </View>
                    <Image source= {require('../assets/icons/large_star.png')} style={styles.largeStar} resizeMode="contain" />
                </View>
            </View>
  

              {/* Search and Filter Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(true)}
        >
          <Image source={require('../assets/icons/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

        {/* Courses List */}
        {filteredCourses.map((course) => (
          <View key={course.id} style={styles.courseItem}>
            <TouchableOpacity 
              onPress={() => {navigation.navigate("CourseDetailsPage");}}
            >

                <View style={styles.centerContainer}>
                <Image source={imageMap[course.id]} style={styles.bannerImage} />
                </View>

                 <View style={styles.spacer}/>
                <View style={styles.courseDetails}>
              <Text style={[styles.welcomeText]}>
                {course.title}
              </Text>

            <View style={styles.spacer}/>
             <Text style={[styles.liveTabLighttext]}>
                {course.desc}
              </Text>

              <View style={styles.spacer}/>

              <View style={styles.rowSpaceBetween}>
        
           <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${course.progress}%` }]} />
            </View>
            <View style={styles.progressInfo}>
            <Text style={styles.progressPercent}>{course.progress}%</Text>
            </View>

            <Image source={require('../assets/icons/up_arrow.png')} style={styles.upArrow} />
                </View>

   
            </View>
            </TouchableOpacity>
            <View style={styles.spacer}/>
               
          </View>
        ))}

  <View style={styles.spacer}/>
  <View style={styles.spacer}/>
  
      </ScrollView>


{/* Filter Modal */}
<Modal
  animationType="slide"
  transparent={true}
  visible={showFilters}
  onRequestClose={() => setShowFilters(false)}
>
  <BlurView
    style={styles.absolute}
    blurType="dark"
    blurAmount={10}
    reducedTransparencyFallbackColor="white"
  >
    
      <View style={styles.modalContainer}>
        <View style={styles.filterDrawer}>
          <Text style={styles.filterHeader}>Filters</Text>

            <TouchableOpacity style={styles.crossBtn}
               onPress={() => setShowFilters(false)}>
                <Image source={require('../assets/icons/x.png')}  />
               </TouchableOpacity>
        
                <View style={styles.spacer}/>
                  <View style={styles.spacer}/>
             <Text style={styles.sortBy}>Sort by</Text>
  <View style={styles.spacer}/>
        <View style={styles.row}>  

            <TouchableOpacity style={[
                styles.filterItem,
                activeFilter === 'Newset' && styles.activeFilterItem
              ]}
              onPress={() => {
                setActiveFilter('Newset'); 
                setShowFilters(false);
              }}>
                <Text style={[styles.filterTextLabel, { color: theme.colors.textColorTitle }]}>
                  Newest
                </Text>
                </TouchableOpacity>
            <TouchableOpacity style={[
                styles.filterItem,
                activeFilter === 'Last activity' && styles.activeFilterItem
              ]}
                 onPress={() => {
                setActiveFilter('Last activity'); 
                setShowFilters(false);
              }}>
                <Text style={[styles.filterTextLabel, { color: theme.colors.textColorTitle }]}>
                  Last activity
                </Text>
                </TouchableOpacity>
           <TouchableOpacity style={[
                styles.filterItem,
                activeFilter === 'Most activity' && styles.activeFilterItem
              ]}
                 onPress={() => {
                setActiveFilter('Most activity'); 
                setShowFilters(false);
              }}>
                <Text style={[styles.filterTextLabel, { color: theme.colors.textColorTitle }]}>
                  Most activity
                </Text>
                </TouchableOpacity>
               <TouchableOpacity style={[
                styles.filterItem,
                activeFilter === 'Alphabetical (A-Z)' && styles.activeFilterItem
              ]}
                 onPress={() => {
                setActiveFilter('Alphabetical (A-Z)'); 
                setShowFilters(false);
              }}>
                <Text style={[styles.filterTextLabel, { color: theme.colors.textColorTitle }]}>
                  Alphabetical (A-Z)
                </Text>
                </TouchableOpacity>
                
              <TouchableOpacity style={[
                styles.filterItem,
                activeFilter === 'Alphabetical (Z-A)' && styles.activeFilterItem
              ]}
                 onPress={() => {
                setActiveFilter('Alphabetical (Z-A)'); 
                setShowFilters(false);
              }}>
                <Text style={[styles.filterTextLabel, { color: theme.colors.textColorTitle }]}>
                  Alphabetical (Z-A)
                </Text>
                </TouchableOpacity>

   
        </View>
            <View style={styles.spacer}/>
             <View style={styles.rowSpaceBetweenBordered}>
                    <Text style={[styles.sortBy]}>
                        Started
                    </Text>

                 
                    <CustomSwitch
                      value={activeFilter === 'Started'}
                        onToggle={() => {
                                if (activeFilter === 'Started') {
                            setActiveFilter('None');
                             setShowFilters(false);
                            } else {
                            setActiveFilter('Started');
                             setShowFilters(false);
                            }
                        }}/>
                </View>
    <View style={styles.spacer}/>
        </View>
      </View>
  </BlurView>
</Modal>
         </MainLayout>
  );
};

const styles = StyleSheet.create({
     spacer: {
    height : 20,
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
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  rowCentered: {
    flexDirection: 'row',  // horizontal layout
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
eyeIcon: {
    width: 20,
    height: 20,
    marginBottom: 8,
  },
  greenDot: {
    width: 6,
    height: 6,
    marginHorizontal: 8,
  },
  largeStar: {
    width: 56.6,
    height: 64.8,
  },
      playSmall: {
    width: 11.67,
    height: 11.67,
  },
    gridIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
    gridDescription: {
    fontSize: 16,
    color:'#535862',

    lineHeight: 24,
    fontFamily: 'Inter Regular',
  },
liveVideoText: {
    fontSize: 12,
    color:'#0381B6',
    fontWeight: '400',
    marginStart: 8,
    fontFamily: 'Graphik Regular',
  },
blockTitle: {
    fontSize: 18,
    color:'#181D27',
    marginStart: 8,
    lineHeight: 24,
    fontFamily: 'Graphik Medium',
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    marginStart: 8,
    fontFamily: 'Graphik Medium',
  },

  liveTabLighttext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#171717',
    marginEnd: 8,
    fontFamily: 'Graphik Regular',
  },
  filterTextLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3B3E61',
    marginEnd: 8,
    fontFamily: 'Graphik Regular',
  },
rowWhiteRounded: {
    alignSelf: 'flex-start', // Allows width to shrink to content
    flexShrink: 1,   
    borderRadius: 12,       // Allows shrinking smaller than content
    flexWrap: 'wrap',  
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 16, // adjust as needed
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
    marginBottom: 6,
    marginTop: 20,
    padding: 10,
    borderTopEndRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopStartRadius: 16,
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
    liveTabHeading: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Magistral Medium',
  },
    gridItem: {
    width: '100%',
    padding: 22,
    backgroundColor: '#D4F2FF',
    borderRadius: 20,
    marginBottom: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E2E4F4',
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
  searchContainer: {
    flexDirection: 'row',
    
  },
  searchInputContainer: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: '#E2E4F4',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
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
upArrow: {
    width: 10,
    height: 10
  },

crossBtn: {
    width: 22,
    height: 22,
    position: 'absolute',
    right: 0,
    marginTop: 25,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
    modalContainerDrawer: {
    flex: 1,
    flexDirection: 'row',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  filterButton: {
    width: 42,
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E4F4',
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 22,
    height: 22,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  courseItem: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F4F5FE',
    borderRadius: 20,
    marginVertical: 16,
    padding: 16,
    
  },
  checkbox: {
    marginRight: 12,
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
  },
  courseDetails: {
    width: '100%',
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  courseTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  searchVisual: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
  },
  searchVisualLine: {
    color: '#ccc',
    fontSize: 16,
    letterSpacing: 4,
    marginBottom: 8,
  },
  progressItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  progressTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  progressBarContainer: {
    height: 6,
    width: 128,
    backgroundColor: '#D4F2FF',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0091CD',
    borderRadius: 3,
  },
  progressInfo: {
    flexDirection: 'row',
    marginStart: 16,
    justifyContent: 'space-between',
  },
  progressPercent: {
    color: '#0091CD',
    fontWeight: 'bold',
  },
  progressDays: {
    color: '#888',
  },

  blurTouchable: {
    flex: 1,
  },

   sortBy: {
     fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Graphik Medium',
    color: '#333333',
  },

  filterHeader: {
     fontSize: 18,
    fontFamily: 'Graphik Medium',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  filterItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginEnd: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#E2E4F4',
  },
    activeFilterItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginEnd: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#0091CD',
  },
  filterText: {
    fontSize: 16,
    color: '#333',
  },
  activeFilter: {
    backgroundColor: '#f5f9ff',
  },
  activeFilterText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowSpaceBetweenBordered: {
    width: '100%',
    paddingVertical:16,
    paddingHorizontal:16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#E5E5E5'
  },
  buttonContainer: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#0091CD',
  },
  textButton: {
    color: 'white',
    fontFamily: 'Magistral Medium',
    fontWeight: '500',
    fontSize: 14, // optional
  },
   absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  filterDrawer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    paddingBottom: 40,
    // Add shadow if needed
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CoursesScreen;