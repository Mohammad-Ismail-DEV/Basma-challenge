import React from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
	card: {
		justifyContent: "space-between",
		elevation: 3,
		borderRadius: 5,
		backgroundColor: "white",
		padding: 15,
		marginBottom: 10
	},
	id: {
		fontSize: 10,
		fontWeight: "bold",
		marginBottom: 10
	},
	name: {
		fontSize: 20,
		color: "rgb(122, 46, 228)",
		fontWeight: "bold"
	},
	email: {
		fontSize: 15,
		color: "gray"
	}
})

const Card = ({ id, name, email }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.id}>{id}</Text>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.email}>{email}</Text>
		</View>
	)
}

export default Card
