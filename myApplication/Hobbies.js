import { Text, View, StyleSheet, Image, Button, Alert, TextComponent } from "react-native";
import GridImageView from 'react-native-grid-image-viewer';

const Hobbies = () => {
    return (
      <View style={styles.background}>
        <Text style={styles.headline_text}>My Hobbies</Text>
        <Text style={styles.explore_text}>
          Click on an image to view in full screen mode
        </Text>
  
        {/* Basic Usage */}
        <GridImageView data={[ 'https://bit.ly/3ZpfwHs',
                                'https://bit.ly/3ZrTkwv',
                                'https://bit.ly/3zdrl95',
                                'https://bit.ly/3nlg03W',
                                'https://bit.ly/3Zv1q7o']} />
       </View>
    );
  };
  
  const styles = StyleSheet.create({
    background: {
      backgroundColor: 'black',
      flex: 1,
    },
    headline_text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
     
      color: 'gold',
      marginLeft: 100,
    },
    explore_text: {
      marginTop: 5,
      marginBottom: 10,
      color: 'white',
      marginLeft: 20,
      fontSize: 12,
      fontWeight: '600',
    },
  });
  
export default Hobbies