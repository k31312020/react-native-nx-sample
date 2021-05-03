import React from 'react';
import { Formik } from 'formik'
import { TextInput, Button, View, Text } from 'react-native'
import { styles } from './style'
import Service from '../services/services'
import { signInValidation } from '../validator/validator'
import { User } from '../models/user.model';
import { useDispatch } from 'react-redux';
import { logInEffect} from '../store/actions';
import { LanguageSwitcher } from '@selise-react/shared';
import { useTranslation } from 'react-i18next';
 
export const SignIn = ({ navigation }) => {

  const { t } = useTranslation();

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
              placeholder={t('EMAIL')}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              style={styles.input}
              placeholder={t('PASSWORD')}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button
              onPress={handleSubmit}
              title={t('SIGN_IN')}
              style={styles.button}
            />
            <View style={styles.signUpTextContainer}>
              <Text style={styles.text}>Don't have an account?  <Text style={styles.signUp} onPress={() => navigation.push('signup')}>Sign Up</Text></Text>
            </View>
          </View>
        )}
      </Formik>
      <LanguageSwitcher/>
    </View>
  )
}
