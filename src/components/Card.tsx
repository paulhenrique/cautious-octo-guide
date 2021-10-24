import React from 'react'
import * as RN from 'react-native';
import { Character } from '../services/api';
interface CardProps {
  children: React.ReactNode;
  character: Character;
}

const Card: React.FunctionComponent<CardProps> = ({ children, character }) => {
  return (
    <RN.View>
      <RN.Text>{character.name}</RN.Text>
    </RN.View>
  )
}

export default Card
