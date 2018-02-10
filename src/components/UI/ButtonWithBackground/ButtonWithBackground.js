import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const buttonWithBackground = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text>{props.children}</Text>
    </View>
  );
  const TouchablePlatform = (Platform.OS === 'android') ?
    TouchableNativeFeedback :
    TouchableOpacity;

  return (
    <TouchablePlatform onPress={props.onPress}>
      {content}
    </TouchablePlatform>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black'
  }
});

export default buttonWithBackground;