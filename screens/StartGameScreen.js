import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 15,
        marginTop: 100,
        marginHorizontal: 20,
        backgroundColor: '#72063c',
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});


export default StartGameScreen;