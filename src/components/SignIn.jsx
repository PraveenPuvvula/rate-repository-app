import Text from './Text';
import { TextInput, Pressable, View, StyleSheet, Platform } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#792c2c',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: Platform.OS === 'android' ? 'green' : 'navy',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 14,
  },
	error: {
		color: 'red',
		padding: 5
	}
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    // .min(1, 'Weight must be greater or equal to 1')
    .required('Username is required'),
  password: yup
    .string()
    // .min(0.5, 'Height must be greater or equal to 0.5')
    .required('Password is required'),
});

// the form component
const SignInForm = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues,
		validationSchema,
    onSubmit,
  });

  return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
			{formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
			<TextInput
				style={styles.input}
				secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
			{formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
	);
};

const SignIn = () => {
	const onSubmit = (values) => {
  	console.log(values);
	};
	return <SignInForm onSubmit={onSubmit} />;
}

export default SignIn;