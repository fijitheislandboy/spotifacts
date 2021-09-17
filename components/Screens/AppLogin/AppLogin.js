//
//  AppLogin
//  spotificats
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AppLogin extends React.Component {

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
				style={styles.appLoginView}>
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
						source={require("./../../../assets/images/mask-3.png")}
						style={styles.maskImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 28,
						right: 83,
						top: 207,
						bottom: 23,
						alignItems: "center",
					}}>
					<Text
						style={styles.spotifactsText}>Spotifacts</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 40,
							marginRight: 23,
							marginTop: 218,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.usernameText}>Username</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.enterYourUsernameText}>Enter your username</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 204,
							height: 19,
							marginTop: 28,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.passwordText}>Password</Text>
						<Text
							style={styles.enterPasswordText}>Enter password</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.loginText}>Login</Text>
					<Text
						style={styles.recoverYourPassworText}>Recover Your Password</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	appLoginView: {
		backgroundColor: "black",
		flex: 1,
	},
	maskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 812,
	},
	spotifactsText: {
		color: "white",
		fontSize: 50,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 75,
		backgroundColor: "transparent",
	},
	usernameText: {
		color: "rgb(164, 198, 235)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 58,
		marginTop: 10,
	},
	enterYourUsernameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.53,
		width: 159,
	},
	passwordText: {
		backgroundColor: "transparent",
		color: "rgb(164, 198, 235)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.4,
		marginTop: 4,
	},
	enterPasswordText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.53,
		marginLeft: 26,
	},
	loginText: {
		backgroundColor: "transparent",
		color: "rgb(2, 123, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 36,
		letterSpacing: 0.6,
		marginBottom: 64,
	},
	recoverYourPassworText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.46,
		width: 156,
	},
})
