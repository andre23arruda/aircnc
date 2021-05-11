import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 24,
        alignItems: 'center',
    },

    form: {
        marginTop: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dateButton: {
        width: '10%',
        marginRight: '2%'
    },

    dateText: {
        width: '78%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 12,
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

    buttonCancel: {
        backgroundColor: '#ccc',
        marginTop: 10,
    }

})
