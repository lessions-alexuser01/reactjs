var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');
var {
  Text,
  View,
  Image,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = React;

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render: function() {
    return (
        <Image style={styles.container}
          source={{uri: 'https://unsplash.com/photos/JWiMShWiF14/download'}}>

          <View style={styles.header}>
            <View style={styles.timerWrapper}>
              <Text style={styles.timer}>
                {formatTime(this.state.timeElapsed)}
              </Text>
            </View>

            <View style={styles.buttonWrapper}>
              {this.startStopButton()}
              {this.lapButton()}
            </View>
          </View>

          <View style={styles.footer}>
            {this.laps()}
          </View>
        </Image>
    )
  },
  laps: function(){
    return this.state.laps.map(function(time, index){
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    });
  },
  startStopButton: function() {
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, style]}
      >
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <TouchableHighlight
      style={styles.button}
      underlayColor="gray"
      onPress={this.handleLapPress}
      >
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },
  handleLapPress: function() {
    var lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
    console.log(this.state.laps);
  },
  handleStartPress: function() {
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }

    this.setState({startTime: new Date()});

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
    // make the background transparent so you actually see the image
    backgroundColor: 'transparent'
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timerWrapper: { // Red
    flex: 5, // takes up 5/8ths of the available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3, // takes up 3/8ths of the available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);