import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import DrawerScreen from './DrawerScreen';
import MainLayout from './MainLayout';

// Define types
type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

type SelectedAnswers = {
  [key: number]: number;
};

type QuizResultsScreenParams = {
  questions: Question[];
  selectedAnswers: SelectedAnswers;
};

type QuizResultsScreenProps = NativeStackScreenProps<RootStackParamList, 'QuizResultsScreen'>;

const QuizResultsScreen = ({ route }: QuizResultsScreenProps) => {
  const { questions, selectedAnswers } = route.params;

                const [drawerVisible, setDrawerVisible] = useState(false);
              
                const toggleDrawer = () => {
                  setDrawerVisible(!drawerVisible);
                };
  
  const calculateScore = (): { percentage: number; correctCount: number; totalQuestions: number } => {
    let correctCount = 0;
    questions.forEach((question: Question, index: number) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return {
      percentage: (correctCount / questions.length) * 100,
      correctCount,
      totalQuestions: questions.length
    };
  };

  const score = calculateScore();

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

                   <View style={styles.whiteCard}>
                    {/* Main Content */}
          
              <ScrollView style={styles.container}>

            {/* Course title section */}
            <View style={styles.section}>
        <View style={styles.breadcrumbs}>
             <TouchableOpacity onPress={() => {}}>
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

      <View style={styles.scoreContainer}> 
          <Text style={styles.scoreHeader}>Your score</Text>
          <View style={styles.rowSpaceBetween}>
            <Text style={[styles.scorePercentage,{color:'#0091CD'}]}>{score.percentage.toFixed(1)}%</Text>
            <Text style={styles.scoreDetail}>{score.correctCount}/{score.totalQuestions} correct</Text>
          </View>
      </View>
      
      <View style={[styles.row,{  width: '100%'}]} >
            <View style={[styles.scoreContainerFull, { flex: 1}, {marginEnd: 4}]}> 
        <Text style={[styles.passLabel ,{flex:1}]}>Pass Score</Text>
            <Text style={[styles.passValue,{flex:1}, {color:'#0091CD'}]}>80%</Text>
      </View>
              <View style={[styles.scoreContainerFull,
                  { 
                    backgroundColor: '#E1FCEB',
                    marginStart: 4,
                    flexDirection: 'row',        // Important for horizontal alignment
                    alignItems: 'center',       // Centers vertically
                    justifyContent: 'flex-start' // Aligns content to start (left)
                  },
                 {marginStart: 4}, {backgroundColor:'#E1FCEB'}]}> 
            <Text style={[styles.passValue ,{color:'#32AE83'},{flex:1}, score.percentage >= 80 ? styles.passed : styles.failed]}>
              {score.percentage >= 80 ? 'Passed' : 'Failed'}
            </Text>
      </View>
      </View>

        {questions.map((question: Question, questionIndex: number) => (
          <View key={questionIndex} style={styles.questionResult}>
            <Image source={require('../assets/icons/tick_green.png')}  style={styles.tcImage}/>
            <Text style={styles.questionText}>{question.question}</Text>
            
            {question.options.map((option: string, optionIndex: number) => (
              <View 
                key={optionIndex}
                style={[
                  styles.optionResult,
                  selectedAnswers[questionIndex] === optionIndex && styles.selectedOption,
                  optionIndex === question.correctAnswer ? styles.correctOption : 
                    (selectedAnswers[questionIndex] === optionIndex ? styles.incorrectOption : null)
                ]}
              >
                <Text style={styles.optionText}>{option}</Text>
              </View>
            ))}
          </View>
        ))}

                <View style={styles.spacerSmall}/>
              {/* Navigation buttons */}
              <View style={styles.navigationButtons}>
                <TouchableOpacity style={[styles.navButton, {borderColor:'#B3B6D7', 
                borderRadius:8,
                borderWidth:1, 
                backgroundColor:'white'},{marginEnd:8}]}   
                onPress={() => {}}>
                  <Text style={[styles.navButtonText, {color:'#B3B6D7'}]}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, styles.nextButton]}
                     onPress={() => {}}>
                  <Text style={[styles.navButtonText, {color:'white'}]}>Next</Text>
                </TouchableOpacity>
                 <View style={styles.spacerSmall}/>
              </View>
      </ScrollView>
      </View>
    </MainLayout>
  );
};

// Styles remain the same as in your original code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
      section: {
    marginBottom: 10,
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
     arrowGreen:{
    tintColor: '#0091CD',
    marginEnd: 12,
    width: 12,
    height: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreContainer: {
    height: 85,
    marginBottom: 6,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F4F5FE',
    borderRadius: 20,
  },
  scoreContainerFull: {
        height: 85,
    marginBottom: 6,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F4F5FE',
    borderRadius: 20,
      flex: 1, // Takes all available space
    flexDirection: 'column',
  },
    rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  scoreHeader: {
    fontSize: 16,
    marginTop: 5,
    flexDirection: 'row',
  },
  scorePercentage: {
    fontSize: 14,
    fontWeight: 'bold',
      color: '#171717',
    marginVertical: 5,
      fontFamily: 'Graphik Medium',
  },
  scoreDetail: {
    fontSize: 16,
    color: '#666',
  },
  passInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
  },
  passLabel: {
    fontSize: 14,
    color: '#171717',
      fontFamily: 'Graphik Medium',
  },
  passValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  passed: {
    color: 'green',
  },
    whiteCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden', // This is crucial for rounded corners on scroll
  },

  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  failed: {
    color: 'red',
  },
  resultsContainer: {
    flex: 1,
  },
    tcImage: {
    width: 32,
    height: 32,
    marginBottom: 10,
  },
  questionResult: {
 marginBottom: 25,
        padding: 16,
    backgroundColor: '#FFF',
    borderColor:'#F4F5FE',
    borderRadius: 20,
    borderWidth: 2,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionResult: {
    padding: 12,
    marginVertical: 4,
  },
  selectedOption: {
  },
  correctOption: {
    backgroundColor: '#E1FCEB',
    borderRadius: 8,
  },
  incorrectOption: {
    backgroundColor: '#FFEAEA',
        borderRadius: 8,
  },
  optionText: {
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
    welcomeText: {
    fontSize: 18,
    fontFamily: 'Magistral Medium',
    marginBottom: 4,
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
    logo: {
    width: 150,
    height: 34,
    position: 'absolute',
    left: 20,
    top: 10,
    bottom: 10,
  },
topHeader: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderTopEndRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopStartRadius: 16,
  },
    columnContainer: {
    flex: 1, // Takes all available space
    flexDirection: 'column', // Default, can be omitted
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
  contentContainer: {
    padding: 16,
    backgroundColor: '#F4F5FE',
    borderRadius: 20,
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

export default QuizResultsScreen;