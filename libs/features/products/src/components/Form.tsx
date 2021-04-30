import React from 'react';
import { ScrollView, Alert, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './FormStyle';
import { Formik } from 'formik';
import ProductSchema from '../validations/ProductSchema';
import { FormInput } from './FormInput';

const colorOptions = [
  { label: 'Blue', value: 'blue' },
  { label: 'Orange', value: 'orange' },
  { label: 'White', value: 'white' },
  { label: 'Green', value: 'green' },
  { label: 'Pink', value: 'pink' },
  { label: 'Yellow', value: 'yellow' },
];

export const Form = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create Product</Text>
      <Formik
        initialValues={{
          skuid: '',
          productName: '',
          description: '',
          category: '',
          price: '',
          quantity: '',
          color: '',
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
          handleChange,
          handleSubmit,
          setFieldTouched,
          setFieldValue,
        }) => (
          <View style={styles.formContainer}>
            <FormInput
              type="number"
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
              type="text"
              label="Category"
              value={values.category}
              onChangeText={handleChange('category')}
              onBlur={() => setFieldTouched('category')}
              error={touched.category && errors.category}
              autocomplete="name"
            />

            <FormInput
              type="select"
              label="color"
              value={values.color}
              onSelect={(value) => setFieldValue('color', value)}
              onBlur={() => setFieldTouched('color')}
              error={touched.color && errors.color}
              options={colorOptions}
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

            <Button title="Create Product" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
