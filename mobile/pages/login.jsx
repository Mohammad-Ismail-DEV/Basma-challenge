import { Formik } from "formik"
import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import { postLogin } from "../services/axios"
import Input from "../components/input"
import MyButton from "../components/button"

const styles = StyleSheet.create({
	title: { fontSize: 100, color: "orange", textAlign: "center" },
	form: {
		padding: 15
	},
	input: { marginBottom: 20 },
	container: { justifyContent: "center", flex: 1 }
})

const Login = () => {
	let navigate = useNavigate()

	const login = (values) => {
		postLogin({
			email: values.email,
			password: values.password
		})
			.then(async (r) => {
				await AsyncStorage.setItem("user", r.data.user.name)
				navigate("/home")
			})
			.catch((e) => {
				alert(e.response.data.message)
			})
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.title}>BASMA</Text>
				<Formik
					initialValues={{
						email: "",
						password: ""
					}}
					onSubmit={login}>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<View>
							<Input
								placeholder="Email"
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								value={values.email}
							/>
							<Input
								style={styles.input}
								secureTextEntry={true}
								placeholder="Password"
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								value={values.password}
							/>
							<MyButton
								onPress={handleSubmit}
								text="Login"></MyButton>
						</View>
					)}
				</Formik>
			</View>
		</SafeAreaView>
	)
}

export default Login
