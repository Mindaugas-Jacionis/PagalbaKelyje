import React, { Component } from 'react';
import { StyleSheet, View, DatePickerIOS } from 'react-native';
import moment from 'moment';

class MainScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      date_time: moment(),
      date: '2017-04-29',
      time: '17:00'
    }
  }

  onDateChange(date) {
    const d = moment(date);

    this.setState({
      date_time: d,
      date: d.format('YYYY-MM-DD'),
      time: d.format('HH:mm')
    });
  }

  render() {
    const { date, time, date_time } = this.state;
    const a = new Date();

    return (
      <View style={styles.container}>
        <DatePickerIOS
          minuteInterval={30}
          date={date_time.toDate()}
          mode='datetime'
          onDateChange={(date) => this.onDateChange(date)}
          timeZoneOffsetInMinutes={30}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default MainScreen;
