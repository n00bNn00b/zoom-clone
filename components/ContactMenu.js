import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function ContactMenu() {
  const contacsMenuButtons = [
    {
      type: "starred",
      name: "Starred",
    },
    {
      type: "contact",
      name: "Jessy The",
      photo: require("../assets/1.jpg"),
    },
    {
      type: "contact",
      name: "Nazariy Dumanskyy",
      photo: require("../assets/2.jpg"),
    },
    {
      type: "contact",
      name: "Rafeh Qazi",
      photo: require("../assets/3.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      {/* Contact Container */}

      {contacsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {/* Image */}
          {contact.type === "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}

          <View>
            <Text style={styles.text}>{contact.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default ContactMenu;

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
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
