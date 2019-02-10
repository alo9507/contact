import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class MinMaxTextInput extends Component {
  static defaultProps = {
    minlength: 0,
    maxLength: 999
  }

  renderMessage = () => {
    const { minLength, maxLength, value } = this.props;

    var len = value.length ? value.length : 0;
    var message = this.getCharacterMessage();

    // user has max number of characters
    if (len === maxLength) { return <View /> }

    // user has more than minimum number of characters
    if (len >= minLength) { 
      msg = this.getCharactersRemainingMessage(maxLength - len);
      return <Text style={styles.neutral}>{message}</Text>
    }

    // user does not have enough characters but hasn't started typing yet
    if (len < minLength && len == 0) {
      msg = this.getCharacterMessage(minLength);
      return <Text style={styles.neutral}>{message}</Text>
    }

    // user does not have enough characters and has started typing
    if (len < minLength && len > 0) {
      message = this.getMoreCharactersMessage(minLength - len);
      return <Text style={styles.invalidText}>{message}</Text>
    }

    return <View />
  }

  // x more characters needed
  getMoreCharactersMessage = (numCharacters) => {
    return `${numCharacters} more ${this.getCharacter(numCharacters)} needed`
  }

  // x characters remaining
  getCharactersRemainingMessage = (numCharacters) => {
    return `${numCharacters} ${this.getCharacter(numCharacters)} remaining`
  }
  
  // x character needed
  getCharacterMessage = (numCharacters) => {
    return `${numCharacters} ${this.getCharacter(numCharacters)} needed`
  }

  getCharacter = (numCharacters) => {
    return (numCharacters === 1)
    ? "character"
    : "characters"
  }

  render() {
    return (
      <View>
        <TextInput {...this.props} />
        {this.renderMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  neutral: {
    paddingTop: 5
  },
  invalidText: {
    paddingTop: 5,
    color: "orange"
  }
})
