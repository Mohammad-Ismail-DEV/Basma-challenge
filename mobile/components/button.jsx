import React, { useState } from "react"
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native"

const MyButton = ({ text, onPress, style }) => {
	const [rippleOverflow, setRippleOverflow] = useState(false)
	const rippleColor = "rgb(246, 249, 254)"
	return (
		<TouchableNativeFeedback
			onPress={() => {
				setRippleOverflow(!rippleOverflow)
				onPress()
			}}
			background={TouchableNativeFeedback.Ripple(
				rippleColor,
				rippleOverflow
			)}>
			<View style={{ ...styles.touchable, ...style }}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableNativeFeedback>
	)
}

const randomHexColor = () => {
	return "#000000".replace(/0/g, function () {
		return (~~(Math.random() * 16)).toString(16)
	})
}

const styles = StyleSheet.create({
	touchable: { padding: 10, backgroundColor: "rgb(122, 46, 228)" },
	text: {
		alignSelf: "center",
		color: "white",
		fontSize: 20,
		fontWeight: "bold"
	}
})

export default MyButton
