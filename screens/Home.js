import React from "react";
import { View, SafeAreaView } from "react-native";
import ContextMenu from "../components/ContextMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";
function Home() {
  return (
    <View>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContextMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home;
