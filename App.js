import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import SingleCar from './components/CarItem/SingleCar';
import cars from './assets/tesla/cars';
import Header from './components/Header';
export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
       <FlatList
       data={cars}
       renderItem={(item) => <SingleCar car={item}/>}
       style={{
        width: '100%',
       }}
       snapToAlignment={'start'}
       decelerationRate={'fast'}
       snapToInterval={Dimensions.get('window').height}
       showsVerticalScrollIndicator={false}
        />
        <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
