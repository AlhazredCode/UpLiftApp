import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { 
  Box, 
  Center, 
  Text, 
  Button, 
  ButtonText 
} from '../../../components/index';
import Logo from '../../../assets/SVG/Logo';
// Obtener las dimensiones de la pantalla
const { width: ww, height: wh } = Dimensions.get("window");

interface WelcomeProps {
  navigation: any;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Box flex={1} bg="$UpBackground100">
        <Center h={wh}> 
        
          <Box w={ww * 0.8} px={ww * 0.05} py={wh * 0.02} rounded={12} bg="$UpBackground300"> 
          <Center>
            <Logo size={1} fill='white'/>
          </Center>
            
            <Text textAlign="center" mt={wh * 0.025} fontSize={ww * 0.035}>
            ELEVATING YPUR CAR EXPERIENCE
            </Text>
            <Box my={wh * 0.02}>
              <Button 
                onPress={() => navigation.navigate("Login")} 
                mb={wh * 0.015} 
                size="lg"
                bg='$UpPrimary400'
              >
                <ButtonText textAlign="center" color='$UpPrimary'>Login</ButtonText>
              </Button>
              <Button 
                onPress={() => navigation.navigate("Register")}
                mb={wh * 0.01} 
                size="lg"
                 bg='$UpPrimary100'
              >
                <ButtonText textAlign="center" color='$UpPrimary500'>Sign Up</ButtonText>
              </Button>
            </Box>
          </Box>
        </Center>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default Welcome;