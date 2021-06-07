import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStack from './navigation/mainStack';
import {Colors} from './theme';
import {store, persistor} from './store';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          animated
          backgroundColor={Colors.lightGray}
          barStyle="dark-content"
        />
        <SafeAreaProvider>
          <MainStack />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  </>
);
export default App;
