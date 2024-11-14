import { Dimensions } from 'react-native';
import React from 'react';
import { Box, Button, ButtonGroup, Icon } from '../../../components';
import { AntDesign } from '@expo/vector-icons';
import { useColors } from '../../context/UseColors';
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
  pagerRef: React.RefObject<PagerView>;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const BottomTabs: React.FC<BottomTabsProps> = ({ pagerRef, setCurrentPage, currentPage }) => {
  const colors = useColors();

  const handleTabPress = (index: number) => {
    if (pagerRef.current) {
      pagerRef.current.setPage(index);
      setCurrentPage(index);
    }
  };

  return (
    <Box sx={{ position: 'absolute', bottom: 0, mb: wh * 0.04, width: '100%' }} justifyContent="center">
      <ButtonGroup justifyContent="center">
        {[0, 1, 2].map((index) => (
          <Button
            key={index}
            w="30%"
            h={ww * 0.1}
            size="md"
            variant="link"
            borderColor={currentPage === index ? colors.UpPrimary100 : colors.UpPrimary400}
            onPress={() => handleTabPress(index)}
          >
            <Icon as={() => {
              switch (index) {
                case 0: return <HomeIcon active={currentPage === index} />;
                case 1: return <CarIcon active={currentPage === index} />;
                case 2: return <NotificationsIcon active={currentPage === index} />;
                default: return null; // Manejar casos por defecto si es necesario
              }
            }} />
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default BottomTabs;