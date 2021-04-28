import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { styles } from './FormStyle';
import { Picker } from '@react-native-picker/picker';
import { Field } from 'formik';

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
        <Input
          containerStyle={styles.input}
          label={label}
          placeholder={placeholder || label}
          errorMessage={error}
          errorStyle={styles.error}
          {...otherProps}
        />
      );
    }

    case 'number': {
      return (
        <Input
          containerStyle={styles.input}
          label={label}
          placeholder={placeholder || label}
          errorMessage={error}
          errorStyle={styles.error}
          keyboardType="number-pad"
          {...otherProps}
        />
      );
    }

    case 'textarea': {
      return (
        <Input
          style={styles.textarea}
          label={label}
          placeholder={placeholder || label}
          errorMessage={error}
          errorStyle={styles.error}
          multiline
          {...otherProps}
        />
      );
    }

    case 'select': {
      return (
        <View style={styles.select}>
          <Text style={styles.label}>{label}</Text>
          <Field as={Select} {...otherProps} />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      );
    }
  }
};

const Select = ({ value, options, onSelect }) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => onSelect(itemValue)}
    >
      <Picker.Item key="default" label="Select a color" value="" />
      {options.map((option) => (
        <Picker.Item
          key={option.label}
          label={option.label}
          value={option.value}
        />
      ))}
    </Picker>
  );
};
