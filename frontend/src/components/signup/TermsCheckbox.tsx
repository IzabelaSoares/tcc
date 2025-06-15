import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

interface props {
    setAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>;
    acceptedTerms: boolean
}

export default function TermsCheckbox({ acceptedTerms, setAcceptedTerms }: props) {
  return (
    <TouchableOpacity
      className="flex-row items-center gap-2 mt-2"
      onPress={() => setAcceptedTerms((prev: boolean) => !prev)}
    >
      <View
        className={`w-5 h-5 rounded ${
          acceptedTerms ? "bg-green-700" : "border border-gray-400"
        }`}
      />
      <Text className="text-black-100 text-base">
        Concordo com os{" "}
        <Text className="text-blue-600 underline">termos de uso</Text>
      </Text>
    </TouchableOpacity>
  );
}
