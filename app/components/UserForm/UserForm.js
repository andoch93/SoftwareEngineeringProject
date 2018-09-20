import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, StyleSheet } from 'react-native';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (

      //Enter City Text Box
      <View style={{padding: 10}}>
        <TextInput
        style={styles.textbox}
        placeholder="Enter City"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <TextInput
        style={styles.textbox}
        placeholder="Enter Number of Deals"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />

        <Text style={{padding: 10, fontSize: 42}}>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
        <Button title="Submit" onPress={() => this.props.submitMethod()}></Button>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  textbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 40,
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('UserForm', () => UserForm);
