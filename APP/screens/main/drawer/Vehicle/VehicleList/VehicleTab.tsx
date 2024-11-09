import { View , Dimensions} from 'react-native'
import React from 'react'
import { Box, VStack, HStack, Pressable, Text, Divider } from '../../../../../../components';

const { width: ww, height: wh } = Dimensions.get('window');

const VehicleTab = () => {
  return (
    <Box sx={{flex : 1,  p: ww * 0.05 }}>
        <VStack space='md'>
            <Text sx={{ fontSize: 18, fontWeight: '800' }}>Your Vehicles</Text>
            <Box sx={{ bg: '$UpBackground200', p: ww * 0.05, rounded: 8 }}>

            </Box>
        </VStack>
        <Divider sx={{ my: ww * 0.05 }}/>
        <Box sx={{position: 'absolute', bottom: 0, left: 0 , width: ww , justifyContent: 'center', p: ww * 0.05, mb: ww * 0.025}}>
            <Pressable 
            >
                <HStack space='md' sx={{ p: ww * 0.025, rounded: 8 , justifyContent: 'center', bg: '$UpPrimary200' , alignItems: 'center'}}>
                    <Text sx={{ fontSize: 18, fontWeight: '800' , color: '$UpSecondary500'}} >Add a Vehicle</Text>
                </HStack>
            </Pressable>
        </Box>
    </Box>
  )
}

export default VehicleTab