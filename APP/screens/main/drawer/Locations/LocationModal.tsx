
// AddLocationModal.tsx (new component)
import React, { useState } from 'react';
import { Box, Input, InputField, Button, Text, FormControl } from '../../../../../components';
import { Location } from '../../../../types/Location';
import { Dimensions } from 'react-native';

interface AddLocationModalProps {
  onClose: () => void;
  onAddLocation: (newLocation: Location) => void;
}
const { width: ww, height: wh } = Dimensions.get("window");

const LocationModal: React.FC<AddLocationModalProps> = ({ onClose, onAddLocation }) => {
    const [newLocationName, setNewLocationName] = useState('');
    const [newLocationAddress, setNewLocationAddress] = useState('');
    const [newLocationLatitude, setNewLocationLatitude] = useState<number | null>(null);
    const [newLocationLongitude, setNewLocationLongitude] = useState<number | null>(null);

    const handleLocalAddLocation = () => {

        if (newLocationName && newLocationAddress && newLocationLatitude !== null && newLocationLongitude !== null ) {
            const newLocation: Location = {
            id: 0, // The id will be handled in the parent
            name: newLocationName,
            address: newLocationAddress,
            latitude: newLocationLatitude,
            longitude: newLocationLongitude,
            };

            onAddLocation(newLocation)

            // Reset  Form
            setNewLocationName('');
            setNewLocationAddress('');
            setNewLocationLatitude(null);
            setNewLocationLongitude(null);
        }
    };


  return (
    < Box sx={{ flex: 1, p: ww * 0.05, bg: '$UpBackground200' }}>
    <Text sx={{ fontSize: 18, fontWeight: '800', marginBottom: 20 }}>Add New Location</Text>

    <Input>
      <InputField
        type="text"
        placeholder="Location Name"
        placeholderTextColor="$UpSecondary500"
        value={newLocationName}
        onChangeText={setNewLocationName}
      />
    </Input>


    <Input mt={4}>
      <InputField
        type="text"
        placeholder="Address"
        placeholderTextColor="$UpSecondary500"
        value={newLocationAddress}
        onChangeText={setNewLocationAddress}
      />
    </Input>

    <Input mt={4}>
      <InputField
        type="text"  // You might want to use a numeric keyboard here
        placeholder="Latitude"
        placeholderTextColor="$UpSecondary500"
        value={newLocationLatitude === null ? '' : newLocationLatitude.toString()}
        onChangeText={(text) => setNewLocationLatitude(parseFloat(text) || null)}
        keyboardType="numeric"
      />
    </Input>

    <Input mt={4}>
      <InputField
        type="text" // Numeric keyboard here as well
        placeholder="Longitude"
        placeholderTextColor="$UpSecondary500"
        value={newLocationLongitude === null ? '' : newLocationLongitude.toString()}
        onChangeText={(text) => setNewLocationLongitude(parseFloat(text) || null)}
        keyboardType="numeric"
      />
    </Input>


    <Button onPress={handleLocalAddLocation} mt={4} bg="$UpPrimary200">
      <Text sx={{ color: 'white' }}>Add Location</Text>
    </Button>
    <Button onPress={onClose} mt={4} bg="$UpNeutral300">
      <Text>Cancel</Text>
    </Button>
  </Box>
  );
};



export default LocationModal;