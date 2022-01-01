import React from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
	item: {
		flexDirection: "row"
	},
	color: {
		marginRight: 5,
		padding: 10
	},
	text: {
		marginRight: 5,
		fontWeight: "bold"
	}
})

const Piekey = ({ color, text, per }) => {
	return (
		<View style={styles.item}>
			{!!color && (
				<View
					style={{ ...styles.color, backgroundColor: color }}></View>
			)}
			<Text style={styles.text}>{text}:</Text>
			<Text>
				{Number(per).toFixed(0)}
				{!!color && "%"}
			</Text>
		</View>
	)
}

export default Piekey
