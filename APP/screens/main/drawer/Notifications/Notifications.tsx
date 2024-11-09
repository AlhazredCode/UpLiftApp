import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import React, { useState } from 'react';
import { 
  Box, 
  Center, 
  Text,
  HStack,
  VStack,
  Avatar,
  AvatarFallbackText,
  Divider,
} from '../../../../../components/index'; 
import { useColors } from '../../../../context/UseColors';

import notificationsData from '../../../../api/Notifications.json';


interface Notification {
  id: number;
  title: string;
  description: string;
  image: string;
  timestamp: string;
  read: boolean;
}

const { width: ww, height: wh } = Dimensions.get("window");

const styles = StyleSheet.create({
  notificationContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
  },
  notificationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#999',
  },
});


const Notifications: React.FC = () => {

    const colors = useColors();

  const [notifications, setNotifications] = useState<Notification[]>(notificationsData);

  const renderNotification = ({ item }: { item: Notification }) => {
    return (
      <Box style={styles.notificationContainer} key={item.id}>
        <HStack style={styles.notificationHeader}>
            <Avatar bg="$UpBackground300" size="md"  />  
            <AvatarFallbackText>
              Alvaro Celorio
            </AvatarFallbackText>
            <VStack flex={1}> 
              <Text style={styles.notificationTitle} fontWeight={item.read ? "normal" : "bold"}>
                {item.title}
              </Text>
              <Text style={styles.notificationDescription}>
                {item.description}
              </Text>
            </VStack>
        </HStack>

        <HStack style={styles.notificationFooter}>
          <Text style={styles.notificationTimestamp}>
            {new Date(item.timestamp).toLocaleString()}  
          </Text>
        </HStack>
      </Box>
    );
  };

  return (
     <Box flex={1} bg="$UpBackground100" p={4}> 
        <Text fontSize="$xl" fontWeight="bold" mb={4}>Notifications</Text>

        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id.toString()}
        />
     </Box>
  );
};

export default Notifications;
