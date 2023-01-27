import React from "react";
import type { routeStackMain, navigationStackMain } from "../types/navigation";
import { SafeAreaView, View, Text } from "react-native";

export const Home: React.FC<{
  navigation: navigationStackMain;
  route: routeStackMain;
}> = ({ navigation, route }) => {
  return (
    <SafeAreaView className="h-screen w-screen bg-gradient-to-t from-slate-600 to-slate-300 dark:to-slate-800">
      <View className="flex justify-center items-center w-full h-full">
        <Text>A beatiful home screen :{")"}</Text>
      </View>
    </SafeAreaView>
  );
};
