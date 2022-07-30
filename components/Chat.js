import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import ChatHeader from "./ChatHeader";
function Chat({ setModalVisible }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <ChatHeader setModalVisible={setModalVisible} />
        {/* chat messages */}
        {/* type messages */}
      </SafeAreaView>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
});
