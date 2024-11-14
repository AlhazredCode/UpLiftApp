import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box } from '../../../components';
import BottomTabs from './BottomTabs';
import PagerView from 'react-native-pager-view';
import Notifications from './drawer/Notifications/Notifications';
import Book from './drawer/Book/Book';

const UpMain = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handlePageChange = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <Box bg='$UpBackground100' flex={1}>
      <PagerView
        ref={pagerRef}
        style={styles.container}
        initialPage={0}
        onPageSelected={handlePageChange}
      >
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
        <Book />

        </View>
        <View style={styles.container} key="3">
       
        </View>
      </PagerView>
      <BottomTabs pagerRef={pagerRef} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </Box>
  );
};

export default UpMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});