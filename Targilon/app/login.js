import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/login.styles";
import AppButton from "../components/MainButton";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        {/* change no 1 */}
      <Text style={styles.logo}>Or News - changed the title</Text>
      <Text style={styles.subtitle}>
        Stay update to date with the latest foo
      </Text>

      <TextInput
        placeholder="Email address"
        style={styles.input}
        // change no 2
        placeholderTextColor="#B99" //changed the color
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#B99"
      />
        {/* change no 3 */}
      <AppButton title="Login(changed button)" onPress={() => router.replace("/(tabs)")} />
    </View>
  );
}
