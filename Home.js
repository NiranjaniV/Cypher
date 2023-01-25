import React from "react";
import { ReactDOM } from "react-dom";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  SafeAreaView,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.fontStyle, styles.fontAlign]}>
        Get the world's First non-custodial cypher card
      </Text>
      <Text
        style={[
          styles.fontAlign,
          { fontSize: 20, paddingLeft: 0, paddingTop: 10 },
        ]}
      >
        Explore all of Web3 in one place
      </Text>
      <View style={{ paddingTop: 50, flex: 1, flexDirection: "row" }}>
        <Image
          source={require("./assets/swap.png")}
          style={{ height: 55, width: 55 }}
        ></Image>
        <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 2 }}>
          Swap to get instant USD
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          source={require("./assets/buy.png")}
          style={{ height: 55, width: 55 }}
        ></Image>
        <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 2 }}>
          Buy at an affordable price
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          source={require("./assets/chain.png")}
          style={{ height: 55, width: 55 }}
        ></Image>
        <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 2 }}>
          9 chains supported-more coming soon!
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          source={require("./assets/browser.png")}
          style={{ height: 55, width: 55 }}
        ></Image>
        <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 2 }}>
          Accepted all over the world
        </Text>
      </View>
      <Button title="CREATE NEW WALLET"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 25,
  },
  fontAlign: {
    position: "relative",
    alignItems: "center",
    top: 30,
  },
  fontStyle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  bannerImage: {
    width: "100%",
    height: "20%",
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  helpText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  hintText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
});
