import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.screen}>
      {/* Logo */}
      <Text style={styles.logoText}>facebook</Text>

      {/* Register card */}
      <View style={styles.card}>
        <Text style={styles.title}>Create a new account</Text>
        <Text style={styles.subtitle}>It's quick and easy.</Text>

        <View style={styles.divider} />

        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="#8A8D91"
        />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#8A8D91"
        />
        <TextInput
          style={styles.input}
          placeholder="New password"
          placeholderTextColor="#8A8D91"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="#8A8D91"
          secureTextEntry
        />

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Link href="/login" style={styles.link}>
            Already have an account?
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F2F5" },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logoText: {
    fontSize: 48,
    fontWeight: "800",
    color: "#1877F2",
    letterSpacing: -1.5,
    marginBottom: 20,
  },

  card: {
    width: "100%",
    maxWidth: 432,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: { fontSize: 26, fontWeight: "700", color: "#1C1E21", textAlign: "center" },
  subtitle: { fontSize: 15, color: "#606770", textAlign: "center", marginTop: 4 },
  divider: { height: 1, backgroundColor: "#DADDE1", marginVertical: 16 },

  input: {
    borderWidth: 1,
    borderColor: "#DDDFE2",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#1C1E21",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },

  registerButton: {
    backgroundColor: "#42B72A",
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 4,
  },
  registerText: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },

  footer: { alignItems: "center", marginTop: 18 },
  link: { color: "#1877F2", fontSize: 16 },
});