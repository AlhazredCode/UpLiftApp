import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { 
  Box, 
  Center, 
  Text, 
  Button, 
  ButtonText 
} from '../../../components/index';
import AppLogo from '../../../assets/SVG/AppLogo';
// Obtener las dimensiones de la pantalla
const { width: ww, height: wh } = Dimensions.get("window");

interface WelcomeProps {
  navigation: any;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Box flex={1} bg="$BottleGray8">
        <Center h={wh}> 
        
          <Box w={ww * 0.8} px={ww * 0.05} py={wh * 0.02} rounded={12} bg="$BottleGray6"> 
          <Center>
            <AppLogo size={0.4} fill='white'/>
          </Center>
            <Text textAlign="center" my={wh * 0.005} fontSize={ww * 0.06}> 
              Opus One?
            </Text>
            <Text textAlign="center" my={wh * 0.005} fontSize={ww * 0.035}>
            THE FUTURE BAR MANAGEMENT
            </Text>
            <Box my={wh * 0.02}>
              <Button 
                onPress={() => navigation.navigate("Login")} 
                mb={wh * 0.015} 
                size="lg"
                bg='$BottleGray3'
              >
                <ButtonText textAlign="center" color='$BottleGray2'>Login</ButtonText>
              </Button>
              <Button 
                onPress={() => navigation.navigate("Register")}
                mb={wh * 0.01} 
                size="lg"
                 bg='$BottleGray2'
              >
                <ButtonText textAlign="center" color='$BottleGray7'>Sign Up</ButtonText>
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