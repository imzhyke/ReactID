import { Text, View, StyleSheet, Image, Button, Alert, TextComponent } from "react-native";
import GridImageView from 'react-native-grid-image-viewer';

const Movies = () => {
    return (
      <View style={styles.background}>
        <Text style={styles.headline_text}>My Favorite Movies</Text>
        <Text style={styles.explore_text}>
          Click on an image to view in full screen mode
        </Text>
  
        {/* Basic Usage */}
        <GridImageView data={[ 'https://bit.ly/3U0reqT',
                                'https://bit.ly/3njdATp',
                                'https://bit.ly/3FZpZCu',
                                'https://bit.ly/3KiUJAQ',
                                'https://bit.ly/3nt6qvZ']} />
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
      marginLeft: 20,
      color: 'gold',
      marginLeft: 50,
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
  
export default Movies