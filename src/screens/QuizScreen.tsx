import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Modal } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import DrawerScreen from './DrawerScreen';
import MainLayout from './MainLayout';

type RootStackParamList = {
  Quiz: undefined;
  QuizResultsScreen: {
    questions: Question[];
    selectedAnswers: SelectedAnswers;
  };
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Quiz'>;
};

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

type SelectedAnswers = {
  [key: number]: number;
};

const RadioButton = ({ selected, onPress }: { selected: boolean; onPress: () => void }) => (
  <TouchableOpacity style={styles.radioButton} onPress={onPress}>
    {selected && <View style={styles.radioButtonSelected} />}
  </TouchableOpacity>
);

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

              const [drawerVisible, setDrawerVisible] = useState(false);
            
              const toggleDrawer = () => {
                setDrawerVisible(!drawerVisible);
              };

  const questions = useMemo<Question[]>(() => [
    {
      question: "What are real estate buy/hold investments, and why are they significant investments?",
      options: [
        "Properties bought for personal use",
        "Properties bought to hold for an extended period to generate long-term returns",
        "Properties bought for flipping",
        "Properties bought as vacation homes"
      ],
      correctAnswer: 1
    },
        {
      question: "What are real estate buy/hold investments, and why are they significant investments?",
      options: [
        "Properties bought for personal use",
        "Properties bought to hold for an extended period to generate long-term returns",
        "Properties bought for flipping",
        "Properties bought as vacation homes"
      ],
      correctAnswer: 1
    },
        {
      question: "What are real estate buy/hold investments, and why are they significant investments?",
      options: [
        "Properties bought for personal use",
        "Properties bought to hold for an extended period to generate long-term returns",
        "Properties bought for flipping",
        "Properties bought as vacation homes"
      ],
      correctAnswer: 1
    },
        {
      question: "What are real estate buy/hold investments, and why are they significant investments?",
      options: [
        "Properties bought for personal use",
        "Properties bought to hold for an extended period to generate long-term returns",
        "Properties bought for flipping",
        "Properties bought as vacation homes"
      ],
      correctAnswer: 1
    },
    // ... (keep your other questions the same)
  ], []);

  const handleOptionSelect = (questionIndex: number, optionIndex: number): void => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex
    });
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const unansweredQuestions = questions.filter(
      (_, index) => selectedAnswers[index] === undefined
    );

    if (unansweredQuestions.length > 0) {
      Alert.alert(
        "Incomplete Quiz",
        "Please answer all questions before submitting.",
        [{ text: "OK" }]
      );
      return;
    }

    Alert.alert(
      "Confirm Submission",
      "Are you sure you want to submit the Quiz?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Submit", 
          onPress: () => {
            navigation.navigate('QuizResultsScreen', {
              questions: questions,
              selectedAnswers: selectedAnswers
            });
          }
        }
      ]
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
    
    


    <ScrollView style={[styles.container,{paddingHorizontal: 16,paddingVertical:20}]}>

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
        <Text style={styles.BodyMedium}>Answer the following multiple choice quiz questions to complete this section. You may retake this Quiz as many times as necessary.        </Text>

      </View>
         </View>
    
  <View style={styles.spacerSmall}/>
    <View style={styles.spacerSmall}/>


        {questions.map((question, questionIndex) => (
          <View key={questionIndex} style={styles.questionContainer}>
             <Text style={styles.questionIndexText}>{questionIndex+1}</Text>

            <Text style={styles.questionText}>{question.question}</Text>
            
            {question.options.map((option, optionIndex) => (
              <View key={optionIndex} style={styles.optionContainer}>
                <RadioButton
                  selected={selectedAnswers[questionIndex] === optionIndex}
                  onPress={() => handleOptionSelect(questionIndex, optionIndex)}
                />
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
        onPress={() => navigation.pop()}>
          <Text style={[styles.navButtonText, {color:'#B3B6D7'}]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.nextButton]}
             onPress={handleSubmit}>
          <Text style={[styles.navButtonText, {color:'white'}]}>Next</Text>
        </TouchableOpacity>
         <View style={styles.spacerSmall}/>
      </View>
       
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 5,
  },
  note: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  questionsContainer: {
    flex: 1,
    marginTop: 20,
  },
  questionContainer: {
    marginBottom: 25,
        padding: 16,
    backgroundColor: '#FFF',
    borderColor:'#F4F5FE',
    borderRadius: 20,
    borderWidth: 2,
  },
questionIndexText: {
    fontSize: 12,
    padding: 6,
    width: 32,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Graphik Regular',
    marginBottom: 15,
    borderRadius: 8,
    color:'#0091CD',
    backgroundColor: '#D4F2FF',
    // For Text element specifically
    textAlign: 'center',        // Horizontal centering for text
    textAlignVertical: 'center' // Vertical centering for text (Android)
},
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
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
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D4D4D4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#1890ff',
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  submitButton: {
    padding: 15,
    backgroundColor: '#1890ff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
   arrowGreen:{
    tintColor: '#0091CD',
    marginEnd: 12,
    width: 12,
    height: 8,
  },
navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default QuizScreen;