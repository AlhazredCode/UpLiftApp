import { View , Dimensions} from 'react-native'
import React from 'react'
import { Box, VStack, HStack, Pressable, Text, Divider } from '../../../../../components';

const { width: ww, height: wh } = Dimensions.get('window');

const Notifications = () => {
  return (
    <Box sx={{flex : 1,  p: ww * 0.05 , bg: '$UpBackground400'}}>
        <VStack space='md'>
            <Text sx={{ fontSize: 18, fontWeight: '800' }}>Your Notifications</Text>
            <Box sx={{ bg: '$UpBackground200', p: ww * 0.05, rounded: 8 }}>

            </Box>
        </VStack>
        <Divider sx={{ my: ww * 0.05 }}/>
       
    </Box>
  )
}

export default Notifications