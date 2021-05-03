import React from 'react';
import { Formik } from 'formik';
import { TextInput, Button, View, Text } from 'react-native';
import { styles } from './style';
import { signInValidation } from '../validator/validator';
import { User } from '../models/user.model';
import { useDispatch } from 'react-redux';
import { logInEffect} from '../store/actions';

export const SignIn = ({ navigation }) => {

  const dispatch = useDispatch();

  const onSignIn = (form: User) => {
    dispatch(logInEffect(form, navigation));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Formik initialValues={{ email: '', password: '' }} validationSchema={signInValidation} onSubmit={onSignIn}>
        {({ errors, touched, setFieldTouched, handleChange, handleSubmit, values }) => (
          <View style={styles.formContainer}>
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
              title="Sign In"
              style={styles.button}
            />
            <View style={styles.signUpTextContainer}>
              <Text style={styles.text}>Don't have an account?  <Text style={styles.signUp} onPress={() => navigation.navigate('signup')}>Sign Up</Text></Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}
