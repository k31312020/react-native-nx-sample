import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { styles } from './FormStyle';

export const FormInput = ({
  error,
  type,
  label,
  placeholder = '',
  ...otherProps
}) => {
  switch (type) {
    case 'text': {
      return (
        <View style={styles.input}>
          <Input
            label={label}
            placeholder={placeholder || label}
            errorMessage={error}
            {...otherProps}
          />
        </View>
      );
    }

    case 'number': {
      return (
        <View style={styles.input}>
          <Input
            label={label}
            placeholder={placeholder || label}
            errorMessage={error}
            keyboardType="number-pad"
            {...otherProps}
          />
        </View>
      );
    }

    case 'textarea': {
      return (
        <Input
          style={styles.textarea}
          label={label}
          placeholder={placeholder || label}
          errorMessage={error}
          multiline
          {...otherProps}
        />
      );
    }
  }
};
