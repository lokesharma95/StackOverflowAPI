import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchedItem from "./SearchedItem";
import { useSelector } from "react-redux";

const SearchedList = (props) => {
  const data = useSelector((state) => state.search.searchResult);
  const status = useSelector((state) => state.ui.status);

  let content = (
    <View style={styles.viewArea}>
      <Text>{status}</Text>
    </View>
  );

  if (data.length < 1) {
    return content;
  }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={(itemData) => (
          <SearchedItem navigation={props.navigation} data={itemData.item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewArea: {
    padding: 10,
  },
});

export default SearchedList;
