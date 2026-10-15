import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './app/HomeScreen';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}
