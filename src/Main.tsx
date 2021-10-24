import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api, { Response, Character } from './services/api';

export default function Main() {
  const [data, setData] = React.useState<Character[]>([]);
  const getData = async () => {
    try {
      const { data: { data: { results } } } = await api.get<Response>('characters', {
        params: {
          limit: 8,
          offset: 0
        }
      });
      setData(results);
    } catch (err) {
      console.error('erro', err);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {data.map((char) => <Text style={{ backgroundColor: 'red', color: 'white' }}>({char?.name})</Text>)}
      <StatusBar style="auto" />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
