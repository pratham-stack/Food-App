import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from 'react-navigation';
import FirstScreen from '../screen/firstScreen';
import SecondScreen from '../screen/secondScreen';

const screens = {
   firstScreen: {
       screen: FirstScreen
   },
   secondScreen: {
    screen: SecondScreen
   }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);