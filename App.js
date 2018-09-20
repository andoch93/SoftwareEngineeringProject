import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Button, Linking} from 'react-native';
import UserForm from './app/components/UserForm/UserForm';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      formFilled: false,
    }
  }

  submitInfo(){

    this.setState({formFilled: true});

    return fetch('https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&division_id=denver&offset=0&limit=100')
      .then((response) => response.json() )
      .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson.deals,
          })

      })

      .catch((error) => {
        console.log(error)
      });
  }

  render() {

      if(!this.state.formFilled){
        return (
          <View>
            <UserForm submitMethod={() => this.submitInfo()} />
        </View>
      )
      }


      else if(this.state.isLoading) {
        return (
          <View style={styles.container}>
              <ActivityIndicator />
          </View>
        )
      } else {

            let movies = this.state.dataSource.map((val, key) => {
              return <View key={key} style={styles.item}>
                          <Text>{val.title}</Text>
                          <Button title={val.id} onPress={ () => Linking.openURL(val.dealUrl)}></Button>
                    </View>
            })

        return (

          <View style={styles.container}>

              {movies}

          </View>

        );

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
  },
});
