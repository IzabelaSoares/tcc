import React from 'react'
import { View, Text } from 'react-native'
import { LogoTitle } from '../../../components/logo'

export default function Address() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <LogoTitle textColor="text-white" />
      <Text>Endereço</Text>
    </View>
  )
}
