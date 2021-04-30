import React from 'react';
import {Formik} from 'formik'
import {TextInput, Button, View, Text} from 'react-native'
import {styles} from './style'
import {signUpValidation} from '../validator/validator'
import {Service} from '../services/services';

export const SignUp = ({navigation}) => (
  <View style = {styles.container}>
      
      <Text style={styles.title}>Sign Up</Text>
      <Formik initialValues = {{email: '', username: '', password: ''}} validationSchema = {signUpValidation} onSubmit={ values => {Service(values)}}>
         {({ errors, touched, setFieldTouched,  handleChange, handleSubmit, values }) => (
              <View style={styles.formContainer}>
              <TextInput
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={() => setFieldTouched('username')}
                style={styles.input}
                placeholder="Username"
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                style={styles.input}
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                style={styles.input}
                placeholder="Password"
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <Button
                onPress={handleSubmit}
                title="Sign Up"
                style={styles.button}
              />
              <View style = {styles.signUpTextContainer}>
                <Text style = {styles.text}>Already register?  <Text style={styles.signUp} onPress={() => navigation.navigate('signin')}>Sign In</Text></Text>
              </View>
            </View>
         )}
    </Formik>
  </View>
)