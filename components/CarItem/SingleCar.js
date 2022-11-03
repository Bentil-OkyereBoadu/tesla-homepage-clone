import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const SingleCar = (props) => {

  const { name, tagline, taglineCTA, image } = props.car.item
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}{' '} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            // console.warn("custom order");
          }}
        />
        <StyledButton
          type="secondary"
          content="View Inventory"
          onPress={() => {
            // console.warn("inventory");
          }}
        />
      </View>
    </View>
  );
};

export default SingleCar;
