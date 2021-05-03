import React, { useState } from 'react';
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

const ProductImageInput = ({ onAddImage }) => {
  const [image, setImage] = useState(null);

  const handleSelect = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.uri) {
        setImage(response);
        onAddImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.inputContainer}>
      {image && (
        <Image
          source={{ uri: image.uri }}
          PlaceholderContent={<ActivityIndicator />}
          style={styles.image}
        />
      )}
      <Button title="Upload product image" onPress={handleSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ProductImageInput;
