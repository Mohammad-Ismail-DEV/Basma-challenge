import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import MyButton from "./button"
import { postLogout } from "../services/axios"
import { useNavigate } from "react-router-native"

const styles = StyleSheet.create({
	header: {
		backgroundColor: "rgb(122, 46, 228)",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		elevation: 1,
		borderBottomWidth: 0
	},
	text: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		padding: 5
	}
})

const Header = () => {
	const [user, setUser] = useState("")
	const navigate = useNavigate()

	AsyncStorage.getItem("user").then((r) => {
		setUser(r)
	})

	const logout = () => {
		postLogout()
		navigate("/")
	}

	return (
		<View style={styles.header}>
			<Text style={styles.text}>{user}</Text>
			<MyButton onPress={() => logout()} text="Logout" />
		</View>
	)
}

export default Header
