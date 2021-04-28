import React from 'react';
import { ScrollView, Alert, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './FormStyle';
import { Formik } from 'formik';
import ProductSchema from '../validations/ProductSchema';
import { FormInput } from './FormInput';

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
      onSubmit={(values) => {
        Alert.alert('Product created');
        console.log(JSON.stringify(values));
      }}
      validationSchema={ProductSchema}
    >
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleSubmit,
        setFieldTouched,
      }) => (
        <ScrollView style={styles.container}>
          <FormInput
            type="text"
            label="SKUID"
            value={values.skuid}
            onChangeText={handleChange('skuid')}
            onBlur={() => setFieldTouched('skuid')}
            error={touched.skuid && errors.skuid}
          />

          <FormInput
            type="text"
            label="Product name"
            value={values.productName}
            style={styles.input}
            onChangeText={handleChange('productName')}
            onBlur={() => setFieldTouched('productName')}
            error={touched.productName && errors.productName}
          />

          <FormInput
            type="number"
            label="Price"
            value={values.price}
            onChangeText={handleChange('price')}
            onBlur={() => setFieldTouched('price')}
            error={touched.price && errors.price}
          />

          <FormInput
            type="number"
            label="Quantity"
            value={values.quantity}
            onChangeText={handleChange('quantity')}
            onBlur={() => setFieldTouched('quantity')}
            error={touched.quantity && errors.quantity}
          />

          <FormInput
            type="textarea"
            label="Description"
            value={values.description}
            onChangeText={handleChange('description')}
            onBlur={() => setFieldTouched('description')}
            error={touched.description && errors.description}
          />

          <Button
            title="Create Product"
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </ScrollView>
      )}
    </Formik>
  );
};
