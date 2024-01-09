import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ScannerConfirmation from './ScannerConfirmation';

// const reducerFunc = (state, action) => {
//   switch (action.type) {
//     case 'hello':
//       return {text: action.payload};
//     case 'bye':
//       return {text: action.payload};
//     case 'gore pedaret':
//       return {text: action.payload};
//     case 'boro bemir':
//       return {text: action.payload};
//     default:
//       return state;
//   }
// };

const App = () => {
  // const [display, dispatch] = useReducer(reducerFunc, {text: 'INITIALIZED'});
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstPage} />
        <Stack.Screen name="Bitch" component={SecondPage} />
        <Stack.Screen name="ConfirmScan" component={ScannerConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
