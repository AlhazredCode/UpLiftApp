import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Box, Text, VStack, Button, FormControl, Input, InputField, HStack, Icon, Pressable } from '../../../../components'; // Import your components
import { MaterialIcons  } from '@expo/vector-icons';



interface ProfileData {
    name: string;
    email: string;
    phone: string;
    // Add other profile fields as needed
}


const Account: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        // Initialize other profile fields
    });



    const handleSave = () => {
        // Perform API call or other logic to save the updated profile data
        console.log("Saving profile data:", profileData);  // Placeholder
        setIsEditing(false); // Switch back to view mode after saving
    };



    return (
        <Box flex={1} bg="$UpBackground100" p={5}>
            <VStack space="md" alignItems="center">
                <HStack width="100%" justifyContent="flex-end">
                    <Pressable onPress={() => {
                        isEditing ? handleSave() : setIsEditing(true)
                    }}>
                        <Text fontSize="$md" color="$UpSecondary">{isEditing ? "Save" : "Edit"}</Text>
                    </Pressable>

                </HStack>

                <Box w="90%">

                    {isEditing ? (
                        <>
                            <FormControl>
                                <Input>
                                    <InputField
                                        placeholder="Name"
                                        value={profileData.name}
                                        onChangeText={(text) => setProfileData({ ...profileData, name: text })}
                                    />
                                </Input>
                            </FormControl>
                            <FormControl mt="$4">
                                <Input>
                                    <InputField
                                        placeholder="Email"
                                        value={profileData.email}
                                        onChangeText={(text) => setProfileData({ ...profileData, email: text })}
                                        keyboardType="email-address" // Set keyboard type for email
                                    />
                                </Input>
                            </FormControl>
                            <FormControl mt='$4'>
                                <Input>
                                    <InputField
                                        placeholder="Phone"
                                        value={profileData.phone}
                                        onChangeText={(text) => setProfileData({ ...profileData, phone: text })}
                                        keyboardType="phone-pad" // Set keyboard type for phone
                                    />
                                </Input>
                            </FormControl>

                        </>


                    ) : (
                        <>
                            <Text fontSize="$lg" fontWeight="bold">{profileData.name}</Text>
                            <Text>{profileData.email}</Text>
                            <Text>{profileData.phone}</Text>
                        </>
                    )}
                    </Box>




            </VStack>
        </Box>
    );

};

export default Account;