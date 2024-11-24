import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="calculator"
        options={{
          title: "Calculadora",
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />
    </Stack>
  );
}