import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { signOut } from '../../shared/loginUtils';

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button 
          onPress={() => {
            signOut();
            this.props.client.resetStore();
          }}
          title="Logout"
        />
      </View>
    );
  }
}

export default Settings;