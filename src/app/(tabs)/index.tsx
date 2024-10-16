import { StyleSheet, View , Text } from 'react-native';

//import EditScreenInfo from '@/src/components/EditScreenInfo';
//import { Text, View } from '@/src/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Content}> Hello World </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  Content : {
     color:'white'
  },
});
