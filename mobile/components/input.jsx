import React from "react"
import { View, TextInput, StyleSheet } from "react-native"

const styles = StyleSheet.create({
	input: {
		backgroundColor: "white",
		elevation: 2,
		borderRadius: 5,
		padding: 10,
		marginBottom: 5
	}
})

const Input = ({ style, ...attr }) => {
	return (
		<View>
			<TextInput style={{ ...styles.input, ...style }} {...attr} />
		</View>
	)
}

export default Input
