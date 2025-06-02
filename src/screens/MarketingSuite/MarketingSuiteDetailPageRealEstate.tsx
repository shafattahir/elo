import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import DrawerScreen from '../DrawerScreen';
import MainLayout from '../MainLayout';


const MarketingSuiteDetailPageRealEstate = () => {
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


    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
    
      {/* Breadcrumb */}
      <Text style={styles.breadcrumb}>Marketing Suite {'>'} <Text style={styles.breadcrumbActive}>Real Estate</Text></Text>

      {/* Title and Description */}
      <View style={styles.card}>
        <Text style={styles.title}>Real Estate</Text>
        <Text style={styles.description}>
          Take your real estate marketing to the next level with our customizable templates and engaging content that will attract potential buyers...
        </Text>
        <Text style={styles.description}>
          Our Marketing Suite is designed to streamline your promotional efforts and enhance your property listings for maximum visibility in the market.
        </Text>

        <Text style={styles.subheading}>What's Included In Each Section</Text>
        <View style={styles.listItem}>
          {/* <Feather name="mail" size={16} color="#000" /> */}
          <Text style={styles.listText}> Copy and paste emails</Text>
        </View>
        <View style={styles.listItem}>
          {/* <Feather name="message-circle" size={16} color="#000" /> */}
          <Text style={styles.listText}> Social media posts</Text>
        </View>
        <View style={styles.listItem}>
          {/* <Feather name="image" size={16} color="#000" /> */}
          <Text style={styles.listText}> Graphic images</Text>
        </View>

        {/* Videos */}
        <View style={styles.videoContainer}>
          {/* <Image source={require('../assets/video-placeholder.png')} style={styles.video} />
          <Image source={require('../assets/video-placeholder.png')} style={styles.video} /> */}
        </View>
      </View>

      {/* Materials Section */}
      <Text style={styles.materialsTitle}>Materials</Text>
      <View style={styles.materialCard}>
        <View style={styles.materialRow}>
          {/* <Feather name="file-text" size={20} color="#0C78BE" /> */}
          <Text style={styles.materialText}>Real Estate (Buy & Hold)</Text>
        </View>
      </View>

      <View style={styles.materialCard}>
        <View style={styles.materialRow}>
          {/* <Feather name="file-text" size={20} color="#0C78BE" /> */}
          <Text style={styles.materialText}>Real Estate (Fix & Flip)</Text>
        </View>
      </View>

    </ScrollView>
      </MainLayout>
  );
};

export default MarketingSuiteDetailPageRealEstate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9fb',
  },
  header: {
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 30,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  menuIcon: {
    marginLeft: 16,
  },
  breadcrumb: {
    marginTop: 12,
    color: '#666',
  },
  breadcrumbActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  subheading: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  listText: {
    fontSize: 14,
    marginLeft: 6,
  },
  videoContainer: {
    marginTop: 12,
  },
  video: {
    height: 160,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  materialsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  materialCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  materialRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  materialText: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: '500',
  },
});
