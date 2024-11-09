import { View, Dimensions, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Box, VStack, HStack, Pressable, Text, Divider, Button, FormControl, Input, InputField } from '../../../../../components';
import locationsData from '../../../../api/Locations';
import { Location } from '../../../../types/Location';
import LocationModal from './LocationModal';
const { width: ww } = Dimensions.get('window');

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>(locationsData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newLocationName, setNewLocationName] = useState('');
  const [newLocationAddress, setNewLocationAddress] = useState('');
  //Add newLocationLatitude and newLocationLongitude states
  const [newLocationLatitude, setNewLocationLatitude] = useState<number | null>(null);
  const [newLocationLongitude, setNewLocationLongitude] = useState<number | null>(null);

  const handleAddLocation = () => {

      // Validate latitude and longitude if necessary
    if (newLocationName && newLocationAddress && newLocationLatitude !== null && newLocationLongitude !== null ) {
      const newLocation: Location = {
        id: locations.length + 1,
        name: newLocationName,
        address: newLocationAddress,
        latitude: newLocationLatitude,
        longitude: newLocationLongitude,
      };
      setLocations([...locations, newLocation]);
      setNewLocationName('');
      setNewLocationAddress('');
      setNewLocationLatitude(null);
      setNewLocationLongitude(null);
      setModalVisible(false);
    }
  };

  return (
    <Box sx={{ flex: 1, p: ww * 0.05, bg: '$UpBackground200' }}>
      <VStack space='md'>
        <Text sx={{ fontSize: 18, fontWeight: '800' }}>Your Locations</Text>
        <VStack space="sm">
          {locations.map((location) => (
            <Box key={location.id} sx={{ bg: '$UpBackground100', p: ww * 0.05, rounded: 8 }}>
              <Text>{location.name}</Text>
              <Text>{location.address}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>

      <Divider sx={{ my: ww * 0.05 }} />
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: ww, justifyContent: 'center', p: ww * 0.05, mb: ww * 0.025 }}>
        <Pressable onPress={() => setModalVisible(true)}>
          <HStack space='md' sx={{ p: ww * 0.025, rounded: 8, justifyContent: 'center', bg: '$UpPrimary200', alignItems: 'center' }}>
            <Text sx={{ fontSize: 18, fontWeight: '800', color: '$UpSecondary500' }}>Add Location</Text>
          </HStack>
        </Pressable>
      </Box>


      <Modal visible={isModalVisible} animationType="slide">
      <LocationModal 
        onClose={() => setModalVisible(false)}  
        onAddLocation={handleAddLocation}      
    />
      </Modal>


    </Box>
  );
};

export default Locations;