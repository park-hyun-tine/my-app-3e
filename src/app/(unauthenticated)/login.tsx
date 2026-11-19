import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.screen}>
      <View style={styles.layout}>
        {/* Logo and tagline */}
        <View style={styles.brand}>
          <Text style={styles.logoText}>facebook</Text>
          <Text style={styles.tagline}>
            Facebook helps you connect and share with the people in your life.
          </Text>
        </View>

        {/* Login card */}
        <View style={styles.right}>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Email address or phone number"
              placeholderTextColor="#8A8D91"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#8A8D91"
              secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.forgotText}>Forgotten password?</Text>

            <View style={styles.divider} />

            <Link href="/register" asChild>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createText}>Create new account</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <Text style={styles.pageText}>
            <Text style={styles.pageBold}>Create a Page</Text> for a celebrity,
            brand or business.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F2F5" },
  content: { flexGrow: 1, justifyContent: "center", padding: 20 },

  layout: {
    width: "100%",
    maxWidth: 980,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },

  brand: { flexGrow: 1, flexBasis: 380, maxWidth: 520 },
  logoText: { fontSize: 64, fontWeight: "800", color: "#1877F2", letterSpacing: -2 },
  tagline: { fontSize: 24, color: "#1C1E21", marginTop: 6, lineHeight: 30 },

  right: { width: 396, maxWidth: "100%", alignItems: "center" },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
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
  loginButton: {
    backgroundColor: "#1877F2",
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
  },
  loginText: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  forgotText: { color: "#1877F2", fontSize: 14, textAlign: "center", marginTop: 16 },
  divider: { height: 1, backgroundColor: "#DADDE1", marginVertical: 20 },
  createButton: {
    alignSelf: "center",
    backgroundColor: "#42B72A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  createText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },

  pageText: { fontSize: 14, color: "#1C1E21", marginTop: 24, textAlign: "center" },
  pageBold: { fontWeight: "700" },
});