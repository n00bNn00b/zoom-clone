import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const items = [
  {
    id: 1,
    name: "video-camera",
    title: "Mew Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
    customColor: "#0470DC",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
    customColor: "#0470DC",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
    customColor: "#0470DC",
  },
];

function MenuButtons() {
  return (
    <View style={styles.container}>
      {/* One Button */}
      {items.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: item.customColor }}
          >
            <FontAwesome name={item.name} size={23} color={"#efefef"} />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

export default MenuButtons;
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: 600,
  },
});
