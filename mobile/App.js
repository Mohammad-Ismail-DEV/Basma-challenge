import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"
import Home from "./pages/home"
import Login from "./pages/login"
const styles = StyleSheet.create({
	app: {
		backgroundColor: "rgb(246, 249, 254)",
		flex: 1
	}
})

const App = () => {
	return (
		<SafeAreaView style={styles.app}>
			<NativeRouter>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Login />} />
				</Routes>
			</NativeRouter>
		</SafeAreaView>
	)
}

export default App
