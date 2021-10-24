import React from 'react';
import RN from 'react-native';
import api, { Response, Character } from './services/api';
import Card from './components/Card';
import styled from 'styled-components/native';

const ContainerCards = styled.ScrollView`
`;

const Container = styled.View`
background-color:#001609;
height: 100%;
padding:20px;
padding-bottom:20px;
`;

const HeaderText = styled.Text`
  font-size:32px;
  margin-top:32px;
  color:white;
  margin-bottom:20px;
`;

const Button = styled.TouchableOpacity`
color:white;
position: absolute;
background:black;
right:0;
padding:10px;
border-radius:10px;
`;

const ButtonText = styled.Text`
color:white;
`;

const ContainerButton = styled.View`
  display:flex;
  height:50px;
`;

export default function Main() {
  const [data, setData] = React.useState<Character[]>([]);
  const [offset, setOffset] = React.useState(0);
  const getData = async () => {
    try {
      const { data: { data: { results } } } = await api.get<Response>('characters', {
        params: {
          limit: 5,
          offset
        }
      });
      setData(results);
    } catch (err) {
      console.error('erro', err);
    }
  }
  const goToNextPage = () => {
    setOffset((current) => current + 5);
    getData();
  }
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ContainerCards contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderText>Marvel Strike Team</HeaderText>
        {data.map((char) => <Card character={char} />)}
        <ContainerButton>
          <Button onPress={() => goToNextPage()}>
            <ButtonText>Next</ButtonText>
          </Button>
        </ContainerButton>
      </ContainerCards>
    </Container>
  );
}
