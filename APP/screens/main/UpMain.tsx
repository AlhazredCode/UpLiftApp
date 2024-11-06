import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box } from '../../../components';
import BottomTabs from './BottomTabs';
import PagerView from 'react-native-pager-view';



// Creamos el contexto con un tipo para el objeto que contendrá currentPage y setCurrentPage
interface PageContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

// Inicializamos el contexto con un valor por defecto. Importante para evitar errores.
export const CurrentPageIndexContext = createContext<PageContextType>({
  currentPage: 1,
  setCurrentPage: () => {} // una función vacía como valor por defecto
});


const UpMain = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pagerRef, setPagerRef] = useState<PagerView | null>(null);
  
  
    return (
      <CurrentPageIndexContext.Provider value={{ currentPage, setCurrentPage }}>
        <Box bg='$UpBackground100' flex={1}>
          <PagerView
            ref={ref => setPagerRef(ref)}
            style={styles.container}
            initialPage={0}
            onPageSelected={(e) => {
              setCurrentPage(e.nativeEvent.position);
            }}
          >
            <View style={styles.page} key="1">
              <Text>First page</Text>
              <Text>Swipe ➡️</Text>
            </View>
            <View style={styles.page} key="2">
              <Text>Second page</Text>
            </View>
            <View style={styles.page} key="3">
              <Text>Third page</Text>
            </View>
          </PagerView>
        </Box>
        <BottomTabs pagerRef={pagerRef} /> 
      </CurrentPageIndexContext.Provider>
    );
  };
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomTabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#ccc'
    },
    tab: {
      fontSize: 16,
    },
    activeTab: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue' //o el color que prefieras para la pestaña activa.
    }
  });
  
  export default UpMain;