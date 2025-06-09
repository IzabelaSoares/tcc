
import "./global.css";
import { Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
   <>
   {/* Container principal com bg-background e text-default */}
    <View className="flex-1 bg-background p-4 mt-10">
      
      {/* Botão Primário - bg-primary com text-white */}
      <TouchableOpacity className="bg-primary py-3 px-6 rounded-lg mb-4">
        <Text className="text-white text-center font-bold">Botão Primário</Text>
      </TouchableOpacity>

      {/* Botão Secundário - bg-secondary com text-primary-darker */}
      <TouchableOpacity className="bg-secondary py-3 px-6 rounded-lg mb-4">
        <Text className="text-primary-darker text-center font-bold">Botão Secundário</Text>
      </TouchableOpacity>

      {/* Card - border-dark (usando border-primary-dark) */}
      <View className="border border-primary-dark rounded-lg p-4 mb-4 bg-white">
        <Text className="text-default">Conteúdo do Card</Text>
      </View>

      {/* Mensagem de erro - text-danger */}
      <Text className="text-danger mb-4">Mensagem de erro</Text>

      {/* Exemplo usando cores alternativas */}
      <View className="bg-primary-dark p-3 rounded">
        <Text className="text-inverted">Texto em fundo escuro</Text>
      </View>
    </View>
   </>
  );
}
