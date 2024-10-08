import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const CountryInput = ({onCountryChange}) => {
  const [country, setCountry] = useState('');

  const handleChange = text => {
    setCountry(text);
    onCountryChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter country name"
        value={country}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
});

export default CountryInput;
