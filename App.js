import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-paper';

const App = () => {
  const [countryInput, setCountryInput] = useState('');
  const [average, setAverage] = useState('-');
  const [barWidth] = useState(new Animated.Value(0));

  const data = [
    ['Pakistan', 23],
    ['Pakistan', 127],
    ['India', 3],
    ['India', 71],
    ['Australia', 31],
    ['India', 22],
    ['Pakistan', 81],
  ];

  useEffect(() => {
    if (countryInput) {
      const countryData = data.filter(entry => entry[0] === countryInput);
      if (countryData.length > 0) {
        const totalScore = countryData.reduce((acc, curr) => acc + curr[1], 0);
        const avgScore = totalScore / countryData.length;
        setAverage(avgScore);
        Animated.timing(barWidth, {
          toValue: avgScore * 2, // Assuming 2px per average score
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else {
        setAverage('-');
        Animated.timing(barWidth, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    } else {
      setAverage('-');
      Animated.timing(barWidth, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [countryInput]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cricket Scores</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Country Name"
        value={countryInput}
        onChangeText={setCountryInput}
      />
      <Card style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.country}>{countryInput}</Text>
          <Text style={styles.average}>{average}</Text>
          <View style={styles.barContainer}>
            <Animated.View style={[styles.bar, {width: barWidth}]} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  country: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  average: {
    width: 70,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  barContainer: {
    flex: 1,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginLeft: 10,
  },
  bar: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
});

export default App;
