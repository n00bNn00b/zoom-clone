import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { io } from "socket.io-client";
import StartMeeting from "../components/StartMeeting";
let socket;
function MeetingRoom() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState();

  const joinRoom = () => {
    socket.emit("join-room", { roomId: roomId, userName: name });
  };
  useEffect(() => {
    const url = "https://b2d7-118-179-95-193.in.ngrok.io";
    socket = io(`${url}`);
    socket.on("connection", () => console.log("connected"));
    console.log("working");
  }, []);
  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  startMeetingContainer: {},
});
