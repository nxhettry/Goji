import { Image, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Recenttxns from "@/components/Homepage/Recenttxns";
export default function Home() {
  const [user, setUser] = useState("User");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>
        {greeting}, {user} 👋
      </Text>
      <Text style={styles.headingText}>Home</Text>

      {/* Wallet Balance Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={require("../../assets/images/wallet.png")}
            style={styles.walletIcon}
          />
          <Text style={styles.cardTitle}>Wallet Balance</Text>
        </View>
        <Text style={styles.cardBalance}>Rs. 1000</Text>

        {/* Round Button */}
        <View style={styles.cardButton}>
          <Image
            style={styles.arrowImage}
            source={require("../../assets/images/arrow.png")}
          />
        </View>
      </View>

      {/* Recent Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <Recenttxns fallback={<Text style={styles.loadingText}>Loading...</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  greetingText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  headingText: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0c8ce9",
  },
  card: {
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: 180,
    backgroundColor: "#0c8ce9",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  walletIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardBalance: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginTop: 10,
  },
  cardButton: {
    backgroundColor: "#0c8ce9",
    borderWidth: 8,
    borderColor: "#fff",
    height: 60,
    width: 60,
    borderRadius: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    bottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  arrowImage: {
    width: 25,
    height: 25,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});
