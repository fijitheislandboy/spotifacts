//
//  Analytics
//  spotificats
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Analytics extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.analyticsView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Image
						source={require("./../../assets/images/mask-2.png")}
						style={styles.maskImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 46,
						right: 13,
						top: 113,
						bottom: -88,
						alignItems: "center",
					}}>
					<Text
						style={styles.transactionsText}>YOUR ANALYTICS</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 478,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.energyValenceDanceText}>energy{"\n"}Valence{"\n"}Danceability{"\n"}Instrumenta{"\n"}Coupons{"\n"}Giftcards</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textText}>$8.010.00{"\n"}$1.780.00{"\n"}$6.800.00{"\n"}$1.500.00{"\n"}$5.500.00{"\n"}$5.409.00</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	analyticsView: {
		backgroundColor: "black",
		flex: 1,
	},
	maskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 813,
	},
	transactionsText: {
		backgroundColor: "transparent",
		color: "rgb(76, 76, 76)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 33,
		letterSpacing: 0.6,
	},
	energyValenceDanceText: {
		backgroundColor: "transparent",
		color: "rgb(76, 76, 76)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 75,
		letterSpacing: 0.53,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(2, 123, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 75,
		letterSpacing: 0.53,
		marginBottom: 28,
	},
})
