import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function StartMeeting({ name, roomId, setName, setRoomId, joinRoom }) {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          placeholderTextColor="#767476"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Room ID"
          placeholderTextColor="#767476"
          value={roomId}
          onChangeText={(id) => {
            setRoomId(id);
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => joinRoom()}
          style={styles.startMeetingButton}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default StartMeeting;

const styles = StyleSheet.create({
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    borderRadius: 15,
  },
});
