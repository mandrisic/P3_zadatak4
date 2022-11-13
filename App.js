import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
    <View style={styles.img}>
    <Image
          style={styles.logo}
          source={require('./assets/icons8-goals-96.png')}
        />
    </View>
    <Text style={styles.heading}>Course Goals</Text>
     <Text style={styles.text}>Write your goals for this course:</Text>
      <GoalInput onAddGoal={addGoalHandler} style={styles.goal}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}style={styles.goal}
        renderItem={itemData => <GoalItem title={itemData.item.value}  />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    textAlign: "center",
    justifyContent: "center",

  },
  
  img: {
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },

  text: {
    fontFamily: "Lucida Grande",
    color: "grey",
    margin: 20,
  },
  goal: {
    color: "red",
  },
});