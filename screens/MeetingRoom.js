import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { io } from "socket.io-client";
import StartMeeting from "../components/StartMeeting";
let socket;
import FontAwesome from "react-native-vector-icons/FontAwesome";

function MeetingRoom() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [activeUsers, setActiveUsers] = useState(["abc", "def"]);
  const [startCamera, setStartCamera] = useState(false);

  const startsCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access Denied!");
    }
  };
  const menuIcons = [
    {
      id: 1,
      name: "microphone",
      title: "Mute",
      customColor: "#efefef",
    },
    {
      id: 2,
      name: "video-camera",
      title: "Stop Video",
    },
    {
      id: 3,
      name: "upload",
      title: "Share Content",
    },
    {
      id: 4,
      name: "group",
      title: "Participants",
    },
  ];

  let socket;

  const joinRoom = () => {
    startsCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };
  useEffect(() => {
    const url = "https://b2d7-118-179-95-193.in.ngrok.io";
    socket = io(`${url}`);
    socket.on("connection", () => console.log("connected"));
    socket.on("all-users", (users) => {
      console.log("Active Users");
      setActiveUsers(users);
      console.log(users);
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* Camera */}
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.cameraContainer}>
            <Camera
              type={"front"}
              style={{ width: "100%", height: 600 }}
            ></Camera>
            {activeUsers.map((user, index) => (
              <View key={index} style={styles.activeUserContainer}>
                <Text style={{ color: "#efefef" }}>{user}</Text>
              </View>
            ))}
          </View>

          <View style={styles.menu}>
            {menuIcons.map((icon, index) => (
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwesome name={icon.name} size={24} color={"#efefef"} />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        // Start meeting section
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
