import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native'
import YouTube from 'react-native-youtube'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pdfUrl: 'http://192.168.2.105:8080/1.pdf',
      videoId: 'KVZ-P-ZI6W4',
      status: null,
      quality: null,
      error: null,
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
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Download and Video Demo
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleClick(this.state.pdfUrl)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Open PDF in browser</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.videoContainer}>
          <YouTube
            ref="youtubePlayer"
            videoId={this.state.videoId} // The YouTube video ID
            play={false}           // control playback of video with true/false
            hidden={false}        // control visiblity of the entire view
            playsInline={true}    // control whether the video should play inline
            loop={false}          // control whether the video should loop when ended
            apiKey='AIzaSyARey8iiQwMkjN-3B_29_v6lrifUO0BmnU'
            onReady={(e)=>{this.setState({isReady: true})}}
            onChangeState={(e)=>{this.setState({status: e.state})}}
            onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
            onError={(e)=> {this.setState({error: e.error})}}
            onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}
            style={styles.videoPreview}
          />
        </View>
      </ScrollView>
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
    alignSelf: 'stretch',
    height: 300,
    backgroundColor: 'black',
    marginVertical: 10,
  }
});
