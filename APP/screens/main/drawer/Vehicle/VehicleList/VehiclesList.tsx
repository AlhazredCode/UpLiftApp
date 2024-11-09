import { View, Dimensions } from 'react-native';
import React , { useState } from 'react';
import { Box, VStack, HStack, Pressable, Text } from '../../../../../../components';
import VehicleTab from './VehicleTab';
import MembershipTab from './MembershipTab';

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;
const VehiclesList = () => {
  const [activeTab, setActiveTab] = React.useState('VehicleTab');

  const renderContent = () => {
    switch (activeTab) {
      case 'VehicleTab':
        return <VehicleTab />;
      case 'MembershipTab':
        return <MembershipTab />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ flex: 1, bg: '$UpBackground100' }}>
      <HStack justifyContent="space-between" sx={{ bg: '$UpBackground300', px: ww * 0.1 , py: wh * 0.015 }}>
        <Pressable onPress={() => setActiveTab('VehicleTab')}>
          <Text sx={{ color: activeTab === 'VehicleTab' ? '$UpPrimary100' : '$UpSecondary500' }}>
            Vehicles
          </Text>
        </Pressable>
        <Pressable onPress={() => setActiveTab('MembershipTab')}>
          <Text sx={{ color: activeTab === 'MembershipTab' ? '$UpPrimary400' : '$UpSecondary500' }}>
            Memberships
          </Text>
        </Pressable>
      </HStack>
      <VStack sx={{ flex: 1 }}>
        {renderContent()}
      </VStack>
    </Box>
  );
};

export default VehiclesList;
