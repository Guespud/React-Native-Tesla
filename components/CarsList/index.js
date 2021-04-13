import React from "react";
import { View, FlatList,Dimensions} from "react-native";
import styles from "./styles";
import Cars from "./cars";
import CarItem from "../Caritem";

const CarsList = () => {
  return (
    <View style={styles.container}>
        <FlatList
        data={Cars}
        renderItem={({item}) => <CarItem car={item}/>}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        />
    </View>
  );
};

export default CarsList;
