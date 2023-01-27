import { RouteProp } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routers/_main";

export type routeStackMain = RouteProp<RootStackParamList>;

export type navigationStackMain =
  NativeStackScreenProps<RootStackParamList>["navigation"];
