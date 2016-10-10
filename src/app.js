import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pdfUrl: 'http://192.168.2.105:8080/1.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=IxzPhx1cLQA'
    }
  }

  handleClick(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      } else {
        console.log(`Do not know how to open pdfUrl ${url}`)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Download and Video Demo
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleClick(this.state.pdfUrl)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Open PDF in browser</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.videoContainer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoPreview: {
    width: 300,
    height: 300,
  }
});
