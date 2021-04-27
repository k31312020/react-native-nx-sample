import React, { FormEvent } from 'react';
import { ScrollView, Alert, Text, GestureResponderEvent } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from './FormStyle';
import { Formik } from 'formik';
import ProductSchema from '../validations/ProductSchema';

export const Form = () => {
  return (
    <Formik
      initialValues={{
        skuid: '',
        productName: '',
        price: '',
        quantity: '',
        description: '',
      }}
      onSubmit={() => Alert.alert('Product created')}
      validationSchema={ProductSchema}
    >
      {({
        values,
        handleChange,
        setFieldTouched,
        isValid,
        touched,
        isSubmitting,
        handleSubmit,
      }) => (
        <ScrollView style={styles.container}>
          <Input
            label="SKUID"
            placeholder="SKUID"
            value={values.skuid}
            style={styles.input}
            onChangeText={handleChange('skuid')}
            onBlur={() => setFieldTouched('skuid')}
          />

          <Input
            label="Product name"
            placeholder="Product name"
            value={values.productName}
            style={styles.input}
            onChangeText={handleChange('productName')}
            onBlur={() => setFieldTouched('productName')}
          />

          <Input
            label="Price"
            value={values.price}
            style={styles.input}
            onChangeText={handleChange('price')}
            onBlur={() => setFieldTouched('price')}
            keyboardType="number-pad"
          />

          <Input
            label="Quantity"
            value={values.quantity}
            style={styles.input}
            onChangeText={handleChange('quantity')}
            onBlur={() => setFieldTouched('quantity')}
            keyboardType="number-pad"
          />

          <Input
            label="Description"
            placeholder="Description"
            value={values.description}
            style={styles.textarea}
            onChangeText={handleChange('description')}
            onBlur={() => setFieldTouched('description')}
            multiline
          />

          <Button title="Create Product" onPress={handleSubmit} />
        </ScrollView>
      )}
    </Formik>
  );
};
