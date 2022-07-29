import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
function ContextMenu() {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      <View style={styles.row}>
        {/* Image */}
        <View style={styles.starredIcon}>
          <AntDesign name="star" size={30} color="#efefef" />
        </View>

        <View>
          <Text style={styles.text}>Starred</Text>
        </View>
      </View>
    </View>
  );
}

export default ContextMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
});
