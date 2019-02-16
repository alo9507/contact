import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';

import { signOut } from '../../shared/loginUtils';

class Settings extends Component {

  state = {
    settings: [
      {setting: 'Visibility Settings', id: '123'},
      {setting: 'Visibility Settings', id: '124'},
      {setting: 'Visibility Settings', id: '125'},
      {setting: 'Visibility Settings', id: '126'},
      {setting: 'Visibility Settings', id: '127'},
      {setting: 'Visibility Settings', id: '128'},
      {setting: 'Visibility Settings', id: '129'}
  ]
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList 
              data={this.state.settings}
              renderItem={({item, index}) => (
              <ListItem
                onPress={() => navigation.navigate(`${this.state.settings[index]}`)}
              >
                <Body>
                  <Text style={{color: "#3DE9E3"}}>TESTING</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" style={{color: "#3DE9E3"}}/>
                </Right>
              </ListItem>
            )}
              keyExtractor={item => item.id}
          />
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