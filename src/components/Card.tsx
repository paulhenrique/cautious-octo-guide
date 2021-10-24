import React from 'react'
import * as RN from 'react-native';
import { Character } from '../services/api';
import styled from 'styled-components/native';
interface CardProps {
  character: Character;
}

const StyledCard = styled.View`
  background: #00220E;
  border-radius: 15px;
  overflow:hidden;
  margin: 10px 0;
`;

const CardTitle = styled.Text`
color:white;
font-size:18px;
padding: 10px;
`;

const CardDescription = styled.Text`
color:white;
font-size:14px;
padding: 10px;
`;

const Card: React.FunctionComponent<CardProps> = ({ character }) => {
  return (
    <StyledCard>
      <RN.Image style={{ width: '100%', height: 150 }} source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }} />
      <CardTitle>{character.name}</CardTitle>
      <CardDescription>{character.description}</CardDescription>
    </StyledCard>
  )
}

export default Card
