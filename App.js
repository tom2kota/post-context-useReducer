import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    HOME: IndexScreen,
  },
  {
    initialRouteName: 'HOME',
    defaultNavigationOptions: {
      title: 'HOMEPAGE | Blog Post List',
    },
  }
);
const App = createAppContainer(navigator);

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
);
