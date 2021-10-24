import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api, { Response, Character } from './services/api';
import Card from './components/Card';
import styled from 'styled-components/native';

const ContainerCards = styled.ScrollView`
background-color:#001609;
height: 100%;
padding:20px;
`;

const HeaderText = styled.Text`
  font-size:32px;
  margin-top:32px;
  color:white;
  margin-bottom:20px;
`;
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
    <>
      <ContainerCards>
        <HeaderText>Marvel Strike Team</HeaderText>
        {data.map((char) => <Card character={char} />)}
      </ContainerCards>
    </>
  );
}
