import { View, Text, StyleSheet } from 'react-native';

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0c',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
});