import React from 'react';
import { View, Text } from 'magic-script-components';

class HackathonApp extends React.Component {
  render() {
    return (
      <View name='main-view' alignment={'center-center'}>
          <Text localPosition={[0, 0.05, 0]} alignment={'top-center'} textAlignment={'center'} textSize={0.1}>HackathonApp</Text>
      </View>
    );
  }
}

export default HackathonApp;
