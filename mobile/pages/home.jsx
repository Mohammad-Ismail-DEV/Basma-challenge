import React, { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import PieChart from "react-native-pie-chart"
import Card from "../components/card"
import Header from "../components/header"
import Input from "../components/input"
import Piekey from "../components/piekey"
import { getAverage, getCustomer } from "../services/axios"
import { Picker } from "@react-native-picker/picker"
import Icon from "react-native-vector-icons/AntDesign"

let debounce

const styles = StyleSheet.create({
	container: {
		display: "flex",
		padding: 15,
		paddingBottom: 50
	},
	button: {
		alignSelf: "center"
	},
	pieHolder: {
		alignItems: "center",
		marginBottom: 10,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	keyHolder: {
		marginRight: 5
	},
	all: {
		fontSize: 20,
		fontWeight: "bold",
		paddingBottom: 15
	},
	control: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	picker: {
		backgroundColor: "white",
		elevation: 2,
		borderRadius: 5,
		marginBottom: 5,
		alignSelf: "flex-start",
		width: 100
	},
	paginate: {
		flexDirection: "row",
		alignItems: "center"
	},
	page: { marginHorizontal: 5, fontSize: 18 },
	outof: {
		fontSize: 18,
		fontWeight: "bold"
	}
})

const Home = () => {
	const [customer, setCustomer] = useState([])
	const [average, setAverage] = useState([])
	const [averageKeys, setAverageKeys] = useState([])
	const [id, setId] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [page, setPage] = useState(1)
	const [paginate, setPaginate] = useState(20)
	const [allAvg, setAllAvg] = useState(0)
	const [from, setFrom] = useState(1)
	const [to, setTo] = useState(20)
	const [lastPage, setLastPage] = useState(0)

	const sliceColor = [
		"rgb(255, 99, 132)",
		"rgb(54, 162, 235)",
		"rgb(255, 206, 86)",
		"rgb(75, 192, 192)",
		"rgb(153, 102, 255)",
		"rgb(255, 159, 64)"
	]
	useEffect(() => {
		getCustomer({
			id: id,
			name: name,
			email: email,
			paginate: paginate,
			page: page
		}).then((r) => {
			setCustomer(r.data.data)
			setFrom(r.data.from)
			setTo(r.data.to)
			setLastPage(r.data.last_page)
		})
		getAverage().then((r) => {
			console.log(`r.data`, r.data)
			setAllAvg(r.data.all)
			delete r.data.all
			setAverage(Object.values(r.data))
			setAverageKeys(Object.keys(r.data))
		})
	}, [id, name, email, paginate, page])
	return (
		<SafeAreaView>
			<Header />
			<ScrollView>
				<View style={styles.container}>
					{!!average.length && (
						<View style={styles.pieHolder}>
							<View style={styles.keyHolder}>
								<Text style={styles.all}>All: {allAvg}</Text>
								{averageKeys.map((v, k) => (
									<Piekey
										key={k}
										color={sliceColor[k]}
										text={v}
										per={(average[k] / allAvg) * 100}
									/>
								))}
							</View>
							<PieChart
								widthAndHeight={240}
								series={average}
								sliceColor={sliceColor}
								doughnut={true}
								coverRadius={0.45}
								coverFill={"#FFF"}
							/>
						</View>
					)}
					<Input
						keyboardType="number-pad"
						placeholder="Search by ID"
						onChangeText={(e) => {
							clearTimeout(debounce)
							debounce = setTimeout(() => {
								setId(e)
							}, 100)
						}}
					/>
					<Input
						placeholder="Search by Name"
						onChangeText={(e) => {
							clearTimeout(debounce)
							debounce = setTimeout(() => {
								setName(e)
							}, 100)
						}}
					/>
					<Input
						placeholder="Search by Email"
						keyboardType="email-address"
						onChangeText={(e) => {
							clearTimeout(debounce)
							debounce = setTimeout(() => {
								setEmail(e)
							}, 100)
						}}
					/>
					<View style={styles.control}>
						<Picker
							style={styles.picker}
							selectedValue={paginate}
							onValueChange={(itemValue, itemIndex) =>
								setPaginate(itemValue)
							}>
							<Picker.Item label="20" value="20" />
							<Picker.Item label="40" value="40" />
							<Picker.Item label="60" value="60" />
							<Picker.Item label="All" value={allAvg} />
						</Picker>
						<Text style={styles.outof}>
							{from} to {to} of {allAvg}
						</Text>
						<View style={styles.paginate}>
							<Icon
								onPress={() => setPage(1)}
								name="doubleleft"
								size={20}
							/>
							<Icon
								onPress={() => setPage(page - 1)}
								name="left"
								size={20}
							/>
							<Text style={styles.page}>{page}</Text>
							<Icon
								onPress={() => setPage(page + 1)}
								name="right"
								size={20}
							/>
							<Icon
								onPress={() => setPage(lastPage)}
								name="doubleright"
								size={20}
							/>
						</View>
					</View>
					{customer.map((v, k) => (
						<Card key={k} id={v.id} name={v.name} email={v.email} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
