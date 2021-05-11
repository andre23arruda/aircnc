import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        marginTop: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputLabel: {
        marginTop: 15,
        width: '90%',
        textAlign: 'left',
        fontWeight: 'bold',
    },

    input: {
        borderWidth: 1,
        width: '90%',
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 3,
    },

    button: {
        width: '90%',
        backgroundColor: '#e02041',
        padding: 12,
        borderRadius: 3,
        marginTop: 15,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
