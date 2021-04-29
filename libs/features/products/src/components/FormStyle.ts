import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: 500,
  },
  input: {
    padding: 4,
    marginBottom: 5,
  },
  textarea: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlignVertical: 'top',
    borderBottomWidth: 0,
  },
  select: {
    padding: 4,
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a6a6a6',
  },
  error: {
    fontSize: 14,
    color: '#ff1c1c',
  },
});
