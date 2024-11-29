import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

interface ItemProps {
  title: string;
  amount: number;
}

export default function Recenttxns() {
  const [data, setData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      amount: 100,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      amount: 100,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      amount: 100,
    },
  ]);

  const Item = ({ title, amount }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        color: "gray"
      }}>{amount}</Text>
    </View>
  );

  const App = () => (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerTable}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} amount={item.amount} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.heading}>
        <Text style={styles.headingText}>Recent Transactions</Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#0c8ce9",
          }}
        >
          See All
        </Text>
      </View>

      {/* The Data Mapping */}
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heading: {
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerTable: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingHorizontal: 4,
    paddingVertical: 12,
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
  title: {
    fontSize: 23,
  },
});
