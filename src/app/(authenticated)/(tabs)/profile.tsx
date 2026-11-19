import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DETAILS = [
  { icon: "✉️", label: "Email", value: "occ.jayoma.justineearl.com" },
  { icon: "📞", label: "Phone", value: "+63 939 256 8057" },
  { icon: "📍", label: "Lives in", value: "Cagayan de Oro, Philippines" },
  { icon: "🎂", label: "Birthday", value: "May 04, 2005" },
  { icon: "🎓", label: "Studies", value: "Information Technology" },
];

export default function Profile() {
  return (
    <View style={styles.screen}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.logoText}>facebook</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrapper}>
          {/* Cover photo */}
          <View style={styles.cover} />

          {/* Picture, name, friends, buttons and bio */}
          <View style={styles.info}>
            <View style={styles.headerRow}>
              <Image
                source={require("../../../../assets/jusprofile.jpg")}
                style={styles.avatar}
              />

              <View style={styles.nameBlock}>
                <Text style={styles.name}>Justin Jayoma</Text>
                <Text style={styles.friends}>1.1K friends</Text>
                <Text style={styles.username}>@justinjayoma</Text>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity style={styles.storyButton}>
                  <Text style={styles.storyPlus}>+</Text>
                  <Text style={styles.storyText}>Add to story</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.grayButton}>
                  <Text style={styles.grayIcon}>✏️</Text>
                  <Text style={styles.grayText}>Edit profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.grayButton}>
                  <Text style={styles.grayText}>▾</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.line} />

            <Text style={styles.bio}>Pag I.T aron Imo Tanan.</Text>
          </View>

          {/* Personal details */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Personal details</Text>
            {DETAILS.map((item) => (
              <View key={item.label} style={styles.row}>
                <View style={styles.iconCircle}>
                  <Text style={styles.rowIcon}>{item.icon}</Text>
                </View>
                <View style={styles.rowTextWrap}>
                  <Text style={styles.rowLabel}>{item.label}</Text>
                  <Text style={styles.rowValue}>{item.value}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F2F5" },
  content: { paddingBottom: 40 },
  wrapper: { width: "100%", maxWidth: 860, alignSelf: "center" },

  topBar: {
    backgroundColor: "#FFFFFF",
    paddingTop: 48,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DADDE1",
  },
  logoText: { fontSize: 30, fontWeight: "800", color: "#1877F2", letterSpacing: -1 },

  cover: { height: 180, backgroundColor: "#9DBFF2" },

  info: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: 16,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    backgroundColor: "#E4E6EB",
    marginTop: -64,
  },

  nameBlock: { flexGrow: 1, flexBasis: 180, paddingTop: 12 },
  name: { fontSize: 28, fontWeight: "800", color: "#050505" },
  friends: { fontSize: 15, fontWeight: "600", color: "#65676B", marginTop: 2 },
  username: { fontSize: 14, color: "#65676B", marginTop: 2 },

  actions: { flexDirection: "row", gap: 8 },

  storyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1877F2",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  storyPlus: { color: "#FFFFFF", fontSize: 18, fontWeight: "700", marginRight: 6 },
  storyText: { color: "#FFFFFF", fontSize: 15, fontWeight: "700" },

  grayButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E4E6EB",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  grayIcon: { fontSize: 14, marginRight: 6 },
  grayText: { color: "#050505", fontSize: 15, fontWeight: "700" },

  line: { height: 1, backgroundColor: "#DADDE1", marginTop: 16 },
  bio: { fontSize: 16, color: "#050505", marginTop: 14 },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 12,
    marginHorizontal: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: { fontSize: 20, fontWeight: "800", color: "#050505", marginBottom: 8 },
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 8 },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E4E6EB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rowIcon: { fontSize: 18 },
  rowTextWrap: { flexShrink: 1 },
  rowLabel: { fontSize: 13, color: "#65676B" },
  rowValue: { fontSize: 16, color: "#050505", marginTop: 1 },
});