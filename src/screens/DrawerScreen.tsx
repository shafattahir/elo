import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../contexts/ThemeContext';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const DrawerScreen = ({
  closeDrawer,
  visible,
}: {
  closeDrawer: () => void;
  visible: boolean;
}) => {
  const { theme } = useTheme();
  const slideAnim = React.useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -DRAWER_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.absoluteContainer,
        { transform: [{ translateX: slideAnim }] },
      ]}
    >
      <View style={styles.mainContainer}>
        {/* Drawer Content */}
        <View
          style={[
            styles.drawerContent,
            {
              backgroundColor: '#171717',
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            },
          ]}
        >
          <Image
            source={require('../assets/icons/logo.png')}
            style={styles.logo}
          />
          <View style={styles.divider} />
          <Text style={styles.headings}>GENERAL</Text>

          <TouchableOpacity style={styles.drawerItem}>
            <Image
              source={require('../assets/icons/megaphone_blank.png')}
              style={styles.icons}
            />
            <Text style={styles.headingRegular}>Marketing Suite</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Image
              source={require('../assets/icons/link.png')}
              style={styles.icons}
            />
            <Text style={styles.headingRegular}>Resources</Text>
          </TouchableOpacity>

          <View style={styles.spacer} />

          <Text style={styles.headings}>COMMUNITY</Text>

          <TouchableOpacity style={styles.drawerItem}>
            <Image
              source={require('../assets/icons/message-square-text.png')}
              style={styles.icons}
            />
            <Text style={styles.headingRegular}>Forums</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Image
              source={require('../assets/icons/messages-square.png')}
              style={styles.icons}
            />
            <Text style={styles.headingRegular}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Image
              source={require('../assets/icons/handshake.png')}
              style={styles.icons}
            />
            <Text style={styles.headingRegular}>MatchMaker</Text>
          </TouchableOpacity>

          {/* User Info */}
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/icons/avatar.png')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.userName}>Olivia K.</Text>
              <Text style={styles.userEmail}>olivia@gmail.com</Text>
            </View>
          </View>
        </View>

        {/* Transparent Area to close drawer */}
        <TouchableOpacity
          style={styles.transparentArea}
          activeOpacity={1}
          onPress={closeDrawer}
        />
      </View>
    </Animated.View>
  );
};


const styles = StyleSheet.create({

    absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  drawerContainer: {
    height: '100%',
  },
  transparentArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  mainContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  drawerContent: {
    width: width - 60, // Leaves 60dp on the right
  },

  logo: {
    width: 160,
    height: 36,
    margin: 20,
    marginBottom: 10,
  },
    icons: {
    width: 24,
    height: 24,
    marginEnd: 10,
    tintColor: '#FFFFFF',
  },
      avatar: {
    width: 40,
    height: 40,
    marginEnd: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    fontFamily: 'Graphik Medium',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    fontSize: 16,
    fontFamily: 'Inter Regular',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#262626',
    padding: 20,
    borderRadius: 6,
    marginHorizontal: 16,
    marginBottom: 40,
    marginTop: 'auto', // Pushes to bottom
  },
  userName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'Graphik Medium',
  },
  userEmail: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A3A3A3',
    marginTop: 4,
    fontFamily: 'Inter Regular',
  },
    headings: {
      lineHeight: 18,
    fontSize: 12,
    marginStart: 20,
    marginTop: 4,
    fontWeight: '700',
    color: '#A3A3A3',
    fontFamily: 'Inter Bold',
  },
      divider: {
    height: 1,
    backgroundColor: '#404040',
    marginTop: 6,
    marginBottom: 20,
    marginHorizontal: 20,
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
    fontSize: 16,
    color:'#FFFFFF',
    fontWeight: '500',
    fontFamily: 'Graphik Medium',
  },
     spacer: {
    height : 20,
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
});

export default DrawerScreen;