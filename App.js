import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ListScreen from './screens/ListScreen';
import SubmitScreen from './screens/SubmitScreen';

import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {

  const Stack = createNativeStackNavigator()
  const BottomTab = createBottomTabNavigator()

  const BottomNav = () => {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen name='Surgery List' component={ListScreen} options={{tabBarIcon: () => (
          <Ionicons name="list" size='30' />)}} />
        <BottomTab.Screen name='Add Surgery' component={SubmitScreen} options={{tabBarIcon: () => (
          <Ionicons name="add-outline" size='30' />
        )}} />
      </BottomTab.Navigator>
    )
  }



  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='Nav' component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
