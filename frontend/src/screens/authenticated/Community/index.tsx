import { View, Text } from 'react-native';
import { LogoTitle } from '../../../components/logo';

export default function Community() {
  return (
    <View className="flex-1 justify-center items-center bg-primary" >
      <LogoTitle textColor="text-white" />
      <Text>Community</Text>
    </View>
  );
}
