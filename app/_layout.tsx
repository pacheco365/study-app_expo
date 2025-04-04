import { Stack } from "expo-router";
import './globals.css';

// a função RootLayout aqui está sendo usada para escrever o layout da aplicação
export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name= "(tabs)"
      options = {{ headerShown: false}}
    />
    <Stack.Screen
      name="movies/[id]"
      options={{ headerShown: false}}
    />
  </Stack>;
}
