import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
          marginTop: 40,
        },
        headerShadowVisible: true,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
          height: 80,
          maxHeight: 80,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
