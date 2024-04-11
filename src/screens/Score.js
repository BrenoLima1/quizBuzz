import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import tw from 'twrnc';

const Score = ({navigation}) => {
  const route = useRoute();
  const { score } = route.params;

  return (
    <View style={tw`flex-1 items-center`}>
      <Image
        source={require('../../assets/Images/Luff_ gear_5_throne.jpg')}
        style={tw`h-3/6 aspect-ratio-1.2`}
      />
     <Text style={styles.congratulationsText}>
    {score > 40 && "Congratulations! "}You scored {score} {score > 0 && "points!"}
    </Text>

      <Pressable style={tw`bg-purple-500 p-2 rounded-md mt-6`}>
        <Text style={tw`text-white text-lg text-center font-bold`}
        onPress={() => {navigation.navigate("Splash")}}>🦜Play Again🏴‍☠️</Text>
      </Pressable>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  congratulationsText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
