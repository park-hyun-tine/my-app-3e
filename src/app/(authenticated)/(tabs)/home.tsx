import { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";

type Post = {
  id: string;
  name: string;
  username: string;
  time: string;
  text: string;
  color: string;
  avatar?: string;
  image?: string;
  likes: number;
  comments: number;
};

type Story = {
  id: string;
  name: string;
  color: string;
  seen?: boolean;
};

const FALLBACK_IMAGE = "https://picsum.photos/id/1018/800/600";

const STORIES: Story[] = [
  { id: "s1", name: "Taylor Swift", color: "#DB2777" },
  { id: "s2", name: "Ed Sheeran", color: "#EA580C" },
  { id: "s3", name: "Selena Gomez", color: "#0D9488", seen: true },
  { id: "s4", name: "Bruno Mars", color: "#7C3AED" },
  { id: "s5", name: "The Weeknd", color: "#475569", seen: true },
  { id: "s6", name: "Justin Bieber", color: "#4F46E5" },
];

const POSTS: Post[] = [
  {
    id: "1",
    name: "Justin Bieber",
    username: "justinbieber",
    time: "2h",
    text: "In the Concert!",
    color: "#4F46E5",
    image:
      "https://people.com/thmb/i8YIMCf5vFX2peJf4WWHC9yfl34=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(926x187:928x189)/justin-bieber-sziget-fest-012924-071a148787a94f208baf8a915478c8a8.jpg",
    likes: 128,
    comments: 14,
  },
  {
    id: "2",
    name: "Taylor Swift",
    username: "taylorswift",
    time: "5h",
    text: "Finally finished my new composed song.",
    color: "#DB2777",
    likes: 54,
    comments: 6,
  },
  {
    id: "3",
    name: "Ed Sheeran",
    username: "edsheeran",
    time: "8h",
    text: "With my bro.",
    color: "#EA580C",
    image:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/02/13115739/ed-sheeran-hyderabad.jpg",
    likes: 900,
    comments: 576,
  },
  {
    id: "4",
    name: "Selena Gomez",
    username: "selenagomez",
    time: "1d",
    text: "My new make up brand",
    color: "#0D9488",
    image:
      "https://people.com/thmb/4lrz_VE9sMcEm7u7ySTUfmDXpxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/selena-gomez-rare-beauty-tout-475f8973ffa34df0990416daad701564.jpg",
    likes: 900,
    comments: 700,
  },
  {
    id: "5",
    name: "Bruno Mars",
    username: "brunomars",
    time: "2d",
    text: "Rainy days are for reading and tea.",
    color: "#7C3AED",
    likes: 63,
    comments: 5,
  },
  {
    id: "6",
    name: "The Weeknd",
    username: "theweeknd",
    time: "10hours",
    text: "On fire.",
    color: "#475569",
    image:
      "https://www.rollingstone.com/wp-content/uploads/2026/11/the-weeknd-hong-kong.jpg",
    likes: 1000,
    comments: 700,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stories() {
  return (
    <View style={styles.storiesWrap}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContent}
      >
        {/* Create story card */}
        <View style={styles.createCard}>
          <Image
            source={require("../../../../assets/jusprofile.jpg.jpg")}
            style={styles.createPhoto}
          />
          <View style={styles.createBottom}>
            <View style={styles.createPlus}>
              <Text style={styles.createPlusText}>+</Text>
            </View>
            <Text style={styles.createLabel}>Create story</Text>
          </View>
        </View>

        {/* Other people's stories */}
        {STORIES.map((story) => (
          <View
            key={story.id}
            style={[styles.storyCard, { backgroundColor: story.color }]}
          >
            <View
              style={[
                styles.storyRing,
                story.seen ? styles.storyRingSeen : styles.storyRingNew,
              ]}
            >
              <View style={styles.storyAvatar}>
                <Text style={styles.storyInitials}>{initials(story.name)}</Text>
              </View>
            </View>
            <Text style={styles.storyName} numberOfLines={2}>
              {story.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function Composer() {
  return (
    <View style={styles.composer}>
      <View style={styles.composerRow}>
        <Image
          source={require("../../../../assets/jusprofile.jpg.jpg")}
          style={styles.composerAvatar}
        />
        <View style={styles.composerInput}>
          <Text style={styles.composerText}>What's on your mind, Justin?</Text>
        </View>
      </View>

      <View style={styles.composerLine} />

      <View style={styles.composerActions}>
        <Text style={styles.composerAction}>🎥 Live video</Text>
        <Text style={styles.composerAction}>🖼️ Photo</Text>
        <Text style={styles.composerAction}>😊 Feeling</Text>
      </View>
    </View>
  );
}

function Avatar({ post }: { post: Post }) {
  if (post.avatar) {
    return <Image source={{ uri: post.avatar }} style={styles.avatar} />;
  }
  return (
    <View style={[styles.avatar, styles.avatarFallback, { backgroundColor: post.color }]}>
      <Text style={styles.avatarText}>{initials(post.name)}</Text>
    </View>
  );
}

function PostImage({ uri }: { uri: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      source={{ uri: failed ? FALLBACK_IMAGE : uri }}
      onError={() => setFailed(true)}
      style={styles.postImage}
      resizeMode="cover"
    />
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.card}>
      <View style={styles.postHeader}>
        <Avatar post={post} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.meta}>
            @{post.username} • {post.time} • 🌎
          </Text>
        </View>
        <Text style={styles.more}>•••</Text>
      </View>

      <Text style={styles.body}>{post.text}</Text>

      {post.image && <PostImage uri={post.image} />}

      <View style={styles.counts}>
        <Text style={styles.countText}>👍❤️ {post.likes}</Text>
        <Text style={styles.countText}>{post.comments} comments</Text>
      </View>

      <View style={styles.actions}>
        <Text style={styles.action}>👍 Like</Text>
        <Text style={styles.action}>💬 Comment</Text>
        <Text style={styles.action}>↗ Share</Text>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <View style={styles.screen}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.logoText}>facebook</Text>
      </View>

      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={
          <View>
            <Composer />
            <Stories />
          </View>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F2F5" },

  topBar: {
    backgroundColor: "#FFFFFF",
    paddingTop: 48,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DADDE1",
  },
  logoText: { fontSize: 30, fontWeight: "800", color: "#1877F2", letterSpacing: -1 },

  list: { paddingVertical: 8, width: "100%", maxWidth: 680, alignSelf: "center" },

  /* Composer */
  composer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingTop: 12,
    marginBottom: 8,
  },
  composerRow: { flexDirection: "row", alignItems: "center" },
  composerAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#E4E6EB" },
  composerInput: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#F0F2F5",
    borderRadius: 22,
    paddingVertical: 11,
    paddingHorizontal: 14,
  },
  composerText: { color: "#65676B", fontSize: 16 },
  composerLine: { height: 1, backgroundColor: "#DADDE1", marginTop: 12 },
  composerActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  composerAction: { fontSize: 14, fontWeight: "600", color: "#65676B" },

  /* Stories */
  storiesWrap: { backgroundColor: "#FFFFFF", paddingVertical: 12, marginBottom: 8 },
  storiesContent: { paddingHorizontal: 12, gap: 8 },

  createCard: {
    width: 110,
    height: 190,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DADDE1",
  },
  createPhoto: { width: "100%", height: 135, backgroundColor: "#E4E6EB" },
  createBottom: { flex: 1, alignItems: "center", justifyContent: "flex-end", paddingBottom: 8 },
  createPlus: {
    position: "absolute",
    top: -18,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#1877F2",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  createPlusText: { color: "#FFFFFF", fontSize: 20, fontWeight: "800", marginTop: -3 },
  createLabel: { fontSize: 13, fontWeight: "700", color: "#050505" },

  storyCard: {
    width: 110,
    height: 190,
    borderRadius: 12,
    padding: 10,
    justifyContent: "space-between",
  },
  storyRing: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  storyRingNew: { borderColor: "#1877F2" },
  storyRingSeen: { borderColor: "#B0B3B8" },
  storyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  storyInitials: { color: "#FFFFFF", fontSize: 12, fontWeight: "800" },
  storyName: { color: "#FFFFFF", fontSize: 13, fontWeight: "700" },

  /* Posts */
  card: {
    backgroundColor: "#FFFFFF",
    marginBottom: 8,
    paddingTop: 12,
  },
  postHeader: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#E4E6EB" },
  avatarFallback: { alignItems: "center", justifyContent: "center" },
  avatarText: { color: "#FFFFFF", fontSize: 15, fontWeight: "800" },
  headerText: { marginLeft: 10, flex: 1 },
  name: { fontSize: 15, fontWeight: "700", color: "#050505" },
  meta: { fontSize: 13, color: "#65676B", marginTop: 1 },
  more: { fontSize: 16, color: "#65676B", fontWeight: "800" },

  body: { fontSize: 16, lineHeight: 22, color: "#050505", paddingHorizontal: 12, paddingVertical: 12 },
  postImage: { width: "100%", height: 300, backgroundColor: "#E4E6EB" },

  counts: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  countText: { fontSize: 14, color: "#65676B" },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#DADDE1",
    marginHorizontal: 12,
    paddingVertical: 10,
  },
  action: { fontSize: 14, fontWeight: "600", color: "#65676B" },
});