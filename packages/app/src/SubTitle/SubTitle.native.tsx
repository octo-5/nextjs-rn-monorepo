import React from 'react'
import { Platform } from 'react-native'
import Styled from 'styled-components/native'

const Text = Styled.Text`
  color: white;
  font-size: 24px;
`

export default function SubTitle() {
  return <Text>{`On ${Platform.OS.toUpperCase()}`}</Text>
}
