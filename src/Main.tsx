import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './services/api';

interface User {
  login: string;
  name: string;
  company: string;
  bio: string;
}

const defaultUser = {
  login: '',
  name: '',
  company: '',
  bio: '',
}

export default function Main() {
  const [data, setData] = React.useState<User>(defaultUser);
  const getData = async () => {
    const data = await api.get<User>('/characters');
    const userData: User = data.data;
    setData(userData);
    console.log('here', userData);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text style={{ backgroundColor: 'red', color: 'white' }}>{data.name}</Text>
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
