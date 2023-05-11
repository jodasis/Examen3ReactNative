import 'react-native-gesture-handler';
import NavigationStack from './src/navigation/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}
