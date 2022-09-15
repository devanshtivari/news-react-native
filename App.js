import { StyleSheet, Text, View, StatusBar  } from "react-native";
import Newstab from './Components/newstab';

export default function App() {
  return (
    <View style={styles.container}>
      <Newstab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar,
  },
});
