import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

export default class PostForm extends Component {
  static defaultProps = {
    post: {}
  }

  state = {
    title: this.props.title || "",
    body: this.props.body || ""
  }

  submitForm = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    })
  }

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Title</Label>
        <Input
          value={this.state.title}
          onChangeText={text => this.setState({title: text})}
        />
        </Item>
        <Item floatingLabel>
          <Label>Body</Label>
          <Input 
            multiline
            style={{...styles.textInput, width: 'auto', height: 350}}
            value={this.state.body}
            onChangeText={text => this.setState({body: text})}
          />
        </Item>
        <Button 
          title={this.props.buttonTitle}
          onPress={this.submitForm}
        />
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40
  }
})
