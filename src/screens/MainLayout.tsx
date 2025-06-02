import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Image, StyleSheet } from 'react-native';

type MainLayoutProps = {
  children: React.ReactNode;
  onDrawerPress?: () => void;
};

const MainLayout = ({ children, onDrawerPress }: MainLayoutProps) => {
  return (
    <View style={[{ flex: 1 }, { backgroundColor: '#fff' }]}>
      {/* Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={onDrawerPress}>
          <Image
            source={require('../assets/icons/drawer.png')}
            style={styles.drawer}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/icons/logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../assets/icons/notifications.png')}
          style={styles.avatar}
        />
      </View>

      {/* Main Content */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    height: 58,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawer: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
  logo: {
    width: 150,
    height: 34,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
    divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 24,
  },
});

export default MainLayout;