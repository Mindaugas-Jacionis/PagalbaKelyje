import React, { Component } from 'react';
import { StyleSheet, Text, ListView, TouchableOpacity } from 'react-native';

const data = [
  { id: 0, text: 'Row 0', selected: false },
  { id: 1, text: 'Row 1', selected: false },
  { id: 2, text: 'Row 2', selected: false },
  { id: 3, text: 'Row 3', selected: false },
  { id: 4, text: 'Row 4', selected: false }
];

class MultiSelectListScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => true
    });
    this.state = {
      dataSource: ds.cloneWithRows(data),
      data: data
    }
  }

  onSelect(id) {
    const { data, dataSource } = this.state;
    const newData =  data.map(el => {
      let returnData = el;
      if (el.id === id) {
        returnData.selected = !returnData.selected;
      }

      return returnData;
    });

    this.setState({ data: newData });

    setTimeout(() => {
      this.setState({ dataSource: dataSource.cloneWithRows(newData) });
    }, 500);
  }

  renderRow({ id, text, selected }) {
    return (
      <TouchableOpacity
        style={[styles.row, selected && styles.selected ]}
        onPress={() => this.onSelect(id)}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { dataSource } = this.state;

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(data) => this.renderRow(data)}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderColor: '#3e3e3e'
  },

  selected: {
    backgroundColor: '#239d1a'
  },

  text: {
    fontSize: 16,
    lineHeight: 35,
    fontWeight: '600',
    color: '#3e3e3e'
  }
});

export default MultiSelectListScreen;
