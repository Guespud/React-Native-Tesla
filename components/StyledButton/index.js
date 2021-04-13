import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import styles from "./style";

const StyledButton = (props) => {
  
  const { content, onPress, type } = props;

  const backgroundColor = type == "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type == "primary" ? "#FFFFFFA6" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, , { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
