import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./src/Navigation/AppNavigator"
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Store from './src/Redux/Store';
import { Provider } from "react-redux";

export default function App() {
  const persistor = persistStore(Store);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>

        <View style={styles.container}>
          <AppNavigator />

        </View >
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
