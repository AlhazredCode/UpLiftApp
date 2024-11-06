import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { Box, Button, ButtonGroup, Icon } from '../../../components';
import { AntDesign } from '@expo/vector-icons';
import { useColors } from '../../context/UseColors';
import { CurrentPageIndexContext } from './UpMain';
import PagerView from 'react-native-pager-view';

const { width: ww, height: wh } = Dimensions.get('window');

const HomeIcon = ({ active }: { active: boolean }) => {
  const colors = useColors();
  const iconColor = active ? colors.UpPrimary100 : colors.UpSecondary500;
  return <AntDesign name="minussquareo" size={ww * 0.06} color={iconColor} />;
};

const CarIcon = ({ active }: { active: boolean }) => {
  const colors = useColors();
  const iconColor = active ? colors.UpPrimary100 : colors.UpSecondary500;
  return <AntDesign name="car" size={ww * 0.06} color={iconColor} />;
};

const NotificationsIcon = ({ active }: { active: boolean }) => {
  const colors = useColors();
  const iconColor = active ? colors.UpPrimary100 : colors.UpSecondary500;
  return <AntDesign name="bulb1" size={ww * 0.06} color={iconColor} />;
};

interface BottomTabsProps {  
    pagerRef: PagerView | null;
  }

const BottomTabs: React.FC<BottomTabsProps> = ({ pagerRef }) => { 
  const { currentPage, setCurrentPage } = useContext(CurrentPageIndexContext);
  const colors = useColors();

  return (
    <Box sx={{ position: 'absolute', bottom: 0, mb: wh * 0.04, width: '100%' }} justifyContent="center">
    <ButtonGroup justifyContent="center">
      <Button
        w="30%"
        h={ww * 0.1}
        size="md"
        variant="link"
        borderColor={currentPage === 0 ? colors.UpPrimary100 : colors.UpPrimary400}
        onPress={() => setCurrentPage(0)}
      >
        <Icon as={() => <HomeIcon active={currentPage === 0} />} />
      </Button>
      <Button
        w="30%"
        h={ww * 0.1}
        size="md"
        variant="link"
        borderColor={currentPage === 1 ? colors.UpPrimary100 : colors.UpPrimary400}
        onPress={() => setCurrentPage(1)}
      >
        <Icon as={() => <CarIcon active={currentPage === 1} />} /> 
      </Button>
      <Button
        w="30%"
        h={ww * 0.1}
        size="md"
        variant="link"
        borderColor={currentPage === 2 ? colors.UpPrimary100 : colors.UpPrimary400}
        onPress={() => setCurrentPage(2)}
      >
        <Icon as={() => <NotificationsIcon active={currentPage === 2} />} /> 
      </Button>
    </ButtonGroup>
  </Box>
  );
};

export default BottomTabs;
