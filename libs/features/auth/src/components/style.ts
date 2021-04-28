import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    formContainer: {
      padding: 14,
      width: 250,
    },
    input: {
      padding: 10,
      marginTop: 7,
      borderRadius: 12,
      marginBottom: 5,
      backgroundColor: '#dae1e7'
    },
   button: {
       backgroundColor: 'green'
   },
    error: {
      fontSize: 12,
      paddingLeft: 10,
      paddingBottom: 10,
      color: '#fb1551',
    },
    signUpTextContainer: {
        paddingTop:20,
        textAlign: 'center'
    },
    text: {
        alignSelf: 'center',
        paddingTop: 10
    },
    signUp: {
        color: '#419efd',
        fontWeight: 'bold'
    }
})

