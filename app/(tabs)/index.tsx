import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Recenttxns from "@/components/Homepage/Recenttxns";

export default function home() {
  const [user, setUser] = useState("User");

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "normal",
        }}
      >
        Hello, {user}
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Home
      </Text>

      {/* The card */}
      <View style={styles.card}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Wallet Balance
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          Rs. 1000
        </Text>
        {/* The round button */}
        <View style={styles.cardButton}>
          <Image
            style={{
              width: 30,
              height: 20,
            }}
            source={require("../../assets/images/arrow.png")}
          />
        </View>
      </View>

      {/* Recent transactions */}
      <Recenttxns />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 15,
  },
  card: {
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "94%",
    height: 150,
    backgroundColor: "#0c8ce9",
    borderRadius: 10,
    padding: 10,
  },
  cardButton: {
    backgroundColor: "#0c8ce9",
    borderWidth: 10,
    borderColor: "#fff",
    height: 60,
    width: 60,
    shadowColor: "#000",
    borderRadius: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: -6,
    bottom: -6,
  },
});
