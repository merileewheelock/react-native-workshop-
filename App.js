import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            amount: 0
        }
    }

    handleChange(e){
        console.log(e)
        this.setState({
            amount: e
        })
    }

	render() {
		return (
			<View style={styles.container}>
                <View style={styles.nav}>
                    <TextInput
                        style={styles.amount}
                        placeholder="Enter Bill Amount"
                        placeholderTextColor="#9A73EF"
                        keyboardType="numeric"
                        onChangeText={this.handleChange}
                    />
                </View>
                <View>
                    <Text>${this.state.amount * .2} for great service</Text>
                </View>

				{/*<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
                <Button
                    title="Press me"
                    onPress={()=>{
                        console.log("Pressed!")
                    }}
                />
                <Image
                    source={{ uri: 'http://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png' }}
                />*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ff0',
		alignItems: 'center',
		justifyContent: 'center',
	},
    amount: {
        margin: 20,
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    }
});
