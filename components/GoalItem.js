import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    marginVertical: 10,
    borderColor: '#6457ff',
    borderWidth: 1,
    borderRadius: 40
  }
});

export default GoalItem;